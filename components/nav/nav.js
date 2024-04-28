function renderNavContainer(parentId) {
    const parent = document.getElementById(parentId);
    const navContainer = document.createElement('nav');
    navContainer.innerHTML = `
            <a href='./../../index.html'>HEM</a>
            <a href='./components/recipes/recipes.html'>RECEPT</a>
            <a href='./components/mypage/mypage.html'>MIN SIDA</a>
            <a href='./../../index.html'>OM OSS</a>
            <a href='./components/login/login.html'>LOGGA IN</a>
            `;

    parent.append(navContainer);
}