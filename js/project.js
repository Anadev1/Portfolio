let projects = document.querySelector("#menu-projects");
let projectsLine = document.querySelector("#projects-line");
let shape2 = document.querySelector("#shape2");
let projectList = document.querySelector("#project-list");

window.addEventListener('load', function () {
     projects.style.transform = "translateX(20%)";
     projectsLine.style.opacity = "1";
     shape2.style.clipPath = `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`;
     document.querySelector("#logo").classList.add("whitelogo");
     document.querySelector("#projects-line").style.backgroundColor = "#FAFAFA";
     document.querySelector("#menu").classList.add("white");
     projectList.style.opacity = "1";
})