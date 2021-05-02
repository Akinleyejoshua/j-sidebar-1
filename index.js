var menuButton = document.querySelector("#menu");
var sideBar = document.querySelector("#side-bar");
var closeBtn = document.querySelector("#close-btn");

menuButton.addEventListener('click', (event) => {
    sideBar.style.width = "200px";
});

closeBtn.addEventListener('click', (event) => {
    sideBar.style.width = "0";
});

