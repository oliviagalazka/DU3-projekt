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

    renderNavContainer('wrapper-mypage');
    renderMyPageTop('wrapper-mypage');
    renderMyPageBottom('wrapper-mypage');
    renderFooter('wrapper-mypage');
}
renderMyPage();
