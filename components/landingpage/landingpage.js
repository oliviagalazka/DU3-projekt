async function renderLandingpage() {
    await State.Get({
        entity: 'recipes', request: './../../api/recipes.php'
    });

    await State.Get({
        entity: 'reviews', request: './../../api/reviews.php'
    });
    await State.Get({
        entity: 'user', request: './../../api/users.php?user=' + localStorage.getItem('login')
    });
    
    renderNavContainer('wrapper');
    renderHeroSection('wrapper');
    renderDailyRecipes('wrapper');
    renderExploreCategories('wrapper');
    renderAboutUs('wrapper');
    renderFooterContainer('wrapper');
}


