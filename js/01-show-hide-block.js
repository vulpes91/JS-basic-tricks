console.log("Омниссия, благослови этот код");
//document.querySelector("#button")
//в ДОКУМЕНТЕ - ВЫБРАТЬ (что выбрать)

//нашли button, записали в константу
const button = document.querySelector("#button");
const content = document.querySelector("#content");

//добавляем метод addEventListener 
// в скобках сперва указывается что должно произойти, затем что происходит после этого события)
button.addEventListener("click", function () {
    // content.classList.toggle("content-hidden");

    /* //простой способ - много кода
    if (content.classList.contains("content-hidden")) {
        button.textContent = "Показать блок";
    } else {
        button.textContent = "Скрыть блок";
    }
    */
    if (content.classList.toggle("content-hidden")) {
        button.textContent = "Показать блок";
    } else {
        button.textContent = "Скрыть блок";
    }

});

//content.classList.add("имя класса элемента, который ему добавится");
//content.classList.remove("имя класса элемента6 который надо убрать");
//toggle работает как выкл/вкл 


