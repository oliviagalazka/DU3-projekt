function renderMyPageBottom(parentId) {
    const parent = parentId;
    const MyPageBottomContainer = document.createElement('div');
    MyPageBottomContainer.innerHTML = `
        
        <h1>MINA SPARADE RECEPT</h1>
        
        <div id="recipe-container"></div>
        
    `;
    //renderRecipesCard("recipe-container");
    parent.append(MyPageBottomContainer);

}