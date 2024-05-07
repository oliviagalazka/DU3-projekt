async function renderMyPage() {
    currentLocation = "mypage";
    await State.Get({
        entity: 'user', request: './../../api/users.php?user=' + localStorage.getItem('login')
    });
    await State.Get({
        entity: 'recipes', request: './../../api/recipes.php'
    });
    await State.Get({
        entity: 'reviews', request: './../../api/reviews.php'
    });

    console.log(State.GetEntity('user'));
    renderNavContainer('wrapper-recipes');
    renderMyPageTop('wrapper-recipes');
    renderMyPageBottom('wrapper-recipes');
    renderFooterContainer('wrapper-recipes');
}
renderMyPage();
