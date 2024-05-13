async function renderRecipePageRightContainer(parentId, category) {
  const recipes = State.GetEntity('recipes');

  const parent = document.getElementById(parentId);
  const recipePageRightContainer = document.createElement('div');
  recipePageRightContainer.id = 'recipe-page-right-container';

  parent.append(recipePageRightContainer);

  for (let recipe of recipes) {
    renderRecipeCard('recipe-page-right-container', recipe);
  }
}
