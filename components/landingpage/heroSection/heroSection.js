function renderHeroSection(parentId) {
    const parent = document.getElementById(parentId);
    const heroSectionContainer = document.createElement('div');
    heroSectionContainer.id = 'heroSectionContainer';
    heroSectionContainer.innerHTML = `
        <div>
            <h1>NAMNAM</h1>
        </div>
    `;

    parent.append(heroSectionContainer);
}
