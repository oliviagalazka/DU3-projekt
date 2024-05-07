async function renderMyPage() {
    await State.Get({
        entity: 'user', request: './../../api/users.php'
    });
    await State.Get({
        entity: 'recipes', request: './../../api/recipes.php'
    });

    renderNavContainer('wrapper-recipes');
    renderMyPageTop('wrapper-recipes');
    renderMyPageBottom('wrapper-recipes');
    renderFooterContainer('wrapper-recipes');
}
renderMyPage();