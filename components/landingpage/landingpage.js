async function renderLandingpage() {
    await State.Get({
        entity: 'recipes', request: './../../api/recipes.php'
    });

    await State.Get({
        entity: 'reviews', request: './../../api/reviews.php'
    });

    //varför ska vi ha detta???
    // await State.Get({
    //     entity: 'user', request: './../../api/users.php?user=' + localStorage.getItem('login')
    // });

    renderNavContainer('wrapper');
    renderHeroSection('wrapper');
    renderRecipeInspiration('wrapper');
    renderExploreCategories('wrapper');
    renderAboutUs('wrapper');
    renderFooter('wrapper');
}