let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
if(menuList.style.maxHeight == "0px")
{
   menuList.style.maxHeight = "300px";
}
else{
 menuList.style.maxHeight = "0px";
   }
}



let container = document.getElementsByClassName("main");
let popup = document.getElementById("alertpopup");

function openPopup(){
   popup.classList.add("open-popup");
}

function closePopup(){
   popup.classList.remove("open-popup"); 
}

function opencloseMenu() {
const menu = document.querySelector('.html-tutorial-menu');
const icon = document.querySelector('.html-menu-toggle-btn i');

if (menu.style.display === 'none' || menu.style.display === '') {
menu.style.display = 'block';  // Show the menu
icon.classList.remove('fa-angle-down'); // Change to upward arrow
icon.classList.add('fa-angle-up');
} else {
menu.style.display = 'none';   // Hide the menu
icon.classList.remove('fa-angle-up'); // Change to downward arrow
icon.classList.add('fa-angle-down');
}
}

var homeDiv = document.querySelector(".html-home");
var introLink = document.querySelector(".html-intro-link");

// Add click event listener
homeDiv.addEventListener("click", function() {
introLink.click();
});

// Add keypress event listener for "Enter" or "Space"
homeDiv.addEventListener("keypress", function(event) {
if (event.key === "Enter" || event.key === " ") {
event.preventDefault();
introLink.click();
}
});