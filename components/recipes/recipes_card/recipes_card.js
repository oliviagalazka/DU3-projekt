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
    });
}

