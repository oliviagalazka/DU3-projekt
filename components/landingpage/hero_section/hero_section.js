function renderHeroSection(parentId) {
    const parent = document.getElementById(parentId);
    const heroSection = document.createElement('div');
    heroSection.id = 'hero-section';

    heroSection.innerHTML = `
        <div>
            <div id='stor-gaffel-img'>
                <h1>NAMNAM</h1>
            </div>
        </div>`;

    parent.append(heroSection);
}