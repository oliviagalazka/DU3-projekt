function renderDailyRecipes(parentId) {
    const parent = document.getElementById(parentId);

    const dailyRecipesContainer = document.createElement('div');
    dailyRecipesContainer.id = 'daily-recipes-section';
    dailyRecipesContainer.innerHTML = `
        <h2>DAGENS UTVALDA RECEPT</h2>
        <div id='daily-recipes-container'></div>`;

    parent.append(dailyRecipesContainer);

    getRandomRecipe('daily-recipes-container', 8);
}