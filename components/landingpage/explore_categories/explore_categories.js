function renderExploreCategories(parentId) {
    const parent = document.getElementById(parentId);
    const exploreCategoriesSection = document.createElement('div');
    exploreCategoriesSection.id = 'explore-categories-section';
    exploreCategoriesSection.innerHTML = `
        <h2>UTFORSKA KATEGORIER</h2>
        <div id='explore-categories-container'></div>
    `;

    parent.append(exploreCategoriesSection);
    renderExploreCategoriesBoxes('explore-categories-container');
}

const categories = [
    "Soppor",
    "Sallader",
    "Pastor",
    "Nudlar",
    "Pajer",
    "Pizzor",
    "Mackor",
    "Mellanmål",
    "Vegetariskt",
    "Kött",
    "Kyckling",
    "Fisk",
    "Grillat",
    "Grytor",
    "Gratänger"
]

function renderExploreCategoriesBoxes(parentId) {
    const parent = document.getElementById(parentId);

    for (let category of categories) {
        const categoryDom = document.createElement('div');
        categoryDom.classList.add('category')
        categoryDom.innerHTML = `<a>${category}</a>`;
        parent.append(categoryDom);
        categoryDom.style.backgroundImage = `url('./../../images_categories/${category}-category.jpg')`;
        categoryDom.addEventListener('click', function () {
            window.location = './recipes.html?category=' + category;
        });
    }
}
