function renderRecipesLeft(parentId) {
    const parent = parentId;
    const recipesLeft = document.createElement('div');
    recipesLeft.id = 'recipes-left';
    recipesLeft.innerHTML = `
    <input type="text" id='search-field'>
    <button id='search-button'>Sök</button>
    <div id="categories-container">
        <h1>KATEGORIER</h1>
        <div id="categories"></div>
    </div>`
    parent.append(recipesLeft);

    // Vill vi ha en knapp där man först ser resultatet när man klickar på knappen?
    //const searchButton = document.getElementById('search-button');
    //searchButton.addEventListener('click', search);

    // Vill vi kunna se sökningen live efter varje bokstav man skriver?
    const inputDom = document.getElementById('search-field');
    inputDom.addEventListener('keyup', search);

    renderCategories(recipesLeft);
}

async function search() {
    const inputDom = document.getElementById('search-field');

    await State.Get({ entity: 'recipes', request: './../../api/recipes.php' });
    const RECIPES = State.GetEntity('recipes'); // Får en array för mycket, här behöver vi ändra
    const recipes = RECIPES[0];

    let filteredSearch = [];
    document.getElementById('recipes-right').innerHTML = "";
    for (recipe of recipes) {
        const ingredientList = recipe.ingredients;

        for (ingredient of ingredientList) {
            const lowerCase = ingredient.toLowerCase();
            const upperCase = ingredient.toUpperCase();

            if (ingredient.includes(inputDom.value) || lowerCase.includes(inputDom.value) || upperCase.includes(inputDom.value)) {
                filteredSearch.push(recipe);
                renderRecipeCard('recipes-right', recipe);
            }
        }
    }

    if (filteredSearch.length === 0) {
        document.getElementById('recipes-right').innerHTML = `Tyvärr finns det inga recept med denna ingrediens ännu`;
    }
}