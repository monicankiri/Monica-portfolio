const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuToggle.addEventListener("click", function(){
   mainNav.classList.toggle("open");

   if (mainNav.classList.contains("open")) {
    menuToggle.textContent = "Close";
   } else {
    menuToggle.textContent ="Menu"
   }
   
});



