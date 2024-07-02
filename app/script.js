function hello() {
  console.log('Hello');
}

const btn = document.querySelector('#btn'); //knopka
console.log(btn);

btn.addEventListener('click', hello); //vuzov funkcii po kliku

const modalShowBtn = document.querySelector('#modal-show'); //knopka modalki
console.log(modalShowBtn);

function showModal() {
  const modal = document.querySelector('.modal');
  modal.classList.toggle('modal-show');
}

modalShowBtn.addEventListener('click', showModal);
