function renderReviewsSection(parentID, review){
    const reviews = State.GetEntity('reviews');
    
    const parent = document.getElementById(parentID);
    const reviewsSection = document.createElement('div');
    reviewsSection.id = 'reviews-section';
    reviewsSection.innerHTML = `<div id='reviews-container'></div>`;
    
    parent.append(reviewsSection);
    renderAddReviewsContainer('reviews-container');
    renderReadReviewsContainer('reviews-container');
}

function renderAddReviewsContainer(parentID){
    const parent = document.getElementById(parentID);

    const addReviewContainer = document.createElement("div");
    addReviewContainer.id = "add-review-container";
    addReviewContainer.innerHTML = `
                                    <h1>Omdömen</h1>
                                    <div>
                                        <input type="text">
                                        <select></select>
                                    </div>
                                    <div>KOMMENTERA</div>
                                `;
    
    parent.append(addReviewContainer);

    let selectDom = document.querySelector('select');

    for (let i = 0; i < 11; i++) {
        const optionDom = document.createElement('option');
        optionDom.textContent = i;
        selectDom.append(optionDom);
    }
}

async function renderReadReviewsContainer (parentID) {
    await State.Get({ entity: 'reviews', request: './../../api/reviews.php' });
    const reviews = State.GetEntity('reviews');

    const parent = document.getElementById(parentID);
    const readReviewsContainer = document.createElement("div");
    readReviewsContainer.id = "read-reviews-container";
    parent.append(readReviewsContainer);

    for (let review of reviews) {
        renderReview("read-reviews-container", review);
    }
}

function renderReview(parentID, review) {
    const parent = document.getElementById(parentID);
    const reviewDom = document.createElement('div');
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