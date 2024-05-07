function renderRecipePopup(recipe) {
  const recipePopupWrapper = document.createElement('div');
  recipePopupWrapper.id = 'recipe-popup-wrapper';

  // Stäng popup knapp
  const closePopupButton = document.createElement('a');
  closePopupButton.id = 'closePopupButton';
  closePopupButton.innerHTML = '྾';
  closePopupButton.addEventListener('click', (e) => {
    e.preventDefault();
    recipePopupWrapper.remove();
  });

  recipePopupWrapper.appendChild(closePopupButton);
  document.body.appendChild(recipePopupWrapper);

  renderRecipeSection('recipe-popup-wrapper', recipe);
  renderReviewSection('recipe-popup-wrapper', recipe);
};
