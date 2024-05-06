async function renderRecipePage() {
    await State.Get({
        entity: 'recipes', request: './../../api/recipes.php'
    });

    await State.Get({
        entity: 'reviews', request: './../../api/reviews.php'
    });

    renderNavContainer('wrapper-recipes');
    renderRecipePageTopSection('wrapper-recipes');
    renderRecipePageBottomSection('wrapper-recipes');
    renderFooterContainer('wrapper-recipes');
}

renderRecipePage();