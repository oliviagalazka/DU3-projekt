let currentLocation = '';


// SAVE RECIPE
function saveRecipe(event) {
    event.stopPropagation();

    if (!window.localStorage.getItem('login')) {
        notLogedInPopup();
    } else {
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
}

// Recipe Average Review
async function recipeAverageReview(recipe) {
    const reviews = State.GetEntity('reviews');

    const allReviews = [];
    for (let review of reviews) {
        if (review.recipeId === recipe.id) {
            allReviews.push(review.rank);
        }
    }

    let totalRank = 0;
    for (let rank of allReviews) {
        totalRank += rank;
    }

    const averageRank = totalRank / allReviews.length;

    if (allReviews.length === 0) {
        return { averageRank: "-", totalReviews: allReviews.length };
    } else {
        return { averageRank: averageRank, totalReviews: allReviews.length };
    }
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

// PATCH SHOPPINGLIST CHECKBOX
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

    const recipes = State.GetEntity('recipes');

    let filteredSearch = [];
    document.getElementById('recipe-page-right-container').innerHTML = "";
    for (recipe of recipes) {
        const ingredientList = recipe.ingredients;

        for (ingredient of ingredientList) {
            const lowerCase = ingredient.toLowerCase();
            const inputValue = inputDom.value.toLowerCase();

            if (lowerCase.includes(inputValue)) {
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

//Funktionen börjar kolla sökfältet och sen kollar om det finns någon kategori ifyllt. 
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