const toggleMenu = document.querySelector("#toggle-menu");
const navList = document.querySelector("#nav-list")
const body = document.body;
const header = document.querySelector(".nav-bar")
const advice = document.querySelector(".advice")

toggleMenu.addEventListener("click", () => {
    navList.classList.toggle("visible");
    body.classList.toggle("no-scroll");
})

document.addEventListener("click", (event) => {
    const isClickInsideMenu = navList.contains(event.target);
    const isClickOnToggleButton = toggleMenu.contains(event.target);
    const isClickInsideHeader = header.contains(event.target);
    const isClickInsideAdivce = advice.contains(event.target); 

    if (!isClickInsideMenu && !isClickOnToggleButton && !isClickInsideHeader && !isClickInsideAdivce && navList.classList.contains("visible")) {
        navList.classList.remove("visible");
        body.classList.remove("no-scroll");
    }
});