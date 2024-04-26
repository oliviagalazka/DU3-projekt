function renderRecipeSection(parentId, recipe) {
    const parent = document.getElementById(parentId);
    const recipeSection = document.createElement('div');
    recipeSection.id = 'recipe-section';
    recipeSection.innerHTML = ` 
        <div id='recipe-info-container'></div>
        <div id='recipe-todo-container'</div>
    `;

    parent.append(recipeSection);

    renderRecipeInfo('recipe-info-container', recipe);
    renderRecipeImage('recipe-info-container', recipe);
    renderRecipeTodo('recipe-todo-container', recipe);
}

// Recipe Info
function renderRecipeInfo(parentId, recipe) {
    const parent = document.getElementById(parentId);
    const recipeInfo = document.createElement('div');
    recipeInfo.id = 'recipe-info';

    recipeInfo.innerHTML = `
                            <div id='title-heart-container'>
                                <h1>${recipe.name}</h1>
                                <h2>&#x2661</h2>
                            </div>
                            <h3>Genomsnittligt Omdömme/10</h3>
                            <h4>${recipe.shortIntro}</h4>
                            <h4>Matlagningstid: ${recipe.cookingTime}</h4>
                        `;

    parent.append(recipeInfo);
}

// Recipe Image
function renderRecipeImage(parentId, recipe) {
    const parent = document.getElementById(parentId);
    const recipeImage = document.createElement('div');
    recipeImage.id = "recipe-image";

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