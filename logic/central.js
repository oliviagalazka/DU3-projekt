let currentLocation = '';

// SAVE RECIPE
function saveRecipe(event) {
    event.stopPropagation();

    const patchRecipe = {
        id: parseInt(event.currentTarget.id.split('-')[1]),
        user: window.localStorage.getItem('login')
    };

    const request = new Request('./../../api/users.php', {
        method: 'PATCH',
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(patchRecipe)
    });

    const patchObject = {
        entity: 'user',
        request: request
    };

    State.Patch(patchObject);
}

// SEARCH FOR INGREDIENT
async function searchForIngredient() {
    const inputDom = document.getElementById('search-field');

    await State.Get({ entity: 'recipes', request: './../../api/recipes.php' });
    const recipes = State.GetEntity('recipes');

    let filteredSearch = [];
    document.getElementById('recipe-page-right-container').innerHTML = "";
    for (recipe of recipes) {
        const ingredientList = recipe.ingredients;

        for (ingredient of ingredientList) {
            const lowerCase = ingredient.toLowerCase();
            const upperCase = ingredient.toUpperCase();

            if (ingredient.includes(inputDom.value) || lowerCase.includes(inputDom.value) || upperCase.includes(inputDom.value)) {
                filteredSearch.push(recipe);
                if (filterCategorySearch(recipe)) {
                    renderRecipeCard('recipe-page-right-container', recipe);
                    break;
                }
            }
        }
    }

    if (filteredSearch.length === 0) {
        document.getElementById('recipe-page-right-container').innerHTML = `Tyvärr finns det inga recept med denna ingrediens ännu`;
    }
}

function filterCategorySearch(recipe) {

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
        return true;
    } else {
        const categoriesList = recipe.categories;
        for (let categoryOfList of categoriesList) {
            for (let categoryOfArray of categoryArray) {
                if (categoryOfList === categoryOfArray) {
                    if (searchInInputfield(recipe)) {
                        return true;
                    }
                }
            }
        }
    }

    return false;
}

// RANDOM RECIPES
async function renderRandomRecipe(parentID, amount) {
    const recipes = State.GetEntity('recipes');

    for (let i = 0; i < amount; i++) {
        const randomRecipe = getArrayRandomElement(recipes);
        renderRecipeCard(parentID, randomRecipe);
    }
}

function getRandomNumber(max, min = 0) {
    // Returnerar ett slumpmässigt tal mellan minst 0 och max det argument som vi anropar med
    return min + Math.floor(max * Math.random());
}

function getArrayRandomElement(array) {
    const randomIndex = getRandomNumber(array.length);
    return array[randomIndex];
}