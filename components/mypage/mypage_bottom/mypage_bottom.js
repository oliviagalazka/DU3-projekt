function renderMyPageBottom(parentId) {
  const parent = document.getElementById(parentId);
  const myPageBottomContainer = document.createElement('div');
  myPageBottomContainer.id = 'mypage-bottom-container';
  myPageBottomContainer.innerHTML = `
                                    <h1>MINA SPARADE RECEPT</h1>
                                    <div id='saved-recipes-container'></div>
                                    `;

  parent.append(myPageBottomContainer);

  let user = State.GetEntity('user');
  let recipes = State.GetEntity('recipes');
  for (let savedRecipe of user.savedRecipes.reverse()) {
    for (let recipe of recipes) {
      if (savedRecipe === recipe.id) {
        renderRecipeCard('saved-recipes-container', recipe);
      }
    }
  }
  /*for (let recipe of recipes) {
    for (let savedRecipe of user.savedRecipes) {
      if (recipe.id === savedRecipe) {
        renderRecipeCard('saved-recipes-container', recipe);
      }
    }
  }*/
}



