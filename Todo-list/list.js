// const inputbox = document.getElementById("input-box")
// const listcontainer =document.getElementById(".list-container")

// document.getElementById(".add-btn").addEventListener("click",addtask)

// function addtask(){
//     if(inputbox.value ==".input-box"){
//         alert("you must write something")
//     }else{
//         let li= document.createElement("li")
//         li.innerHTML=inputbox.value
//         listcontainer.appendChild(li)
//         let span=document.createElement("span")
//         span.innerHTML="<i clas='for-trash'></i>"
//         li.appendChild(span)
//     }
//     inputbox.value="";
// }
// let input = document.querySelector("#input-box");
// let text = document.querySelector(".add-btn");

// function Add (){
//     if ( input.value === ""){
//         alert("Enter your task");
//     } else {
//         let newElement = document.createElement("ul");
//         newElement.innerHTML = `${input.value} <i for-trash"></i>`;
//         text.appendChild(newElement);
//         input.value = "";
//         newElement.querySelector("i").addEventListener("click" , remove)
//         function remove(){
//             newElement.remove();
//         }
//     }
// }
