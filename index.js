var coll = document.getElementsByClassName("collapsible");
var i;
var card = document.getElementsByClassName("card");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.previousElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      
    }
  });
}

var coll = document.getElementsByClassName("collapsible1");
var i;
var card = document.getElementsByClassName("card1");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active1");
    var content = this.previousElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      
    }
  });
}

// //offcanvas
// function closeOffcanvas(){
//   offcanvas.style.width = "0px";
// }
// var offcanvas = document.getElementById("offcanvas");
// function openOffcanvas() {
//     offcanvas.style.width = "250px";

// }
var Offcanvas = document.getElementById("offcanvas1");

function openOffcanvas() {
  Offcanvas.style.width = "250px";
  
}

function closeOffcanvas() {
  Offcanvas.style.width = "0px";
  
}