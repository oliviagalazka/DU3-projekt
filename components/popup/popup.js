function showPopup(recipe) {
  // Skapa popupen
  const popup_wrapper = document.createElement('div');
  popup_wrapper.id = 'popup-wrapper';
  // FIXME
  // popup_wrapper.classList.remove('hide');
  popup_wrapper.innerHTML = `<div id="close-button">Stäng</div>`;   

  document.body.appendChild(popup_wrapper);

  // Lägg till popupen i DOM:en (t.ex. i body-elementet)
  renderRecipeSection('popup-wrapper', recipe);
  renderReviewsSection('popup-wrapper',)

  // FIXME
  /*
  const closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', function (e) {
    popup_wrapper.classList.add('hide');
  })
  */
}


/*      
          const closeButton = popup.querySelector('#closeButton');
          closeButton.addEventListener('click', function() {
            popup.remove();
          });
        }
      
      
        function addClickEventToShoes() {
          const shoeElements = document.querySelectorAll('.shoe');
      
          shoeElements.forEach(function(shoeElement) {
            shoeElement.addEventListener('click', function() {
              const shoeId = shoeElement.id;
              const selectedShoe = SHOES.find(shoe => shoe.id === parseInt(shoeId, 10));
      
              if (selectedShoe) {
                renderPopup(selectedShoe);
              }
            });
          });
        }
      
        // addClickEventToShoes();
      
      });
    */