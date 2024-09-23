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
    
    