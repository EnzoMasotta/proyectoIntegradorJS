//Menu responsive
const toggleMenu = document.querySelector("#toggle-menu");
const navList = document.querySelector("#nav-list")
const body = document.body;
const header = document.querySelector(".nav-bar")
const advice = document.querySelector(".advice")

toggleMenu.addEventListener("click", () => {
    navList.classList.toggle("visible");
    body.classList.toggle('no-scroll');
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
        precio: 5000,                 
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
        precio: 7500,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Buzo_Oversize_Frisado1.webp', 
    },
    {
        id: 5,                      
        nombre: 'Hoodie oversize',                   
        categoria: 'buzos',         
        precio: 7500,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Hoodie_Oversize2.webp', 
    },
    {
        id: 6,                      
        nombre: 'Hoodie soft frisado',                   
        categoria: 'buzos',         
        precio: 7500,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Hoodie_Super_Soft_Frisado3.webp', 
    },
    {
        id: 7,                      
        nombre: 'Canguro frisado',                   
        categoria: 'buzos',         
        precio: 7500,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Canguro_Frisado4.webp', 
    },
    {
        id: 8,                      
        nombre: 'Jogger regular frisado',                   
        categoria: 'pantalones',         
        precio: 6200,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Jogger_Regular_Frisado1.webp', 
    },
    {
        id: 9,                      
        nombre: 'Jogger soft frisado',                   
        categoria: 'pantalones',         
        precio: 6200,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Jogger_Regular_Super_Soft_Frisado2.webp', 
    },
    {
        id: 10,                      
        nombre: 'Regular pants',                   
        categoria: 'pantalones',         
        precio: 6200,                 
        stock: 50,                   
        cantidad: 0,                 
        imagen: 'Assets/Regular_Pants3.webp', 
    }
];

// Variables globales
let cart = [];

// Funciones de localStorage
const saveCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
        renderCart();  // Renderiza el carrito con los productos recuperados
        updateCartQuantity(); // Actualiza la cantidad en el indicador
    }
};

// Funciones de carrito
const addProductToCart = (product) => {
    const productInCart = cart.find(item => item.id === product.id);
    
    if (productInCart) {
        productInCart.cantidad += 1; 
    } else {
        cart.push({ ...product, cantidad: 1 });
    }

    updateCartQuantity();
    renderCart();
    saveCartToLocalStorage();
};

const removeProductFromCart = (productId) => {
    cart = cart.filter(product => product.id !== productId); 
    updateCartQuantity();
    renderCart();
    saveCartToLocalStorage();
};

const calculateSubtotal = (product) => {
    return product.precio * product.cantidad;
};

// Función para actualizar la cantidad total de productos
const updateCartQuantity = () => {
    const totalQuantity = cart.reduce((sum, product) => sum + product.cantidad, 0);
    const quantityOfProducts = document.querySelector(".cart-quantity");

    quantityOfProducts.textContent = totalQuantity;
    if (totalQuantity > 0) {
        quantityOfProducts.classList.add("visibleDiv");
    } else {
        quantityOfProducts.classList.remove("visibleDiv");
    }
};

// Renderizado del carrito
const renderCart = () => {
    const cartProductsList = document.querySelector(".cart-products-list");
    cartProductsList.innerHTML = "";

    if (cart.length === 0) {
        cartProductsList.innerHTML = "<p>Carrito vacío.</p>"; 
        return; 
    }

    let total = 0; 

    cart.forEach(product => {
        const div = document.createElement("div");
        div.className = 'cart-product-card';

        const subtotal = calculateSubtotal(product);
        total += subtotal;

        div.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}">
            <div class="product-card-cart-right-section">
                <div>
                    <p>${product.nombre}</p>
                    <p>Precio unitario: $${product.precio}</p>
                    <p>Cantidad: ${product.cantidad}</p>
                    <p>Subtotal: $${subtotal}</p>
                </div>
                <a class="delete-button">Eliminar producto</a>
            </div>
        `;

        div.querySelector(".delete-button").addEventListener("click", () => {
            removeProductFromCart(product.id); 
        });

        cartProductsList.append(div);
    });

    // Mostrar el total
    const totalDiv = document.createElement("div");
    totalDiv.className = "cart-total";
    totalDiv.textContent = `Total: $${total}`;
    cartProductsList.appendChild(totalDiv);

    // Botón de comprar
    const button = document.createElement("button");
    button.className = "buy-button";
    button.type = "button";
    button.textContent = "Comprar";
    cartProductsList.appendChild(button);
};

// Renderizado de productos en el sitio
const displayProducts = (productList) => {
    const productsCards = document.querySelector(".products-cards");

    productsCards.innerHTML = "";

    productList.forEach(product => {
        const div = document.createElement("div");
        div.className = 'card';
        div.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}">
            <p>${product.nombre}</p>
            <p class="price">$${product.precio}</p>
            <button class="addToCart" type="button">Comprar</button>
        `;

        div.querySelector(".addToCart").addEventListener("click", () => {
            addProductToCart(product);
        });

        productsCards.append(div);
    });
};

// Filtro de categorías y botones de categorías
const filterProducts = (categoria) => {
    const productToShow = products.filter(product => product.categoria === categoria);
    displayProducts(productToShow);
};

const todoBtn = document.getElementById("todoBtn");
const remerasBtn = document.getElementById("remerasBtn");
const pantalonesBtn = document.getElementById("pantalonesBtn");
const buzosBtn = document.getElementById("buzosBtn");

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

// Inicialización de la página
displayProducts(products);
loadCartFromLocalStorage();
renderCart();
