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

// POST ITEM TO SHOPPINGLIST
function postItemToShoppingslist(event) {
    const shoppinglistSection = document.getElementById('shoppingslist-section');
    const inputDom = shoppinglistSection.querySelector('input');

    if (inputDom.value === '') {
        inputDom.setAttribute('placeholder', 'Oops, vänligen skriv en ingrediens.');
    } else {
        const postData = {
            item: inputDom.value,
            username: window.localStorage.getItem('login')
        }

        const request = new Request('./../../api/shoppinglist.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData),
        });

        const postObject = {
            entity: 'shoppinglist',
            request: request
        };

        State.Post(postObject);
        inputDom.value = '';
    }
}

// DELETE ITEM FROM SHOPPINGLIST
function removeItemFromShoppingslist(event) {
    const item = event.target.parentElement.id.split('-')[2];

    const deleteData = {
        item: item,
        username: window.localStorage.getItem('login')
    }

    const request = new Request('./../../api/shoppinglist.php', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(deleteData),
    });

    const patchObject = {
        entity: 'shoppinglist',
        request: request
    };

    State.Delete(patchObject);
}

// PATCH CHECKBOX
function toggleItemCheckbox(event) {
    const item = event.target.id.split('-')[1];

    const patchData = {
        item: item,
        username: window.localStorage.getItem('login')
    }

    const request = new Request('./../../api/shoppinglist.php', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patchData),
    });

    const patchObject = {
        entity: 'shoppinglist',
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