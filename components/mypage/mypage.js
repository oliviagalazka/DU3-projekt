async function renderMyPage() {
    /*await State.Get({
        entity: 'users', request: '../../api/users.php'
    });
    */

    renderNavContainer('wrapper-recipes');
    renderMyPageTop('wrapper-recipes');
    renderMyPageBottom('wrapper-recipes');
    renderFooterContainer('wrapper-recipes');
}
renderMyPage();