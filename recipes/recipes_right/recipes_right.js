async function renderRecipesRight(parentId) {

    const recipes = State.GetEntity('recipes')
    console.log(recipes)
    const parent = parentId;
    const recipesRight = document.createElement('div');
    recipesRight.id = 'recipes-right';

    parent.append(recipesRight);

    for (let recipe of recipes) {
        renderRecipesCard(recipesRight, recipe);
    }
}