function renderFooter(parentId) {
    const parent = document.getElementById(parentId);
    const footer = document.createElement('footer');

    footer.innerHTML = `<div>
                            <div id='logo-container'>
                                <div id='logo-img'></div>
                                <h2>NAMNAM</h2>
                            </div>
                            <p>Copyright 2024</p>
                        </div>`;

    parent.append(footer);
}