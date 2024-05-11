function renderFooter(parentId) {
    const parent = document.getElementById(parentId);
    const footer = document.createElement('footer');

    footer.innerHTML = `<div>
                            <div>
                                <p id='to-top'>V</p>
                                <p>Ta mig till toppen</p>
                            </div>
                            <div id='logo-container'>
                                <div id='logo-img'></div>
                                <h2>NAMNAM</h2>
                            </div>
                            <p>Copyright 2024</p>
                        </div>`;

    parent.append(footer);

    document.getElementById('to-top').addEventListener('click', scrollToTop);
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}