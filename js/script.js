window.addEventListener("DOMContentLoaded", function() {
    "use strict";


    
    // Modal

        let popupEngineerBtn = document.querySelectorAll(".popup_engineer_btn"),
            popupEngineer = document.querySelector(".popup_engineer"),
            closeBtn = document.querySelector(".popup_engineer_close");


            popupEngineerBtn.forEach(function(e) {
                e.addEventListener("click", function() {
                    popupEngineer.style.display = "block";
                    document.body.style.overflow = "hidden";
                });
            });

            closeBtn.addEventListener("click", function(e) {
                popupEngineer.style.display = "none";
            });


            window.addEventListener("click", function(e) {
                if (e.target == popupEngineer) {
                    popupEngineer.style.display = "none";
                }
            });


        let phoneLinkBtn = document.querySelector(".phone_link"),
            popupCall = document.querySelector(".popup"),
            closeCallBtn = document.querySelector(".popup_close");

            phoneLinkBtn.addEventListener("click", function() {
                popupCall.style.display = "block";
                document.body.style.overflow = "hidden";
            });

            closeCallBtn.addEventListener("click", function(e) {
                popupCall.style.display = "none";
            });

            window.addEventListener("click", function(e) {
                if (e.target == popupCall) {
                    popupCall.style.display = "none";
                }
            });


        console.log(closeBtn);








});
