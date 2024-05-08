function renderRecipeInspiration(parentId) {
    const parent = document.getElementById(parentId);
    const recipeInspirationSection = document.createElement('div');
    recipeInspirationSection.id = 'recipe-inspiration-section';
    recipeInspirationSection.innerHTML = `<h2>IDÉTORKA? - HITTA INSPIRATION</h2>
                                          <div id='recipe-inspiration-container'></div>`;

    parent.append(recipeInspirationSection);

    renderRandomRecipe('recipe-inspiration-container', 8);
}