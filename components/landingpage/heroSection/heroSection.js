function renderHeroSection(parentId) {
    const parent = document.getElementById(parentId);
    const heroSectionContainer = document.createElement('div');
    heroSectionContainer.id = 'heroSectionContainer';
    heroSectionContainer.innerHTML = `
        <h1>NAMNAM</h1>
    `;

    parent.append(heroSectionContainer);
}
