async function renderRecipeCard(parentId, recipe) {
    const user = State.GetEntity('user');

    const parent = document.getElementById(parentId);
    const recipeCard = document.createElement('div');
    recipeCard.id = `rc-${recipe.id}`;
    recipeCard.classList.add('rc');

    const review = await recipeAverageReview(recipe);
    let formattedRank = 0;
    if (review != null & review.averageRank != '-') {
        formattedRank = review.averageRank.toFixed(0);
    }


    recipeCard.innerHTML = `
        <div class='rc-img'></div>
        <div class='rc-info'>
            <h3 class='rc-name'>${recipe.name}</h3>
            <div class='rc-review-heart'>
                <p class='rc-review'>${formattedRank}/10 (av ${review.totalReviews} omdömen)</p>
                <div id='saved-${recipe.id}' class='rc-heart'>
                &#x2661
                </div>
            </div>
        </div>
    `;
    // &#x2661
    recipeCard.querySelector('.rc-img').style.backgroundImage = 'url(./images_recipes/' + recipe.image + ')';
    const saveButton = recipeCard.querySelector('.rc-heart');

    saveButton.addEventListener('click', saveRecipe);

    recipeCard.addEventListener('click', () => {
        renderRecipePopup(recipe);
    });

    parent.append(recipeCard);

    const popupHeart = document.getElementById('saved-' + `${recipe.id}`);

    popupHeart.innerText = "♡";
    if (localStorage.getItem('login')) {
        for (let favoriteRecipe of user.savedRecipes) {
            if (recipe.id === favoriteRecipe) {
                popupHeart.textContent = "♥";
                break;
            }
        }
    }
}

// Patch Recipe Funktioner
function get_dom_id(instanceId) {
    return `saved-${instanceId}`;
}

function patchRecipe(instanceData) {
    const recipeId = get_dom_id(instanceData.id);
    const savedDom = document.getElementById(recipeId);

    const popupHeart = document.getElementById('popupheart-' + instanceData.id)

    if (currentLocation === "mypage") {
        document.getElementById('rc-' + instanceData.id).remove();
    }

    // if (savedDom.classList.contains('favorite')) {
    //     savedDom.classList.remove('favorite');
    // } else {
    //     savedDom.classList.add('favorite');
    // }
    if (savedDom != null) {
        if (savedDom.innerText === "♥") {
            savedDom.innerText = "♡";
        } else {
            savedDom.innerText = "♥";
        }
    }

    if (popupHeart != null) {
        if (popupHeart.innerText === "♥") {
            popupHeart.innerText = "♡";
        } else {
            popupHeart.innerText = "♥";
        }
    }

    // popupHeart.innerText = "♡";
    // for (let favoriteRecipe of user.savedRecipes) {
    //     if (recipe.id === favoriteRecipe) {
    //         popupHeart.textContent = "♥";
    //         break;
    //     }
    // }

}


function notLogedInPopup() {
    const notLogedInPopupContainer = document.createElement('div');
    notLogedInPopupContainer.id = 'not-loged-in-popup';

    const notLogedInPopupContent = document.createElement('div');
    notLogedInPopupContent.id = 'not-loged-in-popup-content';

    notLogedInPopupContent.innerHTML = `
        <a href='#' id="close-popup">྾</a>
        <div id="not-loged-in-popup-text">Du behöver logga in för att spara dina favoritrecept!</div>
        <div id="popup-links">
            <a href='./login.html'>Logga In</a>
            <a href='./register.html'>Registrera dig</a>
        </div>
    `;

    document.body.appendChild(notLogedInPopupContainer);
    notLogedInPopupContainer.append(notLogedInPopupContent);

    const closePopup = document.getElementById('close-popup');
    closePopup.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.remove('prevent-scroll');
        notLogedInPopupContainer.remove();
    });

    document.body.classList.add('prevent-scroll');
}
