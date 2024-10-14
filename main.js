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
const cartContainer = document.querySelector("#cart");
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
    cartContainer.classList.add("visibleCart");
    overley.classList.add("visibleOverley")
    lockScroll(); 

    if (navList.classList.contains("visible")) {
        navList.classList.remove("visible");
        body.classList.remove('no-scroll');
    }
});

// Cerrar el carrito
closeCart.addEventListener("click", () => {
    cartContainer.classList.remove("visibleCart");
    overley.classList.remove("visibleOverley")
    unlockScroll();  
});

body.addEventListener("click", (event) => {
    // Verifica si el clic fue afuera del carrito y no en el botón de abrir
    if (cartContainer.classList.contains("visibleCart") && !cartContainer.contains(event.target) && event.target !== openCart) {
        cartContainer.classList.remove("visibleCart");
        overley.classList.remove("visibleOverley")
        unlockScroll(); // Desbloquea el scroll
    }
});

//Array de productos
const products = [
    {
        id: 1,                      
        nombre: 'Remeron oversize',                   
        categoria: 'remeras',         
        precio: 4500,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Remeron_Oversize1.webp',     
    },
    {
        id: 2,                      
        nombre: 'Remera oversize',                   
        categoria: 'remeras',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Remera_Oversize2.webp', 
    },
    {
        id: 3,                      
        nombre: 'Remera regular fit',                   
        categoria: 'remeras',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Remera_Regular_Fit3.webp', 
    },
    {
        id: 4,                      
        nombre: 'Hoodie oversize frisado',                   
        categoria: 'buzos',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Buzo_Oversize_Frisado1.webp', 
    },
    {
        id: 5,                      
        nombre: 'Hoodie oversize',                   
        categoria: 'buzos',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Hoodie_Oversize2.webp', 
    },
    {
        id: 6,                      
        nombre: 'Hoodie soft frisado',                   
        categoria: 'buzos',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Hoodie_Super_Soft_Frisado3.webp', 
    },
    {
        id: 7,                      
        nombre: 'Canguro frisado',                   
        categoria: 'buzos',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Canguro_Frisado4.webp', 
    },
    {
        id: 8,                      
        nombre: 'Jogger regular frisado',                   
        categoria: 'pantalones',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Jogger_Regular_Frisado1.webp', 
    },
    {
        id: 9,                      
        nombre: 'Jogger soft frisado',                   
        categoria: 'pantalones',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Jogger_Regular_Super_Soft_Frisado2.webp', 
    },
    {
        id: 10,                      
        nombre: 'Regular pants',                   
        categoria: 'pantalones',         
        precio: 5000,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Regular_Pants3.webp', 
    }
];

let cart = [];

// Añadir evento a cada botón "Comprar"
const addProductToCart = (product) => {
    // Añadir el producto al carrito (si ya existe, simplemente aumenta la cantidad)
    const productInCart = cart.find(item => item.id === product.id);
    
    if (productInCart) {
        productInCart.cantidad += 1;
    } else {
        cart.push({ ...product, cantidad: 1 });
    }

    // Llamar a la función que actualiza la vista del carrito
    renderCart();
};

// Renderizar productos en el carrito
const renderCart = () => {
    const cartProductsList = document.querySelector(".cart-products-list");

    cartProductsList.innerHTML = ""; // Limpiar el carrito antes de renderizar

    cart.forEach(product => {
        const div = document.createElement("div");
        div.className = 'cart-product-card';
        div.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}">
            <p>${product.nombre}</p>
            <p>Cantidad: ${product.cantidad}</p>
        `;
        cartProductsList.append(div);
    });
};


//Renderizacion de los productos
const displayProducts = (productList) => {
    const productsCards = document.querySelector(".products-cards");

    productsCards.innerHTML = ""

    productList.forEach(product => {
        const div = document.createElement("div");
        div.className = 'card'
        div.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}">
            <p>${product.nombre}</p>
            <p class="price">$${product.precio}</p>
            <button class="addToCart" type="button">Comprar</button>
        `

        div.querySelector(".addToCart").addEventListener("click", () => {
            addProductToCart(product);
        });

        productsCards.append(div);
    });

    
}

//Filtro
const filterProducts = (categoria) => {
    const productToShow = products.filter(product => product.categoria === categoria);
    displayProducts(productToShow);
}
//Botones 
const todoBtn = document.getElementById("todoBtn");
const remerasBtn = document.getElementById("remerasBtn");
const pantalonesBtn = document.getElementById("pantalonesBtn");
const buzosBtn = document.getElementById("buzosBtn");

//Funciones de los botones

todoBtn.addEventListener('click', () => {
    displayProducts(products);
});

remerasBtn.addEventListener('click', () => {
    filterProducts('remeras');
});

pantalonesBtn.addEventListener('click', () => {
    filterProducts('pantalones');
});

buzosBtn.addEventListener('click', () => {
    filterProducts('buzos');
});

displayProducts(products);




