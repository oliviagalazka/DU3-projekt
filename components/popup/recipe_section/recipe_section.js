function renderRecipeSection(parentID, recipe){
    const parent = document.getElementById(parentID);
    const recipeSection = document.createElement('div');
    recipeSection.id = 'recipe-section';
    recipeSection.innerHTML = ` 
        <div id='recipe-info-container'></div>
        <div id='recipe-todo-container'</div>
    `;

    parent.append(recipeSection);
    renderRecipeInfoContainer('recipe-info-container', recipe);
    renderRecipeImageContainer('recipe-info-container', recipe);
    renderRecipeToDoContainer('recipe-todo-container', recipe);
}

function renderRecipeInfoContainer (parentID, recipe) {
    const parent = document.getElementById(parentID);
    const infoText = document.createElement('div');
    infoText.id = "info-text";

    infoText.innerHTML = `
                        <div id='title-heart-container'>
                            <div>${recipe.name}</div>
                            <div>&#x2661</div>
                        </div>
                        <h3>Omdömme</h3>
                        <h4>${recipe.shortIntro}</h4>
                        <h4>${recipe.cookingTime}</h4>
                        `;

    parent.append(infoText);
}

function renderRecipeImageContainer (parentID, recipe) {
    const parent = document.getElementById(parentID);
    const image = document.createElement('div');
    image.id = "image";

    parent.append(image);
}


function renderRecipeToDoContainer(parentID, recipe) {
    const parent = document.getElementById(parentID);
    const ingredients = document.createElement('div');
    const instructions = document.createElement('div');
    const instructionsOlDom = document.createElement('ol');
    instructions.append(instructionsOlDom);

    const ingredientList = recipe.ingredients;
    for (ingredient of ingredientList) {
        ingredients.innerHTML +=`<p>${ingredient}</p>`;
    }

    const instructionsList = recipe.instructions;
    for (instruction of instructionsList) {
        instructionsOlDom.innerHTML +=`<li>${instruction}</li>`;
    }

    parent.append(ingredients);
    parent.append(instructions);
}