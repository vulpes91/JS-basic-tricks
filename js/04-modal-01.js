console.log("Омниссия, благослови этот код");

//находим на странице нужные элементы 
const button = document.querySelector('[data-modal-button');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');


//отслеживаем клик по кнопке открытия и открываем модалку 
button.addEventListener('click', function () {
    modal.classList.remove('hidden');
})

// прослушиваем событие по клику на кнопке закрытия и закрываем 
buttonClose.addEventListener('click', function () {
    modal.classList.add('hidden');
})

modal.addEventListener('click', function () {
    modal.classList.add('hidden');
})

modal.querySelector('.modal-window').addEventListener('click', function (event) {
    event.stopPropagation();
})