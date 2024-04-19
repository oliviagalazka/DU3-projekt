function renderRecipesTop(parentId) {
    const parent = parentId;
    const recipesTop = document.createElement('div');
    recipesTop.id = 'recipes-top';
    recipesTop.innerHTML = `
        <h1>RECIPES</h1>
    `;

    parent.append(recipesTop);
}