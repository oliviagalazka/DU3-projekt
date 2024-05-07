function renderShoppinglistSection(parentId) {
    const parent = document.getElementById(parentId);
    const shoppinglistSection = document.createElement('div');
    shoppinglistSection.id = 'shoppingslist-section';
    shoppinglistSection.innerHTML = `
                                    <div>
                                        <h1>INKÖPSLISTA</h1>
                                        <div>Varor att köpa</div>
                                        <div class="items-container">
                                        </div>
                                        <input type="text">
                                        <button>Lägg till</button>
                                    </div>
                                    `;

    parent.append(shoppinglistSection);

    shoppinglistSection.querySelector('button').addEventListener('click', function () {
        let item = shoppinglistSection.querySelector('input').value;
        shoppinglistSection.querySelector('.items-container').innerHTML += `<div class='items-box'>
                                                                                <div class='item'>
                                                                                    <div class='check-box'></div>
                                                                                    <div>${item}</div>
                                                                                </div>
                                                                                <div class='delete'>
                                                                                    <div>Ta bort</div>
                                                                                </div>
                                                                            </div>`;
        shoppinglistSection.querySelector('input').value = '';
    });
}