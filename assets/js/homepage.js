/* Copied straight from the bulma.io docs. This was just their example code for opening/closing their built in modal class.

This could probably be shortened and cleaned up some if we're only going to be using one modal.

*/

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // TODO: Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;


		/* This works on my mac at least but keyCode is deprecated and I havent used 
		KeyboardEvent.code before.  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/
		*/
    if (e.keyCode === 27) { // Escape key 
      closeAllModals();
    }
  });
});