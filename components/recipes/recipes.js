async function renderRecipePage(category) {

    await State.Get({
        entity: 'recipes', request: './../../api/recipes.php'
    });

    await State.Get({
        entity: 'reviews', request: './../../api/reviews.php'
    });

    //Ska vi verkligen ha detta här? Vi har inte loggat in här än? + vi får felmeddelande om vi har detta?
    // await State.Get({
    //     entity: 'user', request: './../../api/users.php?user=' + localStorage.getItem('login')
    // });

    renderNavContainer('wrapper-recipes');
    renderRecipePageTopSection('wrapper-recipes');
    renderRecipePageBottomSection('wrapper-recipes', category);
    renderFooter('wrapper-recipes');
}

const urlParams = new URLSearchParams(window.location.search);
const urlCategory = urlParams.get('category');

renderRecipePage(urlCategory);