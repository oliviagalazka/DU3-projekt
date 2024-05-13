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
    <div id='servitris-gubbe-bild'></div>
    <h1>OMDÖMEN</h1>
    <div id='add-comment-container'>
        <input id='post-review-input' type='text' placeholder='Lämna ett omdömme...'>
        <select></select>
    </div>
    <div id='post-review-button'>Skicka in</div>
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

        if (inputDom.value === '') {
            inputDom.setAttribute('placeholder', 'Oops, vänligen lämna ett omdömme innan du kommenterar.');
        } else {
            const postData = {
                recipeId: recipe.id,
                comment: inputDom.value,
                rank: parseInt(selectDom.value)
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
        }
    });
}

// Get Review Container
async function renderGetReviewContainer(parentId, recipe) {
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
    reviewDom.classList.add('review');

    reviewDom.innerHTML = `
                            <div id='icon-review-container'>
                                <img src='./img_for_design/review-icon.svg' alt='Profil Ikon'>
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