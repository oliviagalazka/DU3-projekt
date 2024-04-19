function renderDaysRecipes (parentId) {
    const parent = parentId;
    const heroSectionContainer = document.createElement('div');
    heroSectionContainer.innerHTML = `
        <h2>Dagens Recept</h2>
        <div id='dagens-recept-container'></div>
    `;

    parent.append(heroSectionContainer);
}