window.addEventListener("DOMContentLoaded", function() {
    "use strict";

    
    // Modal

        let popupEngineerBtn = document.querySelectorAll(".popup_engineer_btn"),
            popupEngineer = document.querySelector(".popup_engineer"),
            closeBtn = document.querySelectorAll(".popup_engineer_close, .popup_close");
            //closeCallBtn = document.querySelector(".popup_close");


            popupEngineerBtn.forEach(function(e) {
                e.addEventListener("click", function() {
                    popupEngineer.style.display = "block";
                    document.body.style.overflow = "hidden";
                });
            });

            closeBtn.forEach(function(e) {
                e.addEventListener("click", function() {
                    popupEngineer.style.display = "none";
                    popupCall.style.display = "none";
                    document.body.style.overflow = "";
                });
            });


            window.addEventListener("click", function(e) {
                if (e.target == popupEngineer || e.target == popupCall) {
                    popupEngineer.style.display = "none";
                    popupCall.style.display = "none";
                    document.body.style.overflow = "";
                }
            });


        let phoneLinkBtn = document.querySelectorAll(".phone_link"),
            popupCall = document.querySelector(".popup");

            phoneLinkBtn.forEach(function(e) {
                e.addEventListener("click", function() {
                    popupCall.style.display = "block";
                    document.body.style.overflow = "hidden";
                });
            });

            setTimeout(function () {
                popupCall.style.display = "block";
                document.body.style.overflow = "hidden";
              }, 6000);

        //console.log(phoneLinkBtn);








});
