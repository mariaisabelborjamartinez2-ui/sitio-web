const products = [
  // 👗 VESTIDOS: 5 productos
  {
    id: 1,
    name: "Vestido Aurora",
    category: "vestidos",
    label: "Favorito 💖",
    price: 85000,
    sizes: "S, M, L",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 2,
    name: "Vestido Primavera",
    category: "vestidos",
    label: "Nuevo 🌸",
    price: 95000,
    sizes: "S, M, L, XL",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 3,
    name: "Vestido Elegance",
    category: "vestidos",
    label: "Elegante ✨",
    price: 110000,
    sizes: "S, M, L",
    image:  "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 4,
    name: "Vestido Tropical",
    category: "vestidos",
    label: "Colorido 🌺",
    price: 78000,
    sizes: "S, M, L, XL",
    image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 5,
    name: "Vestido Noche Chic",
    category: "vestidos",
    label: "Especial 💎",
    price: 125000,
    sizes: "S, M, L",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85"
  },

  // 🌸 FALDAS: 5 productos
  {
    id: 6,
    name: "Falda Serena",
    category: "faldas",
    label: "Tendencia 🌷",
    price: 65000,
    sizes: "S, M, L, XL",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 7,
    name: "Falda Plisada",
    category: "faldas",
    label: "Favorita 💕",
    price: 72000,
    sizes: "S, M, L",
    image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 8,
    name: "Falda Denim",
    category: "faldas",
    label: "Casual 💙",
    price: 68000,
    sizes: "6, 8, 10, 12",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 9,
    name: "Falda Floral",
    category: "faldas",
    label: "Romántica 🌼",
    price: 75000,
    sizes: "S, M, L, XL",
    image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 10,
    name: "Falda Elegante",
    category: "faldas",
    label: "Chic ✨",
    price: 82000,
    sizes: "S, M, L",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=700&q=85"
  },

  // 👚 CAMISETAS: 5 productos
  {
    id: 11,
    name: "Camiseta Esencial",
    category: "camisetas",
    label: "Básico 🤍",
    price: 42000,
    sizes: "S, M, L, XL",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 12,
    name: "Camiseta Color Pop",
    category: "camisetas",
    label: "Colorida 🌈",
    price: 45000,
    sizes: "S, M, L",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 13,
    name: "Blusa Romántica",
    category: "camisetas",
    label: "Linda 💗",
    price: 52000,
    sizes: "S, M, L, XL",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 14,
    name: "Camiseta Urban",
    category: "camisetas",
    label: "Urbana 🩷",
    price: 39000,
    sizes: "S, M, L, XL",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 15,
    name: "Blusa Elegance",
    category: "camisetas",
    label: "Elegante ✨",
    price: 58000,
    sizes: "S, M, L",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85"
  },

  // 👠 ZAPATOS: 5 productos
  {
    id: 16,
    name: "Tacones Chic",
    category: "zapatos",
    label: "Favoritos 👠",
    price: 135000,
    sizes: "35, 36, 37, 38, 39",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 17,
    name: "Sandalias Tropical",
    category: "zapatos",
    label: "Verano ☀️",
    price: 75000,
    sizes: "35, 36, 37, 38, 39",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 18,
    name: "Tenis Urbanos",
    category: "zapatos",
    label: "Casual 👟",
    price: 115000,
    sizes: "36, 37, 38, 39, 40",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 19,
    name: "Bailarinas Dulce",
    category: "zapatos",
    label: "Cómodos 💕",
    price: 68000,
    sizes: "35, 36, 37, 38, 39",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 20,
    name: "Sandalias Glam",
    category: "zapatos",
    label: "Especial ✨",
    price: 89000,
    sizes: "35, 36, 37, 38, 39",
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=700&q=85"
  }
];

// Número de WhatsApp de Moda y Estilo Génesis.
const WHATSAPP_NUMBER = "573045788735";

const productGrid = document.querySelector("#productGrid");
const catalogCount = document.querySelector("#catalogCount");
const filterButtons = document.querySelectorAll(".filter");

function formatPrice(price) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(price);
}

function createWhatsAppLink(product) {
  const message =
    `Hola, Moda y Estilo Génesis 💖. ` +
    `Me interesa el producto: ${product.name}. ` +
    `Precio publicado: ${formatPrice(product.price)}. ` +
    `Tallas de referencia: ${product.sizes}. ` +
    `¿Me confirman disponibilidad, colores y envío nacional?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderProducts(category = "todos") {
  const filtered = category === "todos"
    ? products
    : products.filter(product => product.category === category);

  catalogCount.textContent =
    `${filtered.length} productos para descubrir ✨`;

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x800/ffe0ef/9b397a?text=Moda+Genesis';"
        >
        <span class="product-tag">${product.label}</span>
      </div>

      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <div class="product-price">${formatPrice(product.price)}</div>
        <p class="product-sizes">
          Tallas de referencia: ${product.sizes}
        </p>
        <a class="product-buy"
           href="${createWhatsAppLink(product)}"
           target="_blank"
           rel="noopener noreferrer">
          💬 Consultar por WhatsApp
        </a>
      </div>
    </article>
  `).join("");
}

// Filtrar por categoría.
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.category);
  });
});

// Menú para celulares.
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Cerrar menú" : "Abrir menú"
  );
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Año automático en el pie de página.
document.querySelector("#year").textContent =
  new Date().getFullYear();

// Cargar todos los productos al abrir la tienda.
renderProducts();