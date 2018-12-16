window.addEventListener("DOMContentLoaded", function() {
    "use strict";

    


    let imgOurWorks = document.querySelectorAll('img'),
        overlay = document.querySelector('.overlay');


        for (let i=0; i < imgOurWorks.length; i++)
        imgOurWorks[i].onclick = function() {
            return false;
    };


        imgOurWorks.forEach(function(e) {
            e.addEventListener("click", function() {
                overlay.style.display = "block";
            });
        });

  
    // console.log(imgOurWorks);



});