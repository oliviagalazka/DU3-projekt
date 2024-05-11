async function renderRecipeCard(parentId, recipe) {
    const user = State.GetEntity('user');

    const parent = document.getElementById(parentId);
    const recipeCard = document.createElement('div');
    recipeCard.id = `rc-${recipe.id}`;
    recipeCard.classList.add('rc');

    const review = await recipeAverageReview(recipe);

    recipeCard.innerHTML = `
        <div class='rc-img'></div>
        <div class='rc-info'>
            <h3 class='rc-name'>${recipe.name}</h3>
            <div class='rc-review-heart'>
                <p class='rc-review'>${review.averageRank}/10 (av ${review.totalReviews} omdömen)</p>
                <div id='saved-${recipe.id}' class='rc-heart'>&#x2661</div>
            </div>
        </div>
    `;

    const saveButton = recipeCard.querySelector('.rc-heart');
    if (user.savedRecipes.find(id => id === recipe.id)) {
        saveButton.classList.add('favorite');
    }
    saveButton.addEventListener('click', saveRecipe);

    recipeCard.addEventListener('click', () => {
        renderRecipePopup(recipe);
    });

    parent.append(recipeCard);
}

// Patch Recipe Funktioner
function get_dom_id(instanceId) {
    return `saved-${instanceId}`;
}

function patchRecipe(instanceData) {
    const recipeId = get_dom_id(instanceData.id);
    const savedDom = document.getElementById(recipeId);

    if (currentLocation === "mypage") {
        document.getElementById('rc-' + instanceData.id).remove();
    }

    if (savedDom.classList.contains('favorite')) {
        savedDom.classList.remove('favorite');
    } else {
        savedDom.classList.add('favorite');
    }
}