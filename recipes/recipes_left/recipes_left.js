function renderRecipesLeft(parentId) {
    const parent = parentId;
    const recipesLeft = document.createElement('div');
    recipesLeft.id = 'recipes-left';
    recipesLeft.innerHTML = `
    <input type="text">
    <div id="categories-container">
        <h1>KATEGORIER</h1>
        <div id="categories"></div>
    </div>`
    renderCategories(parent);
    parent.append(recipesLeft);
}

