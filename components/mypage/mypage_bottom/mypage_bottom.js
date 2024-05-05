function renderMyPageBottom(parentId) {
  const parent = document.getElementById(parentId);
  const myPageBottomContainer = document.createElement('div');
  myPageBottomContainer.id = 'mypage-bottom-container';
  myPageBottomContainer.innerHTML = `
                                        <h1>MINA SPARADE RECEPT</h1>
                                        <div id="saved-recipes-container"></div>
                                      `;

  // Detta ska vi ha när vi har löst med State.GetEntity('user');
  /*
  const recipes = State.GetEntity('recipes');
  const user = State.GetEntity('user');
  const savedRecipes = user.savedRecipes;

  for (let savedRecipe of savedRecipes) {
    let foundRecipe = recipes.find(recipe => recipe.id === savedRecipe)
    renderRecipesCard("recipe-container", foundRecipe)
  }
  */
  parent.append(myPageBottomContainer);
}