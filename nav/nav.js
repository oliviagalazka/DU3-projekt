function renderNavContainer(parentId) {
    const parent = parentId;
    const navContainer = document.createElement('nav');
    navContainer.innerHTML = `
            <a href='./../index.html'>HEM</a>
            <a href='./../recipes/recipes.html'>RECEPT</a>
            <a href='./../my_page/my_page.html'>MIN SIDA</a>
            <a href='./../index.html'>OM OSS</a>
            <a href='./../login_register/login.html'>LOGGA IN</a>
            `;

    parent.append(navContainer);
}


