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

function renderCategories(parentId) {
    const parent = parentId;


    for (let category of categories) {
        const categoryDom = document.createElement('div');
        categoryDom.classList.add('category')
        categoryDom.innerHTML = `
        <div id="check-box"></div>
        <div>${category}</div>
        `;
        parent.append(categoryDom);
    }

}

