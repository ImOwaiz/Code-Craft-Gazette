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


         let currentSlide = 0;
         let slideWidth = document.querySelector('.slider .card').offsetWidth;
         const slider = document.querySelector('.slider');
         const totalCards = document.querySelectorAll('.slider .card').length;
         
         function moveSlide() {
           currentSlide++;
           
           // If we've reached the end of the slider, go back to the start
           if (currentSlide >= totalCards) {
             currentSlide = 0; 
             slider.style.transition = 'none'; // Disable transition to make the loop smooth
             slider.style.transform = `translateX(0)`; // Jump to the start
           } else {
             slider.style.transition = 'transform 0.5s linear';
             const offset = currentSlide * -slideWidth;
             slider.style.transform = `translateX(${offset}px)`;
           }
         }
         
         // Adjust the slider size on window resize
         window.addEventListener('resize', () => {
           slideWidth = document.querySelector('.slider .card').offsetWidth;
         });
         
         // Move the slider every 2 seconds
         setInterval(moveSlide, 3000);
         