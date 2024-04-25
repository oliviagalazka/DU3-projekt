function renderDaysRecipes(parentId) {
    const parent = parentId;
    const weeksRecipesContainer = document.createElement('div');
    weeksRecipesContainer.id = 'weeksRecipesContainer'
    weeksRecipesContainer.innerHTML = `
        <h2>Dagens Recept</h2>
        <div id='dagens-recept-container'>
        ${getRandomRecipes(4)}
        </div>
    `;

    parent.append(weeksRecipesContainer);
}