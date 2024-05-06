function renderRecipePageLeftContainer(parentId) {
    const parent = document.getElementById(parentId);
    const recipePageLeftContainer = document.createElement('div');
    recipePageLeftContainer.id = 'recipe-page-left-container';
    recipePageLeftContainer.innerHTML = `
                                        <input id='search-field' type='text' placeholder='Sök efter ingrediens...'>
                                        <div id='categories-container'>
                                            <h1>KATEGORIER</h1>
                                            <div id='categories'></div>
                                        </div>`

    parent.append(recipePageLeftContainer);

    const inputDom = document.getElementById('search-field');
    inputDom.addEventListener('keyup', searchForIngredient);

    renderCategories('categories');
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

function renderCategories(parentId) {
    const recipes = State.GetEntity('recipes');
    const parent = document.getElementById(parentId);

    for (let category of categories) {
        const categoryDom = document.createElement('div');
        categoryDom.id = `category-${category}`;
        categoryDom.classList.add('category-box');
        categoryDom.innerHTML = `
                                <div class='check-box'></div>
                                <div class='category-text'>${category}</div>
                                `;

        parent.append(categoryDom);

        categoryDom.querySelector('.check-box').addEventListener('click', function (e) {
            document.getElementById('recipe-page-right-container').innerHTML = '';
            categoryDom.querySelector('.check-box').classList.toggle('checked');

            for (let recipe of recipes) {
                const categoriesList = recipe.categories;
                for (category of categoriesList) {
                    if (category === categoryDom.querySelector('.category-text').textContent) {
                        renderRecipeCard('recipe-page-right-container', recipe);
                    }
                }
            }
        });
    }
}