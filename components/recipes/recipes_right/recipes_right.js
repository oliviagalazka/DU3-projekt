async function renderRecipesRight(parent) {
    const recipes = State.GetEntity('recipes')

    const recipesRight = document.createElement('div');
    recipesRight.id = 'recipes-right';

    parent.append(recipesRight);

    for (let recipe of recipes) {
        renderRecipeCard('recipes-right', recipe);
    }

    // Hämta alla receptkort
    const recipeCards = document.querySelectorAll('.recipe-card');

    // Lägg till händelselyssnare på varje receptkort
    recipeCards.forEach(recipeCard => {
        recipeCard.addEventListener('click', (event) => {
            // Hämta receptets id från dataset
            const recipeId = recipeCard.dataset.recipeId;

            // Hämta det motsvarande Recipe-objektet från receptets id
            const recipe = recipes.find(recipe => recipe.id === parseInt(recipeCard.id.split('-')[1]));
            console.log(recipe);
            // Visa popupen med det specifika receptet
            showPopup(recipe);
        });
    });
}



/*
shoeElements.forEach(function(shoeElement) {
  shoeElement.addEventListener('click', function() {
    const shoeId = shoeElement.id;
    const selectedShoe = SHOES.find(shoe => shoe.id === parseInt(shoeId, 10));

    if (selectedShoe) {
      renderPopup(selectedShoe);
    }
  });
});
*/
