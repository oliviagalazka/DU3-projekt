function renderRecipesTop(parentId) {
    const parent = parentId;
    const recipesTop = document.createElement('div');
    recipesTop.id = 'recipes-top';
    recipesTop.innerHTML = `
        <h1>RECEPT</h1>
    `;

    parent.append(recipesTop);
}