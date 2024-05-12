function renderRecipePageTopSection(parentId) {
    const parent = document.getElementById(parentId);
    const recipePageTopSection = document.createElement('div');
    recipePageTopSection.id = 'recipe-page-top-section';
    recipePageTopSection.innerHTML = `<div id='shadow-recipe-top'>
                                        <div id='recipe-page-top-container'>
                                            <h1>RECEPT</h1>
                                            <p>Utforska vårt varierande utbud av recept som passar alla matentusiaster - låt dig inspireras och skapa måltider som får alla att vilja ha mer.</p>
                                        </div>
                                      </div>`;
    parent.append(recipePageTopSection);
}