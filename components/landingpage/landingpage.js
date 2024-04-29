async function renderLandingpage() {

    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user === null) {
        console.log('inte inloggad');
    } else {
        const userId = user.userId;

        await State.Get({
            entity: 'user', request: `./../../api.users.php?userId=${userId}`
        });
    }


    renderNavContainer('wrapper');
    renderHeroSection('wrapper');
    renderDailyRecipes('wrapper');
    renderExploreCategories('wrapper');
    renderAboutUs('wrapper');
    renderFooterContainer('wrapper');
}