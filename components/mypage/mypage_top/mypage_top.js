function renderMyPageTop(parentId) {
    const parent = document.getElementById(parentId);
    const myPageTopContainer = document.createElement('div');
    myPageTopContainer.id = 'mypage-top-container';
    myPageTopContainer.innerHTML = `
                                    <div id='my-page-info'>
                                        <h1>Min Sida</h1>
                                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                                    </div>
                                    <div id='shopping-list'>
                                        <div>Inköpslista</div>
                                        <div>textgubbe</div>
                                    </div>
                                    `;

    parent.append(myPageTopContainer);

    const shoppingListPopup = document.getElementById('shopping-list');
    shoppingListPopup.addEventListener('click', () => {
        renderShoppingList()
    })
}