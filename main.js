const toggleMenu = document.querySelector("#toggle-menu");
const navList = document.querySelector("#nav-list")
const body = document.body;
const header = document.querySelector(".nav-bar")
const advice = document.querySelector(".advice")

toggleMenu.addEventListener("click", () => {
    navList.classList.toggle("visible");
    body.classList.toggle('no-scroll');
})

const cart = document.querySelector("#cart");
const openCart = document.querySelector("#open-cart");
const closeCart = document.querySelector("#close-cart")

openCart.addEventListener("click", () => {
    cart.classList.add("visibleCart");
    body.classList.add('no-scroll');
})

closeCart.addEventListener("click", () => {
    cart.classList.remove("visibleCart");
    body.classList.remove('no-scroll');
})