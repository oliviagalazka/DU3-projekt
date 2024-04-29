async function renderRecipes() {
    await State.Get({
        entity: 'recipes', request: './../../api/recipes.php'
    });
    await State.Get({
        entity: 'reviews', request: './../../api/reviews.php'
    });

    const wrapper = document.getElementById('wrapper-recipes');
    renderNavContainer('wrapper-recipes');
    renderRecipesTop(wrapper);
    renderRecipesBottom(wrapper);
    renderFooterContainer('wrapper-recipes');
}

renderRecipes();