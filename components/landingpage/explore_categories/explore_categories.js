function renderExploreCategories(parentId) {
    const parent = document.getElementById(parentId);
    const ExploreCategoriesContainer = document.createElement('div');
    ExploreCategoriesContainer.id = 'explore-categories-container';
    ExploreCategoriesContainer.innerHTML = `
        <h2>UTFORSKA KATEGORIER</h2>
        <div id='utforska-kategorier-section'></div>
    `;

    parent.append(ExploreCategoriesContainer);
    renderExploreCategoriesBoxes('utforska-kategorier-section');
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
        categoryDom.innerHTML = `<a>${category}</a>`;
        parent.append(categoryDom);
<<<<<<< Updated upstream
        categoryDom.addEventListener('click', goToRecipeFeed);
    }
}

function goToRecipeFeed(event) {

    window.location = "./recipes.html";
    console.log(event.target.textContent);
}
=======
        categoryDom.style.backgroundImage = `url('./images_categories/${category}-category.jpg')`;
        categoryDom.addEventListener('click', function () {
            window.location = './recipes.html?category=' + category;
        });
    }
}

>>>>>>> Stashed changes
