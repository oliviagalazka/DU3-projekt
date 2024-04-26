function renderReviewSection(parentID, recipe) {
    const reviews = State.GetEntity('reviews');

    const parent = document.getElementById(parentID);
    const reviewsSection = document.createElement('div');
    reviewsSection.id = 'reviews-section';
    reviewsSection.innerHTML = `<div id='reviews-container'></div>`;

    parent.append(reviewsSection);
    renderAddReviewsContainer('reviews-container', recipe);
    renderReadReviewsContainer('reviews-container', recipe);
}

function renderAddReviewsContainer(parentID, recipe) {
    const parent = document.getElementById(parentID);

    const addReviewContainer = document.createElement("div");
    addReviewContainer.id = "add-review-container";
    addReviewContainer.innerHTML = `
                                    <h1>Omdömen</h1>
                                    <div>
                                        <input id="input-comment" type="text" placeholder="Lämna en kommentar">
                                        <select></select>
                                    </div>
                                    <div id="comment-button">KOMMENTERA</div>
                                `;

    parent.append(addReviewContainer);

    let selectDom = document.querySelector('select');
    let inputDom = document.getElementById('input-comment');

    for (let i = 0; i < 11; i++) {
        const optionDom = document.createElement('option');
        optionDom.textContent = i;
        selectDom.append(optionDom);
    }

    const commentButton = document.getElementById('comment-button');
    commentButton.addEventListener('click', () => {

        const postData = {
            recipeId: recipe.id,
            userId: 3, // behöver fixa denna nyckeln
            comment: inputDom.value,
            rank: selectDom.value
        }

        const request = new Request("./../../api/reviews.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });

        const review = {
            entity: "reviews",
            request: request
        }
        State.Post(review);
        inputDom.value = "";
        selectDom.value = 0;
    })
}

async function renderReadReviewsContainer(parentID, recipe) {
    await State.Get({ entity: 'reviews', request: './../../api/reviews.php' });
    const reviews = State.GetEntity('reviews');

    const parent = document.getElementById(parentID);
    const readReviewsContainer = document.createElement("div");
    readReviewsContainer.id = "read-reviews-container";
    parent.append(readReviewsContainer);
    console.log(recipe.id);
    for (let review of reviews) {
        if (review.recipeId === recipe.id) {
            console.log(review.recipeId);
            renderReview("read-reviews-container", review);
        }
    }
}

function renderReview(parentID, review) {
    const parent = document.getElementById(parentID);
    const reviewDom = document.createElement('div');
    reviewDom.id = `review-${review.id}`;
    console.log(review);

    reviewDom.innerHTML = `
                        <div>
                            <img src="">
                            <div>${review.rank}/10</div>
                        </div>
                        <div>${review.comment}</div>
                        `;

    parent.append(reviewDom);
}


function postReviewInstance(instanceData) {
    renderReview("read-reviews-container", instanceData);
}