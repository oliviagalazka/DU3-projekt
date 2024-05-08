function renderDailyRecipes(parentId) {
    const parent = document.getElementById(parentId);
    const dailyRecipesSection = document.createElement('div');
    dailyRecipesSection.id = 'daily-recipes-section';
    dailyRecipesSection.innerHTML = `<h2>DAGENS UTVALDA RECEPT</h2>
                                    <div id='daily-recipes-container'></div>`;

    parent.append(dailyRecipesSection);

    renderRandomRecipe('daily-recipes-container', 8);
}