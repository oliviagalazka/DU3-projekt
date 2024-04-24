async function renderRecipes() {
    await State.Get({
        entity: 'recipes', request: './../api/recipes.php'
    });

    const wrapper = document.getElementById('wrapper-recipes');
    renderNavContainer(wrapper);
    renderRecipesTop(wrapper);
    renderRecipesBottom(wrapper);
    renderFooterContainer(wrapper);
}


renderRecipes();