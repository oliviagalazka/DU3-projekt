
async function renderRecipeCard(parentID, recipe) {

    const parent = document.getElementById(parentID);
    const recipeCard = document.createElement('div');
    let favorite = '';

    const user = State.GetEntity('user');

    // if (user.savedRecipes.find(id => id === recipe.id)) {
    //     favorite = 'favorite';
    // }

    recipeCard.id = `rc-${recipe.id}`;
    recipeCard.classList.add('recipe-card');

    recipeCard.addEventListener('click', () => {
        renderRecipePopup(recipe);
    });

    const review = await recipeAveregeReview(recipe);

    recipeCard.innerHTML = `
        <div id='rc-img'></div>
        <div id='rc-info'>
            <h3 id='rc-name'>${recipe.name}</h3>
            <div id='rc-review-heart'>
                <p id='rc-review'>${review.averageRank}/10 (av ${review.totalReviews} omdömen)</p>
                <div id='saved-${recipe.id}' class='rc-heart ${favorite}'>&#x2661</div>
            </div>
        </div>
    `;

    const favoriteBtn = recipeCard.querySelector('.rc-heart');
    favoriteBtn.addEventListener('click', saveRecipe);

    parent.append(recipeCard);

}

async function recipeAveregeReview(recipe) {

    const reviews = State.GetEntity('reviews');

    const allReviews = [];
    for (let review of reviews) {
        if (review.recipeId === recipe.id) {
            allReviews.push(review.rank);
        }
    }

    let totalRank = 0;
    for (let rank of allReviews) {
        totalRank += rank;
    }

    const averageRank = totalRank / allReviews.length;

    if (allReviews.length === 0) {
        return { averageRank: "-", totalReviews: allReviews.length };
    } else {
        return { averageRank: averageRank, totalReviews: allReviews.length };
    }
}


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