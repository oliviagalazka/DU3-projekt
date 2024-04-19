function renderMyPage() {
    const wrapper = document.getElementById('wrapper');

    renderNavContainer(wrapper);
    renderMyPageTop(wrapper);
    renderMyPageBottom(wrapper);
    renderFooterContainer(wrapper);
}
renderMyPage();