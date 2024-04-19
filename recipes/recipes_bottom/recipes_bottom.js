function renderRecipesBottom(parentId) {
    const parent = parentId;
    const recipesBottom = document.createElement('div');
    recipesBottom.id = 'recipes-bottom';

    parent.append(recipesBottom);

    renderRecipesLeft(recipesBottom);
    renderRecipesRight(recipesBottom);
}