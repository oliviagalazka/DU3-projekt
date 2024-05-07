function renderFooterContainer(parentId) {
    const parent = document.getElementById(parentId);
    const footerContainer = document.createElement("footer");

    footerContainer.innerHTML = `
        <div>
            <div id='img-footer-text-logo'>
                <div id='img-footer-logo'></div>
                <h2>NAMNAM</h2>
            </div>
        
            <p>copyright text</p>
        </div>
    `
    parent.append(footerContainer);
}

