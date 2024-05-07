"use strict";

async function getRandomRecipe(parentID, amount) {
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