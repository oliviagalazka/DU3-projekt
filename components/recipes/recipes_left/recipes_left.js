function renderRecipesLeft(parentId) {
    const parent = parentId;
    const recipesLeft = document.createElement('div');
    recipesLeft.id = 'recipes-left';
    recipesLeft.innerHTML = `
    <input type="text" id='search-field'>
    <div id="categories-container">
        <h1>KATEGORIER</h1>
        <div id="categories"></div>
    </div>`
    parent.append(recipesLeft);

    const inputDom = document.getElementById('search-field');
    inputDom.addEventListener('keyup', searchForIngredient);

    renderCategories('recipes-left');
}

async function searchForIngredient() {
    const inputDom = document.getElementById('search-field');

    // await State.Get({ entity: 'recipes', request: './../../api/recipes.php' });
    const recipes = State.GetEntity('recipes');

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