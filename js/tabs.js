window.addEventListener("DOMContentLoaded", function() {
    "use strict";

    
    let tabDecoSlider = document.querySelector(".decoration_slider"),
        tabDecoItem = document.querySelectorAll(".no_click"),
        tabDecoContent = document.querySelectorAll(".decoration_content");



        tabDecoSlider.addEventListener("click", function(e) {
            // console.log(e);
            let dataTab = (e.target.getAttribute("data-tab"));

            for (let i = 0; i < tabDecoItem.length; i++) {
                if (dataTab == i) {
                    tabDecoItem[i].classList.add("after_click");
                } else {
                    tabDecoItem[i].classList.remove("after_click");
                }
            }
        });

        
        // tabDecoSlider.addEventListener("click", function(e) {
        //     for (let i = 0; i < tabDecoItem.length; i++) {                  
        //         if (tabDecoItem !== i) {
        //             tabDecoItem[i].classList.add("after_click");
        //            } else if (tabDecoItem == i) {
        //             tabDecoItem[i].classList.remove("after_click");
        //          }
        //     }
        // });


  
    // console.log(tabDecoContent);



});