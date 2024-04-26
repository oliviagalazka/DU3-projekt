function renderRecipeSection(parentID, recipe){
    const parent = document.getElementById(parentID);
    const recipeSection = document.createElement('div');
    recipeSection.id = 'recipe-section';
    recipeSection.innerHTML = `
        <div id='recipe-info-container'></div>
        <div id='recipe-todo-container'</div>
    `;

    parent.append(recipeSection);
    
}