function renderReviewsSection(parentID, comments){
    const reviews = State.GetEntity('reviews');
    const parent = document.getElementById(parentID);
    const reviewsContainer = document.createElement('div');
    reviewsContainer.id = 'reviews-container';
    // reviewsContainer.innerHTML = `
    //     <div id='read-reviews-container'></div>
    // `;

    parent.append(reviewsContainer);

    renderAddReviewsContainer('reviews-container');
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
}

function renderReadReviewsContainer (parentID) {
    const parent = document.getElementById(parentID);

    const readReviewsContainer = document.createElement("div");
    readReviewsContainer.innerHTML = ``;

    parent.append(readReviewsContainer);
}