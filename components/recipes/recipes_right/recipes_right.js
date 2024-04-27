async function renderRecipesRight(parentId) {
  const recipes = State.GetEntity('recipes');
  const reviews = State.GetEntity('reviews');

  const parent = document.getElementById(parentId);
  const recipesRight = document.createElement('div');
  recipesRight.id = 'recipes-right';

  parent.append(recipesRight);

  for (let recipe of recipes) {
    renderRecipeCard('recipes-right', recipe);
  }
}
