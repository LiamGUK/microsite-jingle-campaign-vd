import './SASS/style.scss';

let isModalActive = false;
const modal = document.querySelector('.confirm-modal') as HTMLElement;

const handleClose = function (e: Event) {
  if (!isModalActive) return;
  if ((e.target as HTMLElement).dataset.ev !== 'close') return;
  modal.classList.remove('active');
  isModalActive = false;
};

const handleSubmit = function (e: SubmitEvent) {
  e.preventDefault();
  modal.classList.add('active');
  isModalActive = true;
};

window.addEventListener('load', function () {
  document.getElementById('jingle-form')?.addEventListener('submit', handleSubmit);
  modal.addEventListener('click', handleClose);
});
