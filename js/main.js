"use strict"

function fadeOverlay(nr) {
     document.querySelector(`#purple-container-${nr}`).addEventListener("mouseover", function () {
          document.querySelector(`#purple-container-${nr}`).classList.add("showOverlay");
          // console.log("works");
     });
     document.querySelector(`#purple-container-${nr}`).addEventListener("mouseout", function () {
          document.querySelector(`#purple-container-${nr}`).classList.remove("showOverlay");
          // console.log("works again");
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
     // console.log("something");
}

let wow;

let _mouse;

function mouseStatus(status) {
     _mouse = status;
     // console.log(_mouse);
}

mouseStatus();

setTimeout(repeatFunction, 1000, 1);
setTimeout(repeatFunction, 4500, 2);
setTimeout(repeatFunction, 8000, 3);
setTimeout(repeatFunction, 11500, 4);
setTimeout(repeatFunction, 15000, 5);

wow = setInterval(() => {
     setTimeout(repeatFunction, 1000, 1);
     setTimeout(repeatFunction, 4500, 2);
     setTimeout(repeatFunction, 8000, 3);
     setTimeout(repeatFunction, 11500, 4);
     setTimeout(repeatFunction, 15000, 5);

}, 18500);

// function togglePhoto() {
//      if (_mouse) {
//           clearInterval(wow);
//      } else {
//           wow = setInterval(() => {
//                setTimeout(repeatFunction, 1000, 1);
//                setTimeout(repeatFunction, 4500, 2);
//                setTimeout(repeatFunction, 8000, 3);
//                setTimeout(repeatFunction, 11500, 4);
//                setTimeout(repeatFunction, 15000, 5);

//           }, 18500);
//      }
// }

// togglePhoto();

/* NAVIGATION */

let shape = document.querySelector("#shape");
let shape2 = document.querySelector("#shape2");

window.addEventListener('scroll', function () {
     let value = 50;
     value = value - (window.scrollY / 10);
     // console.log(value);
     shape.style.clipPath = `polygon(0 50%, 0 100%, ${value}% 100%)`;
})

window.addEventListener('scroll', function () {
     let value2 = 50;
     value2 = value2 - (window.scrollY / 10);
     // console.log(value2);
     console.log(window.scrollY);
     shape2.style.clipPath = `polygon(0 ${value2}%, 100% ${value2}%, 100% 100%, 0% 100%)`;
})

window.addEventListener('scroll', function () {
     if (window.scrollY > 190) {
          document.querySelector("#menu").classList.add("white");
     } else {
          document.querySelector("#menu").classList.remove("white");
     }
     if (window.scrollY >= 285) {
          document.querySelector("#logo").classList.add("whitelogo");
     } else {
          document.querySelector("#logo").classList.remove("whitelogo");
     }
})