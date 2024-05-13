function renderRecipePageBottomSection(parentId, category) {
    const parent = document.getElementById(parentId);
    const recipePageBottomSection = document.createElement('div');
    recipePageBottomSection.id = 'recipe-page-bottom-section';

    parent.append(recipePageBottomSection);

    renderRecipePageLeftContainer('recipe-page-bottom-section', category);
    renderRecipePageRightContainer('recipe-page-bottom-section', category);
}