let input=document.getElementById("input");
let button=document.getElementById("add");
let items=document.getElementsById("items");

let todo=[];
window.onload=()=>{
    todo=JSON.parse(localStorage.getItem("todo")) || []
    todo.forEach(todo1 => addtodo(todo))
}
button.addEventListener('click',()=>{
    todo.push(input.value)
    localStorage.setItem("todos",JSON.stringify(todo))
    addtodo(input.value)
    input.value=""
})

function addtodo(todo1){
let para=document.createElement("p")
para.innerText=todo1;
items.appendChild(para)

para.addEventListener("click",()=>{
    para.style.textDecoration="line-through"
    remove(todo1)
})
}
para.addEventListener("dblclick",()=>{
   items.removechind(para)
    remove(todo)
})
function remove(todo){
let index=todo.indexOf(todo)
    if(index>-1){
        todo.splice(index,1)
    }
}
    localStorage.setItem("todos",JSON.stringify(todo))





// let button = document.getElementById('add')
// let todoList = document.getElementById('todoList')
// let input = document.getElementById('input');

// let todos = [];

// button.addEventListener('click',()=>{
//     todos.push(input.value)
    
//     addtodo(input.value)
//     input.value=''
// })
// function addtodo(todo){
//     let para = document.createElement('p');
//     para.innerText = todo;
//     todoList.appendChild(para)
// }