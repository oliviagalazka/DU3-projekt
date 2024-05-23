function renderRecipePageLeftContainer(parentId, category) {
    const parent = document.getElementById(parentId);
    const recipePageLeftContainer = document.createElement('div');
    recipePageLeftContainer.id = 'recipe-page-left-container';
    recipePageLeftContainer.innerHTML = `
                                        <input id='search-field' type='text' placeholder='Sök efter ingrediens...'>
                                        <div id='categories-container'>
                                            <h1>KATEGORIER</h1>
                                            <div id='categories'></div>
                                        </div>`

    parent.append(recipePageLeftContainer);

    const inputDom = document.getElementById('search-field');
    inputDom.addEventListener('keyup', searchForIngredient);

    renderCategories('categories', category);
}

const categories = [
    "Soppor",
    "Sallader",
    "Pastor",
    "Nudlar",
    "Pajer",
    "Pizzor",
    "Mackor",
    "Mellanmål",
    "Vegetariskt",
    "Kött",
    "Kyckling",
    "Fisk",
    "Grillat",
    "Grytor",
    "Gratänger"
]

function renderCategories(parentId, urlCategory) {

    const recipes = State.GetEntity('recipes');
    const parent = document.getElementById(parentId);

    //startar alla filterna och alla buttons 
    for (let categoryId of categories) {
        const categoryDom = document.createElement('div');
        categoryDom.id = `category-${categoryId}`;
        categoryDom.classList.add('category-box');
        categoryDom.innerHTML = `
                                <div class='check-box' id="check-box-${categoryId}"></div>
                                <div class='category-text'>${categoryId}</div>
                                `;


        parent.append(categoryDom);

        if (urlCategory === categoryId) {
            let searchCategoryId = 'check-box-' + categoryId;
            let checkedCategoryId = document.getElementById(searchCategoryId);
            checkedCategoryId.classList.toggle('checked');
        }

        //Börjar kolla om en kategori är ifylld och sen kollar på sökfältet.
        //sen sätter vi en eventListener på alla. 

        //Börjar kolla om en kategori är ifylld och sen kollar på sökfältet.
        //sen sätter vi en eventListener på alla. 

        categoryDom.querySelector('.check-box').addEventListener('click', function (e) {

            //Vi kollar om den är ichekad eller inte. Är den icheckad sätter vi av den och tvärtom. 
            let searchCategoryId = 'check-box-' + categoryId;
            let checkedCategoryId = document.getElementById(searchCategoryId);
            checkedCategoryId.classList.toggle('checked');

            //Vi söker upp alla kategorier som är checkade. Måste vi ha för att man ska trycka i flera kategorier. 
            let categoryArray = [];
            for (let categoryChecked of categories) {
                let searchCategory = 'category-' + categoryChecked;

                let categorySearch = document.getElementById(searchCategory)
                let categorySearchIfChecked = categorySearch.querySelector('.checked');

                if (categorySearchIfChecked) {
                    categoryArray.push(categoryChecked);
                }
            }

            //Vi tömmer varje gång vi trycker på en kategoributton.  
            refreshRecipeCard('recipe-page-right-container');

            //Här fyller vi med alla recept
            if (categoryArray.length === 0) { //Om ingen knapp är itryckt så fyller vi på med alla recept. 

                for (let inputfieldRecipe of recipes) {

                    //Kollar om sökfältet uppfyller receptets ingredienser. 
                    if (searchInInputfield(inputfieldRecipe)) {
                        renderRecipeCard('recipe-page-right-container', inputfieldRecipe);
                    }
                }

            } else {

                //Går igenom varje recept och kollar om den har en kategori som är itryckt. Minst en
                let recipeCheck = false;
                for (let recipe of recipes) {
                    const categoriesList = recipe.categories;
                    recipeCheck = false;
                    for (let categoryOfList of categoriesList) {
                        for (let categoryOfArray of categoryArray) {
                            if (categoryOfList === categoryOfArray) {

                                //Kollar om sökfältet uppfyller receptets ingredienser. 
                                if (searchInInputfield(recipe)) {
                                    renderRecipeCard('recipe-page-right-container', recipe);
                                    recipeCheck = true;
                                    break;
                                }
                            }
                        }
                        if (recipeCheck) {
                            break;
                        }
                    }
                }
            }
        });
    }
}

function refreshRecipeCard(parentId) {
    let parent = document.getElementById(parentId);

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function searchInInputfield(recipe) {

    const inputDom = document.getElementById('search-field');

    const ingredientList = recipe.ingredients;

    let filteredSearch = [];

    for (ingredient of ingredientList) {
        const lowerCase = ingredient.toLowerCase();
        const upperCase = ingredient.toUpperCase();

        if (ingredient.includes(inputDom.value) || lowerCase.includes(inputDom.value) || upperCase.includes(inputDom.value)) {
            filteredSearch.push(recipe);
            return true;
        }
    }

    return false;
}