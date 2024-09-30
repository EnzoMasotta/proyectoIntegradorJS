const toggleMenu = document.querySelector("#toggle-menu");
const navList = document.querySelector("#nav-list")
const body = document.body;

toggleMenu.addEventListener("click", () => {
    navList.classList.toggle("visible");
    body.classList.toggle("no-scroll");
})