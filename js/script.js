orderForm();

function orderForm() {
  'use strict';

  const button = document.querySelector('.order-section__button');
  const form = document.querySelector('.order-form');
  const dateArrival = form.querySelector('[name=date-arrival]');
  let isFormExpanded;

  window.addEventListener('load', () => {
    form.classList.add('order-form--hidden');
    button.setAttribute('aria-expanded', false);
  });

  button.addEventListener('click', (evt) => {
    evt.preventDefault();

    isFormExpanded = button.getAttribute('aria-expanded') === 'true' ? true : false;

    form.classList.toggle('order-form--hidden');
    button.setAttribute('aria-expanded', !isFormExpanded);

    if (!form.classList.contains('order-form--hidden')) {
      dateArrival.focus();
    }
  });
}
