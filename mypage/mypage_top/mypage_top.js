function renderMyPageTop(parentId) {
    const parent = parentId;
    const MyPageTopContainer = document.createElement('div');
    MyPageTopContainer.id = "my-page-top-container";
    MyPageTopContainer.innerHTML = `
        <div id="my-page-info">
            <h1>Min Sida</h1>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
        <div id="shopping-list">
            <div>Inköpslista</div>
            <div>textgubbe</div>
        </div>
        
    `;

    parent.append(MyPageTopContainer);

}