async function renderRecipeSection(parentId, recipe) {
    const parent = document.getElementById(parentId);
    const recipeSection = document.createElement('div');
    recipeSection.id = 'recipe-section';
    recipeSection.innerHTML = ` 
        <div id='recipe-info-container'></div>
        <div id='recipe-todo-container'</div>
    `;

    parent.append(recipeSection);

    await renderRecipeInfo('recipe-info-container', recipe);
    renderRecipeImage('recipe-info-container', recipe);
    renderRecipeTodo('recipe-todo-container', recipe);
}

// Recipe Info
async function renderRecipeInfo(parentId, recipe) {
    const parent = document.getElementById(parentId);
    const recipeInfo = document.createElement('div');
    recipeInfo.id = 'recipe-info';

    // const review = await recipeAverageReview(recipe);

    // let formattedRank = review.averageRank.toFixed(0);
    const review = await recipeAverageReview(recipe);
    let formattedRank = 0;
    if (review != null & review.averageRank != '-') {
        formattedRank = review.averageRank.toFixed(0);
    }

    recipeInfo.innerHTML = `
                            <div id='title-heart-container'>
                                <h1>${recipe.name}</h1>
                                <h2 id="popupheart-${recipe.id}">&#x2661</h2>
                            </div>
                            <h3 id="popup-omdome">${formattedRank}/10 (av ${review.totalReviews} omdömen)</h3>
                            <h4>${recipe.shortIntro}</h4>
                            <div id='portions'>
                                <img src='./img_for_design/portions.svg'>
                                <p>${recipe.portions}</p>
                            </div>
                            <div id='cooking-time'>
                            <img src='./img_for_design/clock.svg'>
                                <p>${recipe.cookingTime}</p>
                            </div>
                        `;


    parent.append(recipeInfo);

    const popupHeart = document.getElementById('popupheart-' + `${recipe.id}`);

    const user = State.GetEntity('user');

    popupHeart.innerText = "♡";
    if (localStorage.getItem('login')) {
        for (let favoriteRecipe of user.savedRecipes) {
            if (recipe.id === favoriteRecipe) {
                popupHeart.innerText = "♥";
                break;
            }
        }
    }


    popupHeart.addEventListener('click', saveRecipe);

    // popupHeart.addEventListener('click', function () {
    //     if (popupHeart.style.backgroundColor === 'black') {
    //         popupHeart.style.backgroundColor = null;
    //     } else {
    //         popupHeart.style.backgroundColor = 'black';
    //     }
    // })
}

// Recipe Image
function renderRecipeImage(parentId, recipe) {
    const parent = document.getElementById(parentId);
    const recipeImage = document.createElement('div');
    recipeImage.id = 'recipe-image';

    recipeImage.style.backgroundImage = 'url(./images_recipes/' + recipe.image + ')';

    parent.append(recipeImage);
}

// Recipe Todo
function renderRecipeTodo(parentId, recipe) {
    const parent = document.getElementById(parentId);
    const ingredientsContainer = document.createElement('div');
    const instructionsContainer = document.createElement('div');

    ingredientsContainer.innerHTML = `<h2>Ingredienser</h2>`;
    instructionsContainer.innerHTML = `
                                      <h2>Instruktioner</h2>
                                      <ol></ol>
                                      `;

    parent.append(ingredientsContainer);
    parent.append(instructionsContainer);

    const ingredientsList = recipe.ingredients;
    for (let ingredient of ingredientsList) {
        ingredientsContainer.innerHTML += `<p>${ingredient}</p>`;
    }

    const instructionsList = recipe.instructions;
    for (let instruction of instructionsList) {
        instructionsContainer.querySelector('ol').innerHTML += `<li>${instruction}</li>`;
    }
}