function renderMyPageBottom(parentId) {
  const parent = document.getElementById(parentId);
  const myPageBottomContainer = document.createElement('div');
  myPageBottomContainer.id = 'mypage-bottom-container';
  myPageBottomContainer.innerHTML = `
                                        <h1>MINA SPARADE RECEPT</h1>
                                        <div id="saved-recipes-container"></div>
                                      `;

  // Detta ska vi ha när vi har löst med State.GetEntity('user');

  parent.append(myPageBottomContainer);

  let user = State.GetEntity('user');
  let recipes = State.GetEntity('recipes');
  for (let recipe of recipes) {
    for (let savedRecipe of user.savedRecipes) {
      if (recipe.id === savedRecipe) {
        console.log(recipe);
        renderRecipeCard('saved-recipes-container', recipe);
      }
    }
  }


}