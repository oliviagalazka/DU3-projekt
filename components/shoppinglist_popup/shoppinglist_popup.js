function renderShoppingList() {
  const shoppinglistPopupWrapper = document.createElement('div');
  shoppinglistPopupWrapper.id = 'shoppinglist-popup-wrapper';

  // Stäng popup knapp
  const closePopupButton = document.createElement('a');
  closePopupButton.innerHTML = 'Gå tillbaka till Min Sida';
  closePopupButton.addEventListener('click', (e) => {
    e.preventDefault();
    shoppinglistPopupWrapper.remove();
  });

  shoppinglistPopupWrapper.appendChild(closePopupButton);
  document.body.appendChild(shoppinglistPopupWrapper);

  renderShoppinglistSection('shoppinglist-popup-wrapper');
}