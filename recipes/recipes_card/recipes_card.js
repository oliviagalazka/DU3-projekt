function renderRecipesCard(parentId, recipe) {
    const parent = document.getElementById(parentId);
    const recipesCard = document.createElement('div');
    recipesCard.id = `recipe-${recipe.id}-card`;
    recipesCard.innerHTML = `
        <div id='recipe-img'></div>
        <div id='recipe-info'>
            <h2>${recipe.name}</h2>
            <div id='sub-info'>
                <h3>Betyg</h3>
                <div id='heart'>Hjärta</div>
        </div>
    `;
}

