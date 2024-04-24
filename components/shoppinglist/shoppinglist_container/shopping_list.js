function renderShoppingListContainer(parentId) {
    const parent = parentId;
    const shoppingListContainer = document.createElement("div");
    shoppingListContainer.innerHTML = `
        <div>
            <h1>INKÖPSLISTA</h1>
            <div>Varor att köpa</div>
        </div>
    `;

    parent.append(shoppingListContainer);
}