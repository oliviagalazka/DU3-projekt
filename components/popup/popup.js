function renderPopup(recipe) {

  // Skapa popupen
  const popup_wrapper = document.createElement('div');
  popup_wrapper.id = 'popup-wrapper';
  
  // ta bort knappen
  const closeButton = document.createElement('a');
  closeButton.innerHTML = 'Stäng';
  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    popup_wrapper.remove();
  });

  popup_wrapper.appendChild(closeButton);
  document.body.appendChild(popup_wrapper);

  // Lägg till popupen i DOM:en (t.ex. i body-elementet)
  renderRecipeSection('popup-wrapper', recipe);
  renderReviewsSection('popup-wrapper');
};
