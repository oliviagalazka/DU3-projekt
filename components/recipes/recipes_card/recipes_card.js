
async function renderRecipeCard(parentID, recipe) {
    const parent = document.getElementById(parentID);
    const recipeCard = document.createElement('div');

    recipeCard.id = `recipe-${recipe.id}-card`;
    recipeCard.classList.add('recipe-card');

    recipeCard.addEventListener('click', () => {
        renderRecipePopup(recipe);
    });

    const review = await recipeAveregeReview(recipe);

    recipeCard.innerHTML = `
        <div id='rc-img'>Bild</div>
        <div id='rc-info'>
            <h3 id='rc-name'>${recipe.name}</h3>
            <div id='rc-review-heart'>
                <p id='rc-review'>${review.averageRank}/10 (av ${review.totalReviews} omdömen)</p>
                <div id='rc-heart'>&#x2661</div>
            </div>
        </div>
    `;

    parent.append(recipeCard);
}

async function recipeAveregeReview(recipe) {
    /*await State.Get({
        entity: 'reviews', request: './../../api/reviews.php'
    });*/
    const reviews = State.GetEntity('reviews');

    const allReviews = [];
    for (let review of reviews) {
        if (review.recipeId === recipe.id) {
            allReviews.push(review.rank);
        }
    }

    let totalRank = 0;
    for (let rank of allReviews) {
        totalRank += rank;
    }

    const averageRank = totalRank / allReviews.length;

    if (allReviews.length === 0) {
        return { averageRank: "-", totalReviews: allReviews.length };
    } else {
        return { averageRank: averageRank, totalReviews: allReviews.length };
    }
}