function renderRecipesRight(parentId) {
    const parent = parentId;
    const recipesRight = document.createElement('div');
    recipesRight.id = 'recipes-right';

    parent.append(recipesRight);
}