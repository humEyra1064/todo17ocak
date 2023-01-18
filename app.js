const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

let todos = [];
//önce gerekli olan elementlerin ıd lerini değişkene atadık kolaylık olsun diye.
// ===============================================
//butona tıklandığında oluşacak şeyler
addBtn.addEventListener("click",()=>{
    //inputun içindeki değer boşluktan ibaret ise hiçbirşey yazılmadı ise alertten uyarı çıksın
    if(todoInput.value.trim()===""){
        alert("Please enter new to do");
    }
    else {
        const newTodo = {
            id: new Date().getTime(),
            completed: false,
            text:todoInput.value,
        }
    }



    createListElement()
})

function createListElement(){
    const {id,completed,text} = newTodo;  //destr. yaptık
 const li =  document.createElement("li")  ; //li oluşturulacak
 li.setAttribute("id",id)                //li elementine id oluşturduk.
 
 
 const okIcon =  document.createElement("i") ;  //i oluşturulacak
 okIcon.setAttribute("class","fas fa-check")   //i elementine class verdik
 li.appendChild(okIcon) ; // i elementini li elementine child yaptık

 const p =  document.createElement("p") ;   //p oluşturulacak
 const pTextNode = document.createTextNode(text);  //inputun içindeki veriyi "pTextNode" değişkenine atadık
 p.appendChild(pTextNode); //pTextNode değişkenini p ye child yaptık
 li.appendChild(p);  //p elementini de li ye child yaptık.
 const deleteIcon =  document.createElement("i") ;  //i oluşturulacak
 deleteIcon.setAttribute("class","fas fa-trash")
 li.appendChild(deleteIcon);

 todoUl.appendChild(li)   //li elementini ul içine konumlandırılacak




}
// ================================================
//ul ye tıklandığında oluşacak şeyler
todoUl.addEventListener("click",()=>{

    


})
// =====================================================
//ınput içinde iken klavyeden enter a basınca kaydediyor.süslünün içindeki olay gerçekleştirilecek yani add butonu click olacak
todoInput.addEventListener("keydown",()=>{
    if(else.code === "Enter"){
        addBtn.click();
    }
    
})
// ====================================================
//sayfa ilk açıldığında imleç inputa focuslanmış olsun istiyoruz.
window.onload = function (){
    todoInput.focus();

};