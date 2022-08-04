/**@type {HTMLElement[]} */
const buttons = document.querySelectorAll('.rating__btn');
/**@type {HTMLElement} */
const submitButton = document.querySelector('.rating__submit');
/**@type {(string|null)} */
let ratingSelected = null;
/**@type {HTMLElement} */
const section = document.querySelector('.rating');

/**@param {HTMLElement[]} elements */
function removeActiveButton(elements) {
  if (!elements) return;

  elements.forEach((button) => {
    button.classList.remove('rating__btn--active');
  });
}
/**@param {MouseEvent} e */
function setRantingOnClick(e) {
  removeActiveButton(buttons);

  e.target.classList.add('rating__btn--active');
  ratingSelected = e.target.dataset.ratingvalue;

  submitButton.disabled = false;

  submitButton.addEventListener('click', Submit);
}
function renderThanks() {
  const img = document.createElement('img');
  img.setAttribute('src', '/images/illustration-thank-you.svg');
  img.setAttribute('alt', 'thank you');
  img.classList.add('rating__img');

  const wrapper = document.createElement('div');
  wrapper.classList.add('rating__selected');

  const div = document.createElement('div');
  div.innerHTML = `You selected <span class="rating__value">${ratingSelected}</span> out of 5`;

  wrapper.appendChild(div);

  const title = document.createElement('h1');
  title.textContent = 'Thank you!';
  title.classList.add('rating__title');
  title.classList.add('rating__thanks');

  const copy = document.createElement('p');
  copy.classList.add('rating__copy');
  copy.classList.add('rating__paragraph');
  copy.textContent =
    'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';

  section.innerHTML = '';
  section.append(img, wrapper, title, copy);
}
function Submit() {
  section.classList.add('rating--animated');

  buttons.forEach((btn) => {
    btn.removeEventListener('click', setRantingOnClick);
  });
  renderThanks();

  submitButton.removeEventListener('click', submitButton);
}

buttons &&
  buttons.forEach((btn) => {
    btn.addEventListener('click', setRantingOnClick);
  });
