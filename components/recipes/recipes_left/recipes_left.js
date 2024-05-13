function renderRecipePageLeftContainer(parentId, category) {
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

    renderCategories('categories', category);
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

<<<<<<< Updated upstream
function renderCategories(parentId) {
=======

function renderCategories(parentId, urlCategory) {
>>>>>>> Stashed changes
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
        if (urlCategory === categoryId) {

        }
        parent.append(categoryDom);

<<<<<<< Updated upstream
=======

        //Börjar kolla om en kategori är ifylld och sen kollar på sökfältet.
        //sen sätter vi en eventListener på alla. 
>>>>>>> Stashed changes
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