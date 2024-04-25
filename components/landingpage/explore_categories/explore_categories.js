function renderExploreCategories(parentId) {
    const parent = document.getElementById(parentId);
    const ExploreCategoriesContainer = document.createElement('div');
    ExploreCategoriesContainer.id = 'ExploreCategoriesContainer'
    ExploreCategoriesContainer.innerHTML = `
        <h2>UTFORSKA KATEGORIER</h2>
        <div id='utforska-kategorier-section'></div>
    `;

    parent.append(ExploreCategoriesContainer);
    renderExploreCategoriesBoxes('utforska-kategorier-section');
}

const categories = [
    "Soppa",
    "Sallad",
    "Pasta",
    "Nudlar",
    "Paj",
    "Pizza",
    "Mackor",
    "Mellanmål",
    "Vegetariskt",
    "Kött",
    "Kyckling",
    "Fisk och Skaldjur",
    "Grillat",
    "Grytor",
    "Gratänger"
]

function renderExploreCategoriesBoxes(parentId) {
    const parent = document.getElementById(parentId);

    for (let category of categories) {
        const categoryDom = document.createElement('div');
        categoryDom.classList.add('category')
        categoryDom.innerHTML = `<div>${category}</div>`;
        parent.append(categoryDom);
    }
}