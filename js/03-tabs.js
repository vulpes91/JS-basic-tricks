console.log("Омниссия, благослови мой код");

//нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');

//нашли все content box 
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
    item.addEventListener("click", function () {
        //1. Скрыть все content box  
        contentBoxes.forEach(function (item) {
            item.classList.add("hidden");
        })
        //2 Выбрать нужный content box и показать его 
        const contentBox = document.querySelector("#" + this.dataset.tab);
        contentBox.classList.remove("hidden");
    })
})