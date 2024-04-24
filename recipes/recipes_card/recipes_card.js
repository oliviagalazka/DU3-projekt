function renderRecipesCard(parentId, recipe) {
    const parent = parentId;
    const recipeCard = document.createElement('div');
    recipeCard.id = `recipe-${recipe.id}-card`;
    console.log(recipeCard.id)
    recipeCard.innerHTML = `
        <div id='recipe-img'></div>
        <div id='recipe-info'>
            <h2>${recipe.name}</h2>
            <div id='sub-info'></div>
            <h3>Betyg</h3>
            <div id='heart'>Hjärta</div>
        </div>
    `;

    parent.append(recipeCard);
}

