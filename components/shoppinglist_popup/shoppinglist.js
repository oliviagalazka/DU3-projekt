function renderShoppinglistPopup() {
    const shoppinglistPopupWrapper = document.createElement('div');
    shoppinglistPopupWrapper.id = 'shoppingslist-popup-wrapper';

    // Stäng popup knapp
    const closePopupButton = document.createElement('a');
    closePopupButton.id = 'closeShoppinglistPopupButton';
    closePopupButton.innerHTML = '྾';
    closePopupButton.addEventListener('click', (e) => {
        e.preventDefault();
        shoppinglistPopupWrapper.remove();
    });

    shoppinglistPopupWrapper.appendChild(closePopupButton);
    document.body.appendChild(shoppinglistPopupWrapper);

    renderShoppinglistSection('shoppingslist-popup-wrapper');
}