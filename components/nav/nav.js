function renderNavContainer(parentId) {
    const parent = document.getElementById(parentId);
    const navContainer = document.createElement('nav');


    if (window.localStorage.length !== 0) {
        navContainer.innerHTML = `
        <a href='./../../index.html'>HEM</a>
        <a href='./components/recipes/recipes.html'>RECEPT</a>
        <a href='./components/mypage/mypage.html'>MIN SIDA</a>
        <a href='./../../index.html' id='about-us'>OM OSS</a>
        <a href='./../../index.html' id="logout-button">LOGGA UT</a>
         `;

        parent.append(navContainer);

        const logoutButton = document.getElementById('logout-button');
        logoutButton.addEventListener('click', async () => {
            window.localStorage.removeItem('login');
        })


    } else {
        navContainer.innerHTML = `
        <a href='./../../index.html'>HEM</a>
        <a href='./components/recipes/recipes.html'>RECEPT</a>
        <a href='#'>MIN SIDA</a>
        <a href='./../../index.html' id='about-us'>OM OSS</a>
        <a href='./components/login/login.html'>LOGGA IN</a>
        `;
        parent.append(navContainer);
    }

    document.getElementById('about-us').addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.getElementById('AboutUsContainer');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
}