const open = document.getElementById('open');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  console.log('one');
  modal.classList.add('show');
});

close.addEventListener('click', () => {
  modal.classList.remove('show');
});