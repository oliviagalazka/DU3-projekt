let currentLocation = '';

/*
(async function () {
    await State.Get({
        entity: 'recipes', request: './../../api/recipes.php'
    });

    await State.Get({
        entity: 'reviews', request: './../../api/reviews.php'
    });
    await State.Get({
        entity: 'user', request: './../../api/users.php?user=' + localStorage.getItem('login')
    });
})()
*/


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
                renderRecipeCard('recipe-page-right-container', recipe);
            }
        }
    }

    if (filteredSearch.length === 0) {
        document.getElementById('recipe-page-right-container').innerHTML = `Tyvärr finns det inga recept med denna ingrediens ännu`;
    }
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