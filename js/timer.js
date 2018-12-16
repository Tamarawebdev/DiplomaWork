window.addEventListener("DOMContentLoaded", function() {
    "use strict";

    

  //Timer

  let deadLine = "2019-07-04";

  function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor((t / 1000) % 60),
          minutes = Math.floor((t / 1000 / 60) % 60),
          hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          days = Math.floor((t / (1000 * 60 * 60 * 24)));


          return {
              "total" : t,
              "days": days,
              "hours" : hours,
              "minutes" : minutes,
              "seconds" : seconds
          };

  }

  function setClock(id, endtime) {
      let timer = document.getElementById(id),
          hours = timer.querySelector("#hours"),
          minutes = timer.querySelector("#minutes"),
          seconds = timer.querySelector("#seconds"),
          days = timer.querySelector("#days"),
          timeInterval = setInterval(updateClock, 1000);
      
      function updateClock() {
          let t2 = getTimeRemaining(endtime);
          
          if (t2.days < 10) {
              days.textContent = "0" + t2.days;
          } else {
              days.textContent = t2.days;
          }

          if (t2.hours < 10) {
              hours.textContent = "0" + t2.hours;
          } else {
              hours.textContent = t2.hours;
          }

          if (t2.minutes < 10) {
              minutes.textContent = "0" + t2.minutes;
          } else {
              minutes.textContent = t2.minutes;
          }

          if (t2.seconds < 10) {
              seconds.textContent = "0" + t2.seconds;
          } else {
              seconds.textContent = t2.seconds;
          }

          if(t2.total <= 0) {
              days.textContent = "00";
              hours.textContent = "00";
              minutes.textContent = "00";
              seconds.textContent = "00";
              clearInterval(timeInterval);
          }
      }
  }

  setClock("timer", deadLine);

  

});