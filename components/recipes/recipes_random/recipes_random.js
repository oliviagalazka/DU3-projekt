"use strict";


async function getRandomRecipes(amount) {
    await State.Get({
        entity: 'recipes', request: './../../api/recipes.php'
    });

    const RECIPES = State.GetEntity('recipes');
    const recipes = RECIPES[0];
    console.log(recipes);

    for (let i = 0; i < amount; i++) {
        const random_recipe = array_random_element(recipes);
        console.log(random_recipe);
        console.log(random_recipe.name);
        //renderRecipesCard('weeksRecipesContainer', random_recipe)
    }
}


function get_random_number(max, min = 0) {
    // Returns a random number between min (inclusive) and max (exclusive)

    return min + Math.floor(max * Math.random());
}

function array_random_element(a) {
    const random_index = get_random_number(a.length);
    return a[random_index];
}

/*
async function getRandomRecipes(amount) {
    await State.Get({
        entity: 'recipes', request: './../../api/recipes.php'
    });

    const recipes = State.GetEntity('recipes');
    console.log(recipes);

    // Skapa en kopia av listan med recept
    const shuffledRecipes = recipes.slice();

    // Blanda om listan med recept
    for (let i = shuffledRecipes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledRecipes[i], shuffledRecipes[j]] = [shuffledRecipes[j], shuffledRecipes[i]];
    }

    // Välj de första "amount" recepten från den blandade listan
    const selectedRecipes = shuffledRecipes.slice(0, amount);

    selectedRecipes.forEach(random_recipe => {
        console.log(random_recipe);
        //renderRecipesCard('weeksRecipesContainer', random_recipe)
        //console.log(random_recipe);
    });
}
*/