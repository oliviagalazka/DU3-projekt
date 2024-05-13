async function renderRecipePageRightContainer(parentId, urlCategory) {
  const recipes = State.GetEntity('recipes');

  const parent = document.getElementById(parentId);
  const recipePageRightContainer = document.createElement('div');
  recipePageRightContainer.id = 'recipe-page-right-container';

  parent.append(recipePageRightContainer);

  for (let recipe of recipes) {
    if (urlCategory === null) {
      renderRecipeCard('recipe-page-right-container', recipe);
    } else {
      for (let category of recipe.categories) {
        if (urlCategory === category) {
          renderRecipeCard('recipe-page-right-container', recipe);
          break;
        }
      }
    }
  }
}
