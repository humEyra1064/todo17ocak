const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");
//önce gerekli olan elementlerin ıd lerini değişkene atadık kolaylık olsun diye.
//butona tıklandığında oluşacak şeyler
addBtn.addEventListener("click",()=>{
    createListElement()


})

function createListElement(){
    //li oluşturulacak
    //i oluşturulacak
    //p oluşturulacak
    //i oluşturulacak
    //li elementi ul içinde konumlandırılacak
}
//ul ye tıklandığında oluşacak şeyler
todoUl.addEventListener("click",()=>{
    


})
//ınput içinde iken enter a basınca kaydediyor.Bu olayı yazacağız
todoInput.addEventListener("keydown",()=>{
    


})

//sayfa ilk açıldığında imleç inputa focuslanmış olsun istiyoruz.
window.onload = function (){
    todoInput.focus();

};