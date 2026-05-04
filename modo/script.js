const DELIVERY_FEE = 100;
const WHATSAPP_NUMBER = "201220597999";

let currentLang = "en";
let cart = {};
let lastClickedButton = null;

const products = [
  {
    id: "smart",
    price: 550,
    image: "smart-wallet.jpg",
    en: {
      name: "Modo Smart Wallet",
      badge: "Smart",
      desc: "A smart wallet made from 100% natural Egyptian leather. This model is not RFID.",
      features: [
        "100% natural Egyptian leather",
        "Bluetooth connection",
        "Lost location support",
        "Out-of-range phone alert",
        "Alarm sound to find wallet",
        "iSearching app on iOS & Android",
        "Not RFID"
      ]
    },
    ar: {
      name: "محفظة مودو الذكية",
      badge: "ذكية",
      desc: "محفظة ذكية مصنوعة من جلد مصري طبيعي 100%. هذا الموديل ليس RFID.",
      features: [
        "جلد مصري طبيعي 100%",
        "اتصال بلوتوث",
        "دعم آخر موقع للمحفظة",
        "تنبيه على الهاتف عند الخروج من النطاق",
        "صوت إنذار للعثور على المحفظة",
        "تطبيق iSearching على iOS و Android",
        "ليست RFID"
      ]
    }
  },
  {
    id: "classic",
    price: 370,
    image: "classic-wallet.jpg",
    en: {
      name: "Modo Classic Wallet",
      badge: "Classic",
      desc: "A classic wallet made from 100% natural Egyptian leather with a clean elegant design.",
      features: [
        "100% natural Egyptian leather",
        "Classic elegant design",
        "Comfortable daily use",
        "Premium stitching",
        "Professional appearance",
        "Not RFID"
      ]
    },
    ar: {
      name: "محفظة مودو الكلاسيك",
      badge: "كلاسيك",
      desc: "محفظة كلاسيكية مصنوعة من جلد مصري طبيعي 100% بتصميم أنيق وعملي.",
      features: [
        "جلد مصري طبيعي 100%",
        "تصميم كلاسيكي أنيق",
        "مناسبة للاستخدام اليومي",
        "خياطة عالية الجودة",
        "مظهر احترافي",
        "ليست RFID"
      ]
    }
  },
  {
    id: "premium",
    price: 1500,
    image: "premium-wallet.jpg",
    en: {
      name: "Modo Premium Wallet",
      badge: "Premium",
      desc: "A premium smart wallet made from 100% natural Egyptian leather with advanced finding features. This model is not RFID.",
      features: [
        "100% natural Egyptian leather",
        "Luxury premium finish",
        "Bluetooth connection",
        "Lost location support",
        "Out-of-range phone alert",
        "Alarm sound to find wallet",
        "iSearching app on iOS & Android",
        "Not RFID"
      ]
    },
    ar: {
      name: "محفظة مودو البريميوم",
      badge: "بريميوم",
      desc: "محفظة بريميوم ذكية مصنوعة من جلد مصري طبيعي 100% مع مميزات متقدمة للعثور عليها. هذا الموديل ليس RFID.",
      features: [
        "جلد مصري طبيعي 100%",
        "تشطيب فاخر",
        "اتصال بلوتوث",
        "دعم آخر موقع للمحفظة",
        "تنبيه على الهاتف عند الخروج من النطاق",
        "صوت إنذار للعثور على المحفظة",
        "تطبيق iSearching على iOS و Android",
        "ليست RFID"
      ]
    }
  }
];

const translations = {
  en: {
    navHome: "Home",
    navProducts: "Products",
    navFeatures: "Features",
    navReviews: "Reviews",
    navCheckout: "Checkout",
    cart: "Cart",
    heroBadge: "100% Natural Egyptian Leather",
    heroTitle: "Elegant wallets made for everyday life.",
    heroText: "Discover Modo wallets crafted from natural Egyptian leather, with Bluetooth smart tracking in selected models and a premium professional look.",
    shopNow: "Shop Now",
    whatsappUs: "WhatsApp Us",
    productsTitle: "Our Products",
    productsText: "Choose the Modo wallet that fits your lifestyle.",
    featuresTitle: "Why Modo?",
    featuresText: "Designed for elegance, comfort, and practical daily use.",
    feature1Title: "Natural Egyptian Leather",
    feature1Text: "All Modo wallets are made from 100% natural Egyptian leather.",
    feature2Title: "Bluetooth Smart Connection",
    feature2Text: "Smart and Premium models connect to your phone using Bluetooth.",
    feature3Title: "Out-of-Range Alert",
    feature3Text: "Your phone can notify you when the wallet goes out of range.",
    feature4Title: "Alarm Sound",
    feature4Text: "Make the wallet ring when it is hidden or lost nearby.",
    reviewsTitle: "Customer Reviews",
    reviewsText: "What customers love about Modo Wallet.",
    review1Text: "Very elegant wallet and the leather quality is excellent.",
    review1Name: "Ahmed M.",
    review2Text: "The smart features are useful, especially the alarm and notification.",
    review2Name: "Omar H.",
    review3Text: "Beautiful design, professional feel, and very good for gifts.",
    review3Name: "Youssef A.",
    checkoutTitle: "Checkout",
    subtotal: "Subtotal",
    delivery: "Delivery",
    total: "Total",
    nameLabel: "Full Name",
    phoneLabel: "Phone Number",
    cityLabel: "City / Area",
    addressLabel: "Address",
    notesLabel: "Notes",
    sendOrder: "Send Order on WhatsApp",
    footerText: "© 2026 Modo Wallet. All rights reserved.",
    addToCart: "Buy Now",
    addedToCart: "Added to cart — complete checkout below",
    emptyCart: "Your cart is empty.",
    alertEmptyCart: "Please add at least one product first."
  },
  ar: {
    navHome: "الرئيسية",
    navProducts: "المنتجات",
    navFeatures: "المميزات",
    navReviews: "التقييمات",
    navCheckout: "الدفع",
    cart: "السلة",
    heroBadge: "جلد مصري طبيعي 100%",
    heroTitle: "محافظ أنيقة مصممة للحياة اليومية.",
    heroText: "اكتشف محافظ مودو المصنوعة من جلد مصري طبيعي، مع تتبع ذكي بالبلوتوث في بعض الموديلات ولمسة احترافية فاخرة.",
    shopNow: "تسوق الآن",
    whatsappUs: "راسلنا واتساب",
    productsTitle: "منتجاتنا",
    productsText: "اختر محفظة مودو المناسبة لأسلوب حياتك.",
    featuresTitle: "لماذا مودو؟",
    featuresText: "مصممة للأناقة والراحة والاستخدام العملي اليومي.",
    feature1Title: "جلد مصري طبيعي",
    feature1Text: "جميع محافظ مودو مصنوعة من جلد مصري طبيعي 100%.",
    feature2Title: "اتصال ذكي بالبلوتوث",
    feature2Text: "موديلات Smart و Premium تتصل بالهاتف باستخدام البلوتوث.",
    feature3Title: "تنبيه الخروج من النطاق",
    feature3Text: "يمكن للهاتف تنبيهك عندما تخرج المحفظة من النطاق.",
    feature4Title: "صوت إنذار",
    feature4Text: "اجعل المحفظة تصدر صوتاً عند فقدانها أو اختفائها بالقرب منك.",
    reviewsTitle: "آراء العملاء",
    reviewsText: "ما يحبه العملاء في محفظة مودو.",
    review1Text: "محفظة أنيقة جداً وجودة الجلد ممتازة.",
    review1Name: "أحمد م.",
    review2Text: "المميزات الذكية مفيدة جداً خصوصاً الإنذار والتنبيه.",
    review2Name: "عمر ح.",
    review3Text: "تصميم جميل وإحساس احترافي ومناسبة جداً للهدايا.",
    review3Name: "يوسف أ.",
    checkoutTitle: "إتمام الطلب",
    subtotal: "إجمالي المنتجات",
    delivery: "التوصيل",
    total: "الإجمالي",
    nameLabel: "الاسم بالكامل",
    phoneLabel: "رقم الهاتف",
    cityLabel: "المدينة / المنطقة",
    addressLabel: "العنوان",
    notesLabel: "ملاحظات",
    sendOrder: "إرسال الطلب على واتساب",
    footerText: "© 2026 Modo Wallet. جميع الحقوق محفوظة.",
    addToCart: "اشتري الآن",
    addedToCart: "تمت الإضافة للسلة — أكمل الطلب بالأسفل",
    emptyCart: "السلة فارغة.",
    alertEmptyCart: "من فضلك أضف منتجاً واحداً على الأقل أولاً."
  }
};

function t(key) {
  return translations[currentLang][key] || key;
}

function formatEGP(num) {
  return `${num.toLocaleString()} EGP`;
}

function renderTranslations() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.getElementById("langToggle").textContent =
    currentLang === "en" ? "العربية" : "English";
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  products.forEach(product => {
    const p = product[currentLang];
    const qty = cart[product.id] || 0;

    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.productId = product.id;

    card.innerHTML = `
      <img src="${product.image}" alt="${p.name}">
      <div class="product-head">
        <h3>${p.name}</h3>
        <span class="product-badge">${p.badge}</span>
      </div>

      <p class="product-desc">${p.desc}</p>

      <ul class="feature-list">
        ${p.features.map(feature => `<li>${feature}</li>`).join("")}
      </ul>

      <div class="price">${formatEGP(product.price)}</div>

      <div class="product-actions">
        <div class="qty-box">
          <button type="button" onclick="decreaseQty('${product.id}')">−</button>
          <span>${qty}</span>
          <button type="button" onclick="increaseQty('${product.id}', this)">+</button>
        </div>

        <button type="button" class="btn btn-gold" onclick="increaseQty('${product.id}', this)">
          ${t("addToCart")}
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function increaseQty(id, button = null) {
  lastClickedButton = button;

  cart[id] = (cart[id] || 0) + 1;

  renderProducts();
  renderCart();
  playAddToCartAnimation(id, button);

  // After the animation, go directly to the checkout section.
  setTimeout(() => {
    scrollToCheckout();
  }, 900);
}

function decreaseQty(id) {
  if (!cart[id]) return;

  cart[id]--;

  if (cart[id] <= 0) {
    delete cart[id];
  }

  renderProducts();
  renderCart();
}

function renderCart() {
  const items = Object.keys(cart).filter(id => cart[id] > 0);
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");

  if (items.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">${t("emptyCart")}</p>`;
    document.getElementById("subtotal").textContent = formatEGP(0);
    document.getElementById("delivery").textContent = formatEGP(0);
    document.getElementById("total").textContent = formatEGP(0);
    cartCount.textContent = 0;
    return;
  }

  let subtotal = 0;
  let count = 0;

  cartItems.innerHTML = items.map(id => {
    const product = products.find(p => p.id === id);
    const qty = cart[id];
    const lineTotal = product.price * qty;

    subtotal += lineTotal;
    count += qty;

    return `
      <div class="cart-item">
        <div>
          <strong>${product[currentLang].name}</strong><br>
          <small>${qty} × ${formatEGP(product.price)}</small>
        </div>
        <strong>${formatEGP(lineTotal)}</strong>
      </div>
    `;
  }).join("");

  const total = subtotal + DELIVERY_FEE;

  document.getElementById("subtotal").textContent = formatEGP(subtotal);
  document.getElementById("delivery").textContent = formatEGP(DELIVERY_FEE);
  document.getElementById("total").textContent = formatEGP(total);
  cartCount.textContent = count;
}

function scrollToCheckout() {
  document.getElementById("checkout").scrollIntoView({
    behavior: "smooth"
  });
}

function showAddToast() {
  let toast = document.getElementById("addToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "addToast";
    toast.className = "add-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = t("addedToCart");
  toast.classList.add("show");

  clearTimeout(toast.hideTimer);

  toast.hideTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1700);
}

function playAddToCartAnimation(id, button) {
  const cartButton = document.querySelector(".cart-btn");
  const cartCount = document.getElementById("cartCount");
  const card = document.querySelector(`.product-card[data-product-id="${id}"]`);

  if (card) {
    card.classList.add("added");

    setTimeout(() => {
      card.classList.remove("added");
    }, 600);
  }

  if (cartButton) {
    cartButton.classList.remove("cart-pop");
    void cartButton.offsetWidth;
    cartButton.classList.add("cart-pop");

    setTimeout(() => {
      cartButton.classList.remove("cart-pop");
    }, 650);
  }

  if (cartCount) {
    cartCount.classList.remove("count-pop");
    void cartCount.offsetWidth;
    cartCount.classList.add("count-pop");

    setTimeout(() => {
      cartCount.classList.remove("count-pop");
    }, 500);
  }

  const source = button || lastClickedButton;

  if (source && cartButton) {
    const start = source.getBoundingClientRect();
    const end = cartButton.getBoundingClientRect();

    const dot = document.createElement("span");
    dot.className = "fly-dot";

    dot.style.left = `${start.left + start.width / 2}px`;
    dot.style.top = `${start.top + start.height / 2}px`;

    document.body.appendChild(dot);

    requestAnimationFrame(() => {
      dot.style.transform =
        `translate(${end.left + end.width / 2 - (start.left + start.width / 2)}px, ${end.top + end.height / 2 - (start.top + start.height / 2)}px) scale(0.35)`;

      dot.style.opacity = "0";
    });

    setTimeout(() => {
      dot.remove();
    }, 850);
  }

  showAddToast();
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";

  renderTranslations();
  renderProducts();
  renderCart();
});

document.getElementById("mobileMenuBtn").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("open");
  });
});

document.getElementById("checkoutForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const items = Object.keys(cart).filter(id => cart[id] > 0);

  if (items.length === 0) {
    alert(t("alertEmptyCart"));
    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const city = document.getElementById("customerCity").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const notes = document.getElementById("customerNotes").value.trim() || "-";

  let subtotal = 0;
  let orderLines = "";

  items.forEach(id => {
    const product = products.find(p => p.id === id);
    const qty = cart[id];
    const lineTotal = product.price * qty;

    subtotal += lineTotal;

    orderLines +=
      `- ${product[currentLang].name} | Qty: ${qty} | Unit: ${product.price} EGP | Total: ${lineTotal} EGP%0A`;
  });

  const total = subtotal + DELIVERY_FEE;

  const message =
    `🛍️ New Order - Modo Wallet%0A%0A` +
    `👤 Name: ${name}%0A` +
    `📞 Phone: ${phone}%0A` +
    `📍 City/Area: ${city}%0A` +
    `🏠 Address: ${address}%0A` +
    `📝 Notes: ${notes}%0A%0A` +
    `📦 Order Details:%0A${orderLines}%0A` +
    `Subtotal: ${subtotal} EGP%0A` +
    `Delivery: ${DELIVERY_FEE} EGP%0A` +
    `Total: ${total} EGP`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
});

renderTranslations();
renderProducts();
renderCart();
