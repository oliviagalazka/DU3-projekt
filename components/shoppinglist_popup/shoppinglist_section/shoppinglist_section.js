function renderShoppinglistSection(parentId) {
    const parent = document.getElementById(parentId);
    const shoppinglistSection = document.createElement('div');
    shoppinglistSection.id = 'shoppingslist-section';
    shoppinglistSection.innerHTML = `<div>
                                        <h1>INKÖPSLISTA</h1>
                                        <div id='items-container'>
                                        </div>
                                        <input type='text'>
                                        <button>Lägg till</button>
                                    </div>`;

    parent.append(shoppinglistSection);

    const user = State.GetEntity('user');
    for (let item of user.shoppingList) {
        renderItem('items-container', item);
    }

    shoppinglistSection.querySelector('button').addEventListener('click', postItemToShoppingslist);
}

// Render Item
function renderItem(parentId, item) {
    const parent = document.getElementById(parentId);

    const itemContainer = document.createElement('div');
    itemContainer.id = `item-${item}`;
    itemContainer.classList.add('item-container');
    itemContainer.innerHTML = `<div class='item-box'>
                                    <div class='check-box'></div>
                                    <div>${item}</div>
                                </div>
                                <div id='delete-button-${item}' class='delete-box'>
                                    <div>Ta bort</div>
                                </div>`;

    parent.append(itemContainer);

    itemContainer.querySelector('.check-box').addEventListener('click', function (e) {
        let checkbox = itemContainer.querySelector('.check-box');
        console.log(checkbox);
        checkbox.classList.toggle('checked');
    });
    itemContainer.querySelector('.delete-box').addEventListener('click', removeItemFromShoppingslist);
}

// Post Item
function postItem(instanceData) {
    renderItem('items-container', instanceData);
}

// Delete Item
function deleteItem(deleteInstance) {
    itemDom = document.getElementById(`item-${deleteInstance}`);
    itemDom.remove();
}