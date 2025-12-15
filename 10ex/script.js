'use strict';

const defaultButtons = document.getElementsByClassName('default-button');
const defaultButtonsArray = Array.from(defaultButtons);

defaultButtonsArray.forEach(button => {
  button.addEventListener('click', () => {

    const isActive = button.classList.contains('is-toggled');

    // Remove active from all buttons
    defaultButtonsArray.forEach(b => {
      b.classList.remove('is-toggled');
    });

    // Re-add only if it was NOT already active
    if (!isActive) {
      button.classList.add('is-toggled');
    }

  });
});


