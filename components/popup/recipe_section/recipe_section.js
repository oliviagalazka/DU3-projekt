function renderRecipeSection(parentID, recipe){
    const parent = document.getElementById(parentID);
    const recipeSection = document.createElement('div');
    recipeSection.id = 'recipe-section';

    parent.append(recipeSection);
    renderRecipeInfoContainer('recipe-section', recipe);
    renderRecipeImageContainer('recipe-section', recipe);
}

function renderRecipeInfoContainer (parentID, recipe) {
    const parent = document.getElementById(parentID);
    const infoText = document.createElement('div');
    infoText.id = "info-text";

    infoText.innerHTML = `
                        <div>
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