"use strict";

async function getRandomRecipe(parentID, amount) {
    await State.Get({ entity: 'recipes', request: './../../api/recipes.php' });

    const RECIPES = State.GetEntity('recipes'); // Får en array för mycket, här behöver vi ändra
    const recipes = RECIPES[0];

    for (let i = 0; i < amount; i++) {
        const randomRecipe = arrayRandomElement(recipes);
        renderRecipeCard(parentID, randomRecipe);
    }
}

function getRandomNumber(max, min = 0) {
    // Returnerar ett slumpmässigt tal mellan minst 0 och max det argument som vi anropar med
    return min + Math.floor(max * Math.random());
}

function arrayRandomElement(array) {
    const randomIndex = getRandomNumber(array.length);
    return array[randomIndex];
}