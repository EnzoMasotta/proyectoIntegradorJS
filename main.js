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
const closeCart = document.querySelector("#close-cart");
const overley = document.querySelector("#overley")

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
    overley.classList.add("visibleOverley")
    lockScroll(); 

    if (navList.classList.contains("visible")) {
        navList.classList.remove("visible");
        body.classList.remove('no-scroll');
    }
});

// Cerrar el carrito
closeCart.addEventListener("click", () => {
    cart.classList.remove("visibleCart");
    overley.classList.remove("visibleOverley")
    unlockScroll();  
});

body.addEventListener("click", (event) => {
    // Verifica si el clic fue afuera del carrito y no en el botón de abrir
    if (cart.classList.contains("visibleCart") && !cart.contains(event.target) && event.target !== openCart) {
        cart.classList.remove("visibleCart");
        overley.classList.remove("visibleOverley")
        unlockScroll(); // Desbloquea el scroll
    }
});

//Array de productos
const products = [
    {
        id: 1,                      
        nombre: 'Remera basic',                   
        categoria: 'Remeras',         
        precio: 4500,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Remera_Basic1.webp',     
    },
];

function renderizarProductos() {
    const container = document.querySelector('.products-imgs');

    // Limpiar contenido previo
    container.innerHTML = '';

    products.forEach(product => {
        container.innerHTML += `
            <div class="producto">
                <img src="${product.imagen}" alt="${product.nombre}" style="width:100px;height:100px;">
                <h3>${product.nombre}</h3>
                <p>Precio: $${product.precio}</p>
                <p>Stock: ${product.stock} unidades</p>
            </div>
        `;
    });
}

renderizarProductos();



