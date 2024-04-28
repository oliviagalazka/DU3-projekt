function renderMyPageBottom(parentId) {
    const parent = document.getElementById(parentId);
    const myPageBottomContainer = document.createElement('div');
    myPageBottomContainer.id = 'mypage-bottom-container';
    myPageBottomContainer.innerHTML = `
                                        <h1>MINA SPARADE RECEPT</h1>
                                        <div id="saved-recipes-container"></div>
                                      `;
    //renderRecipesCard("recipe-container");
    parent.append(myPageBottomContainer);
}