// let close = document.getElementById("close");
// let sidebar = document.querySelector(".sidebar");

// close.addEventListener("click", function() {
//     sidebar.classList.add("closed")
// })

// let open = document.getElementById("open");

// open.addEventListener("click", function() {
//     sidebar.classList.remove("closed");
// })

// let number = document.getElementById("number");
// let addList = document.getElementById("addList");
// let parentLi = document.querySelector("#parentLi");

// number.addEventListener("keyup", function(e) {
//     if (e.keyCode == 13) {
//         parentLi.innerHTML = "";
//         for (let i = 1; i <= number.value; i++) {
//             //create li element
//             let li = document.createElement("li");
//             li.className = "list-group-item";
//             li.innerText = i;
//             //create close icon
//             let itag = document.createElement("i");
//             itag.className = "fas fa-times";
//             //Add event listener
//             itag.addEventListener("click", function() {
//                 this.parentNode.remove();
//             })

//             //Append child
//             li.append(itag);
//             parentLi.append(li);
//         }
//         number.value = "";
//     }
// })

// let icons = document.querySelectorAll(".fa-times");
// for (x of icons) {
//     x.addEventListener("click", function() {
//         alert("icon")
//     })
// }



// icon.addEventListener("click", function() {
//     alert("icon")
// })

// addList.addEventListener("click", function(e) {
//     parentLi.innerHTML = "";
//     for (let i = 1; i <= number.value; i++) {
//         let li = document.createElement("li");
//         li.className = "list-group-item";
//         li.innerText = i;
//         parentLi.append(li);
//     }
//     number.value = "";
// })


let centerLi = document.querySelector(".centerLi");
centerLi.setAttribute("id", "umbulnise");
centerLi.removeAttribute("class")
console.log()