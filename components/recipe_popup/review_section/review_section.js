function renderReviewSection(parentId, recipe) {
    const reviews = State.GetEntity('reviews');

    const parent = document.getElementById(parentId);
    const reviewSection = document.createElement('div');
    reviewSection.id = 'review-section';
    reviewSection.innerHTML = `<div id='review-container'></div>`;

    parent.append(reviewSection);

    renderPostReviewContainer('review-container', recipe);
    renderGetReviewContainer('review-container', recipe);
}

// Post Review Container
function renderPostReviewContainer(parentId, recipe) {
    const parent = document.getElementById(parentId);
    const postReviewContainer = document.createElement('div');
    postReviewContainer.id = 'post-review-container';
    postReviewContainer.innerHTML = `
                                    <h1>Omdömen</h1>
                                    <div>
                                        <input id='post-review-input' type='text' placeholder='Lämna ett omdömme'>
                                        <select></select>
                                    </div>
                                    <div id='post-review-button'>KOMMENTERA</div>
                                `;

    parent.append(postReviewContainer);

    let selectDom = postReviewContainer.querySelector('select');
    let inputDom = document.getElementById('post-review-input');

    for (let i = 0; i < 11; i++) {
        const optionDom = document.createElement('option');
        optionDom.textContent = i;
        selectDom.append(optionDom);
    }

    const postReviewButton = document.getElementById('post-review-button');
    postReviewButton.addEventListener('click', () => {

        const postData = {
            recipeId: recipe.id,
            userId: 'id', // Behöver fixa så att värdet på denna nyckel representerar id:t på användaren som lämnade ett omdömme
            comment: inputDom.value,
            rank: selectDom.value
        }

        const request = new Request('./../../api/reviews.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData),
        });

        const newReview = {
            entity: 'reviews',
            request: request
        }

        State.Post(newReview);
        inputDom.value = '';
        selectDom.value = 0;
    });
}

// Get Review Container
async function renderGetReviewContainer(parentId, recipe) {
    await State.Get({ entity: 'reviews', request: './../../api/reviews.php' });
    const reviews = State.GetEntity('reviews');

    const parent = document.getElementById(parentId);
    const getReviewContainer = document.createElement('div');
    getReviewContainer.id = 'get-review-container';

    parent.append(getReviewContainer);

    for (let review of reviews) {
        if (review.recipeId === recipe.id) {
            renderReview('get-review-container', review);
        }
    }
}

// Render Review
function renderReview(parentId, review) {
    const parent = document.getElementById(parentId);
    const reviewDom = document.createElement('div');
    reviewDom.id = `review-${review.id}`;

    reviewDom.innerHTML = `
                            <div id='icon-review-container'>
                                <img src='' alt='Profil Ikon'>
                                <div>${review.rank}/10</div>
                            </div>
                            <div>${review.comment}</div>
                            `;

    parent.append(reviewDom);
}

// Review Instance
function postReviewInstance(instanceData) {
    renderReview('get-review-container', instanceData);
}