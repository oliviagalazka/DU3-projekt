function renderNavContainer(parentId) {
    const parent = document.getElementById(parentId);
    const navContainer = document.createElement('nav');
    navContainer.id = 'nav-container';

    if (window.localStorage.getItem('login')) {
        navContainer.innerHTML = `
            <div>
                <div id='logo-nav'>
                    <img src='./img_for_design/Untitled_Artwork 3.png'>
                    <div>NAMNAM</div>
                </div>
                <a href='./index.html'>HEM</a>
                <a href='./recipes.html'>RECEPT</a>
                <a href='./mypage.html'>MIN SIDA</a>
                <a href='./index.html' id='about-us'>OM OSS</a>
            </div>
            <div>
                <a href='./index.html' id="logout-button">LOGGA UT</a>
            </div>
        `;

        parent.append(navContainer);

        const logoutButton = document.getElementById('logout-button');
        logoutButton.addEventListener('click', async () => {
            window.localStorage.removeItem('login');
            window.localStorage.removeItem('userdata');
        });
    } else {
        navContainer.innerHTML = `
            <div>
                <div id='logo-nav'>
                    <img src='./img_for_design/Untitled_Artwork 3.png'>
                    <div>NAMNAM</div>
                </div>
                <a href='./index.html'>HEM</a>
                <a href='./recipes.html'>RECEPT</a>
                <a href='./index.html' id='about-us'>OM OSS</a>
            </div>
            <div>
                <a href='./login.html'>LOGGA IN</a>
            </div>
        `;
        parent.append(navContainer);
    }

    document.getElementById('about-us').addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.getElementById('au-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            //window.location.hash = 'index.html#aboutus';
        }
    });

    let prevScroll = window.pageYOffset;
    let isScrollingDown = false;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScroll > currentScrollPos) {
            isScrollingDown = false;
        } else {
            isScrollingDown = true;
        }
        prevScroll = currentScrollPos;

        if (isScrollingDown) {
            {
                document.getElementById('nav-container').style.top = '-100px';
                //istället för interval lägg till class. Kolla om man är npgonstans över herosection. då sk ainget hända på scroll. men om man är någon annan stans ska saker hända på scroll
            }
        } else {
            document.getElementById('nav-container').style.top = '0';
        }
    }


    // Funktion för att markera den aktiva länken
    function markActiveLink() {
        const navLinks = navContainer.querySelectorAll('a');
        const currentPageURL = window.location.href;

        navLinks.forEach(link => {
            // Kontrollera om länken är för om oss, login eller logout
            if (link.id === 'about-us' || link.id === 'logout-button' || link.getAttribute('href') === './login.html') {
                return;
            }

            if (link.href === currentPageURL) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    }

    markActiveLink();
    navContainer.addEventListener('click', markActiveLink);

}
