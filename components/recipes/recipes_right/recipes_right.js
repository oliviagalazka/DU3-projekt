async function renderRecipesRight(parentId) {

    const recipes = State.GetEntity('recipes')
    console.log(recipes)
    const parent = parentId;
    const recipesRight = document.createElement('div');
    recipesRight.id = 'recipes-right';

    parent.append(recipesRight);

    // FIXME: Ta bort loopen och ersätt recipe med recipes i funktionsanropet
    for (let recipe of recipes) {
        console.log(recipe);
        renderRecipesCard(recipesRight, recipe);
    }
    
}