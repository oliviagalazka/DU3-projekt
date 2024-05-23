function renderNavContainer(parentId) {
    const parent = document.getElementById(parentId);
    const navContainer = document.createElement('nav');
    navContainer.id = 'nav-container';

    if (window.localStorage.getItem('login')) {
        navContainer.innerHTML = `
            <div>
                <div id='logo-nav'>
                    <img src='./img_for_design/small-logo-white.png'>
                    <div class='navLogoNamnamTitle'>NAMNAM</div>
                </div>
                <a href='./index.html'>HEM</a>
                <a href='./recipes.html'>RECEPT</a>
                <a href="#" id='about-us'>OM OSS</a>
                <a href='./mypage.html'>MIN SIDA</a>
            </div>
            <div>
                <a href='./index.html' id="logout-button">LOGGA UT</a>
            </div>
        `;

        parent.append(navContainer);

        const logoutButton = document.getElementById('logout-button');
        logoutButton.addEventListener('click', async () => {
            window.localStorage.removeItem('login');
        });

    } else {
        navContainer.innerHTML = `
            <div>
                <div id='logo-nav'>
                    <img src='./img_for_design/small-logo-white.png'>
                    <div class='navLogoNamnamTitle'>NAMNAM</div>
                </div>
                <a href='./index.html'>HEM</a>
                <a href='./recipes.html'>RECEPT</a>
                <a href="#" id='about-us'>OM OSS</a>
            </div>
            <div>
                <a href='./login.html'>LOGGA IN</a>
            </div>
        `;
        parent.append(navContainer);
    }

    let aboutUsLink = document.getElementById('about-us');
    aboutUsLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (window.location.pathname.endsWith('index.html')) {
            // Om vi är på index.html, scrolla till sektionen direkt
            let aboutUsSection = document.getElementById('au-section');
            if (aboutUsSection) {
                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Om vi är på en annan sida, navigera till index.html med en speciell hash
            window.location.href = './index.html#pending-about-scroll';
        }
    });

    // Kontrollera om sidan laddades med en speciell hash och scrolla till sektionen med fördröjning
    if (window.location.hash === '#pending-about-scroll') {
        window.history.replaceState(null, null, 'index.html'); // Ta bort hash från URL:en
        setTimeout(function () {
            let aboutUsSection = document.getElementById('au-section');
            if (aboutUsSection) {
                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 250); // Fördröjning
    }

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
}