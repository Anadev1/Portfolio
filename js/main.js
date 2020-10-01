"use strict"

function fadeOverlay(nr) {
     document.querySelector(`#purple-container-${nr}`).addEventListener("mouseover", function () {
          document.querySelector(`#purple-container-${nr}`).classList.add("showOverlay");
          console.log("works");
     });
     document.querySelector(`#purple-container-${nr}`).addEventListener("mouseout", function () {
          document.querySelector(`#purple-container-${nr}`).classList.remove("showOverlay");
          console.log("works again");
     });
}

fadeOverlay(1);
fadeOverlay(2);
fadeOverlay(3);
fadeOverlay(4);
fadeOverlay(5);

function showStuff(nr) {
     document.querySelector(`#purple-container-${nr}`).classList.add("showOverlay");
}

function hideStuff(nr) {
     document.querySelector(`#purple-container-${nr}`).classList.remove("showOverlay");
}

let repeatFunction = function (nr) {
     showStuff(nr);
     setTimeout(hideStuff, 3000, nr);
     console.log("something");
}

// setInterval(plsWork(1), 20000);
// setInterval(plsWork(2), 15000);
// setInterval(plsWork(3), 10000);
// setInterval(plsWork(4), 5000);

let _mouse = false;

function mouseStatus(status) {
     _mouse = status;
     console.log(_mouse);
}

mouseStatus();

setTimeout(repeatFunction, 1000, 1);
setTimeout(repeatFunction, 4500, 2);
setTimeout(repeatFunction, 8000, 3);
setTimeout(repeatFunction, 11500, 4);
setTimeout(repeatFunction, 15000, 5);







let wow = setInterval(() => {
     setTimeout(repeatFunction, 1000, 1);
     setTimeout(repeatFunction, 4500, 2);
     setTimeout(repeatFunction, 8000, 3);
     setTimeout(repeatFunction, 11500, 4);
     setTimeout(repeatFunction, 15000, 5);

}, 18500);

// function togglePhoto() {

// }

// togglePhoto();