function renderFooterContainer(parentId) {
    const parent = document.getElementById(parentId);
    const footerContainer = document.createElement("footer");

    footerContainer.innerHTML = `
        <div>LOGGA</div>
        <div>copyright text</div>
    `
    parent.append(footerContainer);
}

