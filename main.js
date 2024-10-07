//Menu responsive
const toggleMenu = document.querySelector("#toggle-menu");
const navList = document.querySelector("#nav-list")
const body = document.body;
const header = document.querySelector(".nav-bar")
const advice = document.querySelector(".advice")

toggleMenu.addEventListener("click", () => {
    navList.classList.toggle("visible");
    body.classList.toggle('no-scroll');

    if (cart.classList.contains("visibleCart")) {
        cart.classList.remove("visibleCart");
        body.classList.remove('no-scroll');
    }
})

//Carrito
const cart = document.querySelector("#cart");
const openCart = document.querySelector("#open-cart");
const closeCart = document.querySelector("#close-cart")

function lockScroll() {
    
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.paddingRight = `${scrollBarWidth}px`;
    body.style.overflow = 'hidden';
}

// Funcion para desbloquear el scroll y restaurar el margen
function unlockScroll() {
    body.style.paddingRight = '';
    body.style.overflow = '';
}

// Abrir el carrito
openCart.addEventListener("click", () => {
    event.stopPropagation();
    cart.classList.add("visibleCart");
    lockScroll(); 

    if (navList.classList.contains("visible")) {
        navList.classList.remove("visible");
        body.classList.remove('no-scroll');
    }
});

// Cerrar el carrito
closeCart.addEventListener("click", () => {
    cart.classList.remove("visibleCart");
    unlockScroll();  
});

body.addEventListener("click", (event) => {
    // Verifica si el clic fue fuera del carrito y no en el botón de abrir
    if (cart.classList.contains("visibleCart") && !cart.contains(event.target) && event.target !== openCart) {
        cart.classList.remove("visibleCart");
        unlockScroll(); // Desbloquea el scroll
    }
});

