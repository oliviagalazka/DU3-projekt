async function renderRecipePageRightContainer(parentId) {
  const recipes = State.GetEntity('recipes');
  //const reviews = State.GetEntity('reviews');

  const parent = document.getElementById(parentId);
  const recipePageRightContainer = document.createElement('div');
  recipePageRightContainer.id = 'recipe-page-right-container';

  parent.append(recipePageRightContainer);

  for (let recipe of recipes) {
    renderRecipeCard('recipe-page-right-container', recipe);
  }
}
