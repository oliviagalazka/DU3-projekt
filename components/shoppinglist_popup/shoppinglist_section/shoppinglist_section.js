function renderShoppinglistSection(parentId) {
    const parent = document.getElementById(parentId);
    const shoppinglistSection = document.createElement('div');
    shoppinglistSection.id = 'shoppingslist-section';
    shoppinglistSection.innerHTML = `
        <div class='dumdum'>
            <div>
                <h1>INKÖPSLISTA</h1>
                <div id='items-container'></div>
                <div id='input-button'>
                    <input type='text' placeholder='Lägg till vara här'>
                    <button>+</button>
                </div>
            </div>
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
    itemContainer.id = `item-${item.item}`;
    itemContainer.classList.add('item-container');
    itemContainer.innerHTML = `<div class='item-box'>
                                    <div id='checkbox-${item.item}' class='check-box'></div>
                                    <div>${item.item}</div>
                                </div>
                                <div id='delete-button-${item.item}' class='delete-box'>
                                    <img alt='Ta bort' src='./img_for_design/trashcan.svg'>
                                </div>`;

    parent.append(itemContainer);


    if (item.checked === true) {
        itemContainer.querySelector('.check-box').classList.add('checked');
    }

    itemContainer.querySelector('.check-box').addEventListener('click', toggleItemCheckbox);
    itemContainer.querySelector('.delete-box').addEventListener('click', removeItemFromShoppingslist);
}

// Post Item
function postItem(instanceData) {
    renderItem('items-container', instanceData);
}

// Delete Item
function deleteItem(deleteInstance) {
    itemDom = document.getElementById(`item-${deleteInstance.item}`);
    itemDom.remove();
}

// Patch Item Checkbox
function patchItemCheckbox(patchInstance) {
    itemDom = document.getElementById(`checkbox-${patchInstance.item}`);
    if (itemDom.classList.contains('checked')) {
        itemDom.classList.remove('checked');
    } else
        itemDom.classList.add('checked');
}