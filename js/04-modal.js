console.log("Омниссия, благослови этот код");

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

// Кнопки - Открыть Модалку
modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');

        // запрет передачи кликов родителю
        modal.querySelector('.modal-window').addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
})

// Закрытие модалок по фейду
allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden');
    });
});

// Кнопки - Закрыть Модалку
modalClosebuttons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    })
})


