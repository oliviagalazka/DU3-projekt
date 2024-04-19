function renderExploreCategories (parentId) {
    const parent = parentId;
    const ExploreCategoriesContainer = document.createElement('div');
    ExploreCategoriesContainer.id = 'ExploreCategoriesContainer'
    ExploreCategoriesContainer.innerHTML = `
        <h2>UTFORSKA KATEGORIER</h2>
        <div id='utforska-kategorier-section'></div>
    `;

    parent.append(ExploreCategoriesContainer);
}