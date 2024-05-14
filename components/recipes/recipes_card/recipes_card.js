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

    recipeCard.querySelector('.rc-img').style.backgroundImage = 'url(./../../../images_recipes/' + recipe.image + ')';
    const saveButton = recipeCard.querySelector('.rc-heart');

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

function notLogedInPopup() {
    const notLogedInPopupContainer = document.createElement('div');
    notLogedInPopupContainer.id = 'not-loged-in-popup';

    const notLogedInPopupContent = document.createElement('div');
    notLogedInPopupContent.id = 'not-loged-in-popup-content';

    notLogedInPopupContent.innerHTML = `
    <div>Du behöver logga in för att spara dina favoritrecept!</div>
        <a href='./login.html'>Logga In</a>
    <a href='./register.html'>Regist In</a>
    `;

    // Stäng popup knapp
    const closePopupButton = document.createElement('a');
    closePopupButton.id = 'closePopupButton';
    closePopupButton.innerHTML = '྾';
    closePopupButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.remove('prevent-scroll');
        notLogedInPopupContainer.remove();
    });

    notLogedInPopupContent.appendChild(closePopupButton);
    notLogedInPopupContainer.appendChild(notLogedInPopupContent);

    document.body.classList.add('prevent-scroll');
    document.body.appendChild(notLogedInPopupContainer);
}