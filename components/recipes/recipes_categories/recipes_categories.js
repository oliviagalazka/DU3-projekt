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

async function renderCategories(parentId) {
    // await State.Get({
    //     entity: 'recipes', request: './../../api/recipes.php'
    // });
    const recipes = State.GetEntity('recipes');
    const parent = document.getElementById(parentId);

    for (let category of categories) {
        const categoryDom = document.createElement('div');
        categoryDom.id = `category-${category}`;
        categoryDom.classList.add('categories');
        categoryDom.innerHTML = `
                                <div id="check-box"></div>
                                <div id='category-text'>${category}</div>
                                `;
        parent.append(categoryDom);

        categoryDom.querySelector('#check-box').addEventListener('click', function (e) {
            document.getElementById('recipes-right').innerHTML = '';
            categoryDom.querySelector('#check-box').classList.toggle('checked');

            for (let recipe of recipes) {
                const categoriesList = recipe.categories;
                for (category of categoriesList) {
                    if (category === categoryDom.querySelector('#category-text').textContent) {
                        renderRecipeCard('recipes-right', recipe);
                    }
                }
            }
        });
    }
}

