function renderRecipePopup(recipe) {
  const recipePopupWrapper = document.createElement('div');
  recipePopupWrapper.id = 'recipe-popup-wrapper';

  const recipePopupContent = document.createElement('div');
  recipePopupContent.id = 'recipe-popup-content';

  // Stäng popup knapp
  const closePopupButton = document.createElement('a');
  closePopupButton.id = 'closePopupButton';
  closePopupButton.innerHTML = '྾';
  closePopupButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('prevent-scroll');
    recipePopupWrapper.remove();
  });

  recipePopupContent.appendChild(closePopupButton);
  recipePopupWrapper.appendChild(recipePopupContent);

  document.body.classList.add('prevent-scroll');
  document.body.appendChild(recipePopupWrapper);

  renderRecipeSection('recipe-popup-content', recipe);
  renderReviewSection('recipe-popup-content', recipe);
}
