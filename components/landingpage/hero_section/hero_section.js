function renderHeroSection(parentId) {
    const parent = document.getElementById(parentId);
    const heroSection = document.createElement('div');
    heroSection.id = 'hero-section';

    heroSection.innerHTML = `<div>
                                <h1>NAMNAM</h1>
                            </div>`;

    parent.append(heroSection);
}