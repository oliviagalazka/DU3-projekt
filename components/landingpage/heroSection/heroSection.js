function renderHeroSection(parentId) {
    const parent = document.getElementById(parentId);
    const heroSectionContainer = document.createElement('div');
    heroSectionContainer.id = 'heroSectionContainer';
    heroSectionContainer.innerHTML = `
        <h1>NamNam</h1>
    `;

    parent.append(heroSectionContainer);
}
