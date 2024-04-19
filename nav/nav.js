function renderNavContainer(parentId) {
    const parent = parentId;
    const navContainer = document.createElement('nav');
    navContainer.innerHTML = `
            <a href='./../DU3-projekt/index.html'>HEM</a>
            <a href='./../DU3-projekt/recept/recept.html'>RECEPT</a>
            <a href='./../DU3-projekt/minsida/minsida.html'>MIN SIDA</a>
            <a href='./../DU3-projekt/index.html'>OM OSS</a>
            <a href='./../DU3-projekt/login/login.html'>LOGGA IN</a>
            `;

    parent.append(navContainer);
}


