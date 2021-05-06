console.log("Омниссия, благослови этот код");

//кавычки не должны пересекаться 
const headers = document.querySelectorAll('[data-name="accordeon-title"]');
//console.log(headers);

//первый способ, моогут открываться все секции 
//headers.forEach(function (item) {
//     item.addEventListener("click", function () {
//         this.nextElementSibling.classList.toggle("hidden");
//     })
// })

//второй способ
headers.forEach(function (item) {
    item.addEventListener("click", clickOnHeader);
})

function clickOnHeader() {
    this.nextElementSibling.classList.toggle("hidden");
}