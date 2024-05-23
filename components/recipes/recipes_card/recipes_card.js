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
                <div id='saved-${recipe.id}' class='rc-heart'>${smallWhiteHeart}</div>
            </div>
        </div>
    `;

    recipeCard.querySelector('.rc-img').style.backgroundImage = 'url(./images_recipes/' + recipe.image + ')';
    const saveButton = recipeCard.querySelector('.rc-heart');

    saveButton.addEventListener('click', saveRecipe);

    recipeCard.addEventListener('click', () => {
        renderRecipePopup(recipe);
    });

    parent.append(recipeCard);

    const popupHeart = document.getElementById('saved-' + `${recipe.id}`);

    popupHeart.innerHTML = smallWhiteHeart;
    if (localStorage.getItem('login')) {
        for (let favoriteRecipe of user.savedRecipes) {
            if (recipe.id === favoriteRecipe) {
                popupHeart.classList.add('favorite');
                popupHeart.innerHTML = smallBlackHeart;
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
    const popupHeart = document.getElementById('popupheart-' + instanceData.id);

    if (currentLocation === "mypage") {
        popupHeart.classList.remove('favorite');
        popupHeart.innerHTML = bigWhiteHeart;
        document.getElementById(`rc-${instanceData.id}`).remove();
        return;
    }

    if (savedDom != null) {
        if (savedDom.classList.contains('favorite')) {
            savedDom.classList.remove('favorite');
            savedDom.innerHTML = smallWhiteHeart;

        } else {
            savedDom.classList.add('favorite');
            savedDom.innerHTML = smallBlackHeart;
        }
    }

    if (popupHeart != null) {
        if (popupHeart.classList.contains('favorite')) {
            popupHeart.classList.remove('favorite');
            popupHeart.innerHTML = bigWhiteHeart;
        } else {
            popupHeart.classList.add('favorite');
            popupHeart.innerHTML = bigBlackHeart;
        }
    }
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

const smallWhiteHeart = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 51 51" fill="none">
                            <mask id="mask0_701_13" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
                                <rect x="0.817383" y="0.227783" width="50" height="50" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_701_13)">
                                <path d="M25.8172 43.9775L22.7964 41.2691C19.2894 38.1094 16.3901 35.3837 14.0985 33.092C11.8068 30.8004 9.98389 28.7431 8.62972 26.9202C7.27555 25.0972 6.32937 23.4219 5.79118 21.8941C5.25298 20.3663 4.98389 18.8038 4.98389 17.2066C4.98389 13.9427 6.07764 11.217 8.26514 9.02954C10.4526 6.84204 13.1783 5.74829 16.4422 5.74829C18.2478 5.74829 19.9665 6.13024 21.5985 6.89412C23.2304 7.65801 24.6367 8.7344 25.8172 10.1233C26.9978 8.7344 28.404 7.65801 30.036 6.89412C31.6679 6.13024 33.3867 5.74829 35.1922 5.74829C38.4561 5.74829 41.1818 6.84204 43.3693 9.02954C45.5568 11.217 46.6506 13.9427 46.6506 17.2066C46.6506 18.8038 46.3815 20.3663 45.8433 21.8941C45.3051 23.4219 44.3589 25.0972 43.0047 26.9202C41.6506 28.7431 39.8276 30.8004 37.536 33.092C35.2443 35.3837 32.345 38.1094 28.8381 41.2691L25.8172 43.9775ZM25.8172 38.3525C29.1506 35.3663 31.8936 32.8056 34.0464 30.6702C36.1992 28.5347 37.9006 26.6771 39.1506 25.0972C40.4006 23.5174 41.2686 22.1111 41.7547 20.8785C42.2408 19.6459 42.4839 18.4219 42.4839 17.2066C42.4839 15.1233 41.7894 13.3872 40.4006 11.9983C39.0117 10.6094 37.2756 9.91496 35.1922 9.91496C33.5603 9.91496 32.0499 10.375 30.661 11.2952C29.2721 12.2153 28.3172 13.3872 27.7964 14.8108H23.8381C23.3172 13.3872 22.3624 12.2153 20.9735 11.2952C19.5846 10.375 18.0742 9.91496 16.4422 9.91496C14.3589 9.91496 12.6228 10.6094 11.2339 11.9983C9.845 13.3872 9.15055 15.1233 9.15055 17.2066C9.15055 18.4219 9.39361 19.6459 9.87972 20.8785C10.3658 22.1111 11.2339 23.5174 12.4839 25.0972C13.7339 26.6771 15.4353 28.5347 17.5881 30.6702C19.7408 32.8056 22.4839 35.3663 25.8172 38.3525Z" fill="#1C1B1F"/>
                            </g>
                        </svg>
                        `;

const bigWhiteHeart = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                            <mask id="mask0_701_13" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
                                <rect x="0.817383" y="0.227783" width="50" height="50" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_701_13)">
                                <path d="M25.8172 43.9775L22.7964 41.2691C19.2894 38.1094 16.3901 35.3837 14.0985 33.092C11.8068 30.8004 9.98389 28.7431 8.62972 26.9202C7.27555 25.0972 6.32937 23.4219 5.79118 21.8941C5.25298 20.3663 4.98389 18.8038 4.98389 17.2066C4.98389 13.9427 6.07764 11.217 8.26514 9.02954C10.4526 6.84204 13.1783 5.74829 16.4422 5.74829C18.2478 5.74829 19.9665 6.13024 21.5985 6.89412C23.2304 7.65801 24.6367 8.7344 25.8172 10.1233C26.9978 8.7344 28.404 7.65801 30.036 6.89412C31.6679 6.13024 33.3867 5.74829 35.1922 5.74829C38.4561 5.74829 41.1818 6.84204 43.3693 9.02954C45.5568 11.217 46.6506 13.9427 46.6506 17.2066C46.6506 18.8038 46.3815 20.3663 45.8433 21.8941C45.3051 23.4219 44.3589 25.0972 43.0047 26.9202C41.6506 28.7431 39.8276 30.8004 37.536 33.092C35.2443 35.3837 32.345 38.1094 28.8381 41.2691L25.8172 43.9775ZM25.8172 38.3525C29.1506 35.3663 31.8936 32.8056 34.0464 30.6702C36.1992 28.5347 37.9006 26.6771 39.1506 25.0972C40.4006 23.5174 41.2686 22.1111 41.7547 20.8785C42.2408 19.6459 42.4839 18.4219 42.4839 17.2066C42.4839 15.1233 41.7894 13.3872 40.4006 11.9983C39.0117 10.6094 37.2756 9.91496 35.1922 9.91496C33.5603 9.91496 32.0499 10.375 30.661 11.2952C29.2721 12.2153 28.3172 13.3872 27.7964 14.8108H23.8381C23.3172 13.3872 22.3624 12.2153 20.9735 11.2952C19.5846 10.375 18.0742 9.91496 16.4422 9.91496C14.3589 9.91496 12.6228 10.6094 11.2339 11.9983C9.845 13.3872 9.15055 15.1233 9.15055 17.2066C9.15055 18.4219 9.39361 19.6459 9.87972 20.8785C10.3658 22.1111 11.2339 23.5174 12.4839 25.0972C13.7339 26.6771 15.4353 28.5347 17.5881 30.6702C19.7408 32.8056 22.4839 35.3663 25.8172 38.3525Z" fill="#1C1B1F"/>
                            </g>
                        </svg>
                        `;


const smallBlackHeart = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 51 51" fill="none">
                            <mask id="mask0_702_19" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
                                <rect x="0.817383" y="0.227783" width="50" height="50" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_702_19)">
                                <path d="M25.8172 43.9777L22.7964 41.2694C19.2894 38.1096 16.3901 35.384 14.0985 33.0923C11.8068 30.8006 9.98389 28.7433 8.62972 26.9204C7.27555 25.0975 6.32937 23.4221 5.79118 21.8944C5.25298 20.3666 4.98389 18.8041 4.98389 17.2069C4.98389 13.943 6.07764 11.2173 8.26514 9.02979C10.4526 6.84229 13.1783 5.74854 16.4422 5.74854C18.2478 5.74854 19.9665 6.13048 21.5985 6.89437C23.2304 7.65826 24.6367 8.73465 25.8172 10.1235C26.9978 8.73465 28.404 7.65826 30.036 6.89437C31.6679 6.13048 33.3867 5.74854 35.1922 5.74854C38.4561 5.74854 41.1818 6.84229 43.3693 9.02979C45.5568 11.2173 46.6506 13.943 46.6506 17.2069C46.6506 18.8041 46.3815 20.3666 45.8433 21.8944C45.3051 23.4221 44.3589 25.0975 43.0047 26.9204C41.6506 28.7433 39.8276 30.8006 37.536 33.0923C35.2443 35.384 32.345 38.1096 28.8381 41.2694L25.8172 43.9777Z" fill="#1C1B1F"/>
                            </g>
                        </svg>
                        `;

const bigBlackHeart = `<svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                            <mask id="mask0_702_19" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
                                <rect x="0.817383" y="0.227783" width="50" height="50" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_702_19)">
                                <path d="M25.8172 43.9777L22.7964 41.2694C19.2894 38.1096 16.3901 35.384 14.0985 33.0923C11.8068 30.8006 9.98389 28.7433 8.62972 26.9204C7.27555 25.0975 6.32937 23.4221 5.79118 21.8944C5.25298 20.3666 4.98389 18.8041 4.98389 17.2069C4.98389 13.943 6.07764 11.2173 8.26514 9.02979C10.4526 6.84229 13.1783 5.74854 16.4422 5.74854C18.2478 5.74854 19.9665 6.13048 21.5985 6.89437C23.2304 7.65826 24.6367 8.73465 25.8172 10.1235C26.9978 8.73465 28.404 7.65826 30.036 6.89437C31.6679 6.13048 33.3867 5.74854 35.1922 5.74854C38.4561 5.74854 41.1818 6.84229 43.3693 9.02979C45.5568 11.2173 46.6506 13.943 46.6506 17.2069C46.6506 18.8041 46.3815 20.3666 45.8433 21.8944C45.3051 23.4221 44.3589 25.0975 43.0047 26.9204C41.6506 28.7433 39.8276 30.8006 37.536 33.0923C35.2443 35.384 32.345 38.1096 28.8381 41.2694L25.8172 43.9777Z" fill="#1C1B1F"/>
                            </g>
                        </svg>
                        `;