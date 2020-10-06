"use strict"

/* FRONTPAGE PICTURE */

function fadeOverlay(nr) {
     document.querySelector(`#piece-${nr}`).addEventListener("mouseover", function () {
          document.querySelector(`#purple-container-${nr}`).classList.add("showOverlay");
          document.querySelector(`#info-${nr}`).style.display = "block";
          // console.log("works");
     });
     document.querySelector(`#piece-${nr}`).addEventListener("mouseout", function () {
          document.querySelector(`#purple-container-${nr}`).classList.remove("showOverlay");
          document.querySelector(`#info-${nr}`).style.display = "none";
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
     document.querySelector(`#info-${nr}`).style.display = "block";
}

function hideStuff(nr) {
     document.querySelector(`#purple-container-${nr}`).classList.remove("showOverlay");
     document.querySelector(`#info-${nr}`).style.display = "none";
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

// here I tried to make it stop when you hover on it but it doesn't work :'(

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

window.addEventListener('load', function () {

     shape.style.clipPath = `polygon(0 50%, 0 100%, 50% 100%)`;
})

window.addEventListener('scroll', function () {

     let value = 50;
     value = value - window.scrollY;
     // console.log(value);
     shape.style.clipPath = `polygon(0 50%, 0 100%, ${value}% 100%)`;
})


window.addEventListener('scroll', function () {

     let value = 40;
     value = value - (window.scrollY / 100);
     // console.log(value2);
     console.log(window.scrollY);
     shape2.style.clipPath = `polygon(0 ${value}%, 100% ${value}%, 100% 100%, 0% 100%)`;
})

window.addEventListener('scroll', function () {
     if (window.scrollY > 496) {
          document.querySelector("#menu").classList.add("white");
          document.querySelector("#about-line").style.backgroundColor = "#FAFAFA";
          document.querySelector("#projects-line").style.backgroundColor = "#FAFAFA";
     } else {
          document.querySelector("#menu").classList.remove("white");
          document.querySelector("#about-line").style.backgroundColor = "#333333";
          document.querySelector("#projects-line").style.backgroundColor = "#333333";
     }
     if (window.scrollY > 675) {
          document.querySelector("#logo").classList.add("whitelogo");
     } else {
          document.querySelector("#logo").classList.remove("whitelogo");
     }
})

/* NAVIGATION MENU */

let about = document.querySelector("#menu-about");
let projects = document.querySelector("#menu-projects");
let aboutPage = document.querySelector("#frontpage");
let projectsPage = document.querySelector("#projects-container");
let aboutLine = document.querySelector("#about-line");
let projectsLine = document.querySelector("#projects-line");

window.addEventListener('load', function () {

     about.style.transform = "translateX(20%)";
})

function elVisible(el) {
     return (el.getBoundingClientRect().top + 500 >= 0 && el.getBoundingClientRect().bottom - 500 < window.innerHeight);
}

function aboutButton() {

     if (elVisible(aboutPage)) {
          aboutLine.style.display = "block";
          about.style.transform = "translateX(20%)";
     } else {
          aboutLine.style.display = "none";
          about.style.transform = "translateX(0)";
     }
}

function projectsButton() {
     if (elVisible(projectsPage)) {
          projectsLine.style.opacity = "1";
          projects.style.transform = "translateX(20%)";
     } else {
          projectsLine.style.opacity = "0";
          projects.style.transform = "translateX(0)";
     }
}

window.addEventListener('scroll', aboutButton);
window.addEventListener('scroll', projectsButton);

let projectList = document.querySelector("#project-list");

function showProjectList() {
     if (elVisible(projectsPage)) {
          projectList.style.opacity = "1";
          console.log("whwa");
     } else {
          projectList.style.opacity = "0";
     }
}

window.addEventListener('scroll', showProjectList);