function renderRecipesCard(parent, recipe) {

    // Skapa ett receptkort för varje enskilt recept
    recipe.forEach(rec => {
        const recipeCard = document.createElement('div');
        recipeCard.id = `recipe-${rec.id}-card`;
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <div id='recipe-img'></div>
            <div id='recipe-info'>
                <h2>${rec.name}</h2>
                <div id='sub-info'></div>
                <h3>Betyg</h3>
                <div id='heart'>Hjärta</div>
            </div>
        `;

        parent.append(recipeCard);
    })
}


// Denna ska vi ha kvar
function renderRecipeCard(parentID, recipe) {
    const parent = document.getElementById(parentID);
    const recipeCard = document.createElement('div');
    recipeCard.id = `recipe-${recipe.id}-card`;

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
