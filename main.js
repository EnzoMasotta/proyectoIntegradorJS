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
        nombre: 'Remeron oversize',                   
        categoria: 'Remeras',         
        precio: 4500,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Remeron_Oversize1.webp',     
    },
    {
        id: 2,                      
        nombre: 'Remera oversize',                   
        categoria: 'Remeras',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Remera_Oversize2.webp', 
    },
    {
        id: 3,                      
        nombre: 'Remera regular fit',                   
        categoria: 'Remeras',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Remera_Regular_Fit3.webp', 
    },
    {
        id: 4,                      
        nombre: 'Hoodie oversize frisado',                   
        categoria: 'Buzos',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Hoodie_Oversize_Frisado1.webp', 
    },
    {
        id: 5,                      
        nombre: 'Hoodie oversize',                   
        categoria: 'Buzos',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Hoodie_Oversize2.webp', 
    },
    {
        id: 6,                      
        nombre: 'Hoodie soft frisado',                   
        categoria: 'Buzos',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Hoodie_Super_Soft_Frisado3.webp', 
    },
    {
        id: 7,                      
        nombre: 'Canguro frisado',                   
        categoria: 'Buzos',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Canguro_Frisado4.webp', 
    },
    {
        id: 8,                      
        nombre: 'Jogger regular frisado',                   
        categoria: 'Pantalones',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Jogger_Regular_Frisado1.webp', 
    },
    {
        id: 9,                      
        nombre: 'Jogger soft frisado',                   
        categoria: 'Pantalones',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Jogger_Regular_Super_Soft_Frisado2.webp', 
    },
    {
        id: 10,                      
        nombre: 'Regular pants',                   
        categoria: 'Pantalones',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Regular_Pants3.webp', 
    }
];

function renderizarProductos() {
    const container = document.querySelector('.products-cards');

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.justifyContent = 'center';
    container.style.AlingItems = 'center';

    // Limpiar contenido previo
    container.innerHTML = '';

    products.forEach(product => {
        container.innerHTML += `
            <div class="productos">
                <div>
                    <img src="${product.imagen}" alt="${product.nombre}" style="width:150px;height:250px;">
                    <h3 style="font-size:15px;">${product.nombre}</h3>
                    <p>$${product.precio}</p>
                </div>            
            </div>
        `;
    });
}

renderizarProductos();



