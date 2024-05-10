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
    "Fisk",
    "Grillat",
    "Grytor",
    "Gratänger"
]

function renderCategories(parentId) {
    const recipes = State.GetEntity('recipes');
    const parent = document.getElementById(parentId);

    for (let categoryId of categories) {
        const categoryDom = document.createElement('div');
        categoryDom.id = `category-${categoryId}`;
        categoryDom.classList.add('category-box');
        categoryDom.innerHTML = `
                                <div class='check-box' id="check-box-${categoryId}"></div>
                                <div class='category-text'>${categoryId}</div>
                                `;

        parent.append(categoryDom);

        categoryDom.querySelector('.check-box').addEventListener('click', function (e) {
            let searchCategoryId = 'check-box-' + categoryId;
            let checkedCategoryId = document.getElementById(searchCategoryId);
            checkedCategoryId.classList.toggle('checked');
            let categoryArray = [];

            for (let categoryChecked of categories) {
                let searchCategory = 'category-' + categoryChecked;

                let categorySearch = document.getElementById(searchCategory)
                let categorySearchIfChecked = categorySearch.querySelector('.checked');

                if (categorySearchIfChecked) {
                    categoryArray.push(categoryChecked);
                }
            }

            refreshRecipeCard('recipe-page-right-container');

            if (categoryArray.length === 0) {

                for (let inputfieldRecipe of recipes) {
                    if (searchInInputfield(inputfieldRecipe)) {
                        renderRecipeCard('recipe-page-right-container', inputfieldRecipe);
                    }
                }

            } else {
                for (let recipe of recipes) {
                    const categoriesList = recipe.categories;
                    for (let categoryOfList of categoriesList) {
                        for (let categoryOfArray of categoryArray) {
                            if (categoryOfList === categoryOfArray) {
                                if (searchInInputfield(recipe)) {
                                    renderRecipeCard('recipe-page-right-container', recipe);
                                }
                            }
                        }
                    }
                }
            }
        });
    }
}

function refreshRecipeCard(parentId) {
    let parent = document.getElementById(parentId);

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function searchInInputfield(recipe) {

    const inputDom = document.getElementById('search-field');

    const ingredientList = recipe.ingredients;

    let filteredSearch = [];

    for (ingredient of ingredientList) {
        const lowerCase = ingredient.toLowerCase();
        const upperCase = ingredient.toUpperCase();

        if (ingredient.includes(inputDom.value) || lowerCase.includes(inputDom.value) || upperCase.includes(inputDom.value)) {
            filteredSearch.push(recipe);
            return true;
        }
    }

    return false;
}