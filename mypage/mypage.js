async function renderMyPage() {
    await State.Get({
        entity: 'users', request: '../api/users.php'
    });

    const wrapper = document.getElementById('wrapper');

    renderNavContainer(wrapper);
    renderMyPageTop(wrapper);
    renderMyPageBottom(wrapper);
    renderFooterContainer(wrapper);
}
renderMyPage();