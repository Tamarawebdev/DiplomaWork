window.addEventListener("DOMContentLoaded", function() {
    "use strict";

    
    // Form
    let message = {
        loading: "Loading...",
        success: "Thank you, we will contact you soon!",
        failure: "Something went wrong..."
    };

    let form = document.querySelector(".main_form"),
        input = form.getElementsByTagName("input"),
        contactForm = document.querySelector('.form'),
        inputContact = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement("div");

        statusMessage.classList.add("status");


   function sendForm(elem, a) {
       elem.addEventListener("submit", function (event) {
           event.preventDefault();
           elem.appendChild(statusMessage);
           let myRequest = new XMLHttpRequest();
           myRequest.open("POST", "server.php");
           myRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

           let formData = new FormData(elem);

           myRequest.send(formData);

           myRequest.addEventListener("readystatechange", function () {
               if (myRequest.readyState < 4) {
                   statusMessage.innerHTML = message.loading;
               } else if (myRequest.readyState === 4 && myRequest.status == 200) {
                   statusMessage.innerHTML = message.success;
               } else {
                   statusMessage.innerHTML = message.failure;
               }
           });

           for (let i = 0; i < a.length; i++) {
               a[i].value = "";
           }
       });
   }

   sendForm(form, input);
   sendForm(contactForm, inputContact);

   let phone = document.querySelectorAll('[name="user_phone"]');

   for (let i = 0; i < phone.length; i++) {
       phone[i].addEventListener('input', function () {
            phone[i].value = phone[i].value.replace(/[^0-9]/g, "");
       });
   }

  



});