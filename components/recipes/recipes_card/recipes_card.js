
function renderRecipeCard(parentID, recipe) {
    const parent = document.getElementById(parentID);
    const recipeCard = document.createElement('div');

    recipeCard.id = `recipe-${recipe.id}-card`;
    recipeCard.classList.add('recipe-card');

    recipeCard.addEventListener('click', () => {
        renderRecipePopup(recipe);
    });

    recipeCard.innerHTML = `
        <div id='rc-img'>Bild</div>
        <div id='rc-info'>
            <h3 id='rc-name'>${recipe.name}</h3>
            <p id='rc-review'>9/10 (av 15 omdömen)</p>
            <div id='rc-heart'>&#x2661</div>
        </div>
    `;

    parent.append(recipeCard);
}
