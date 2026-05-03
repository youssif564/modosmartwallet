const DELIVERY_FEE = 100;
const WHATSAPP_NUMBER = "201220597999";

let currentLang = "en";
let cart = {};

const products = [
  {
    id: "smart",
    price: 550,
    image: "smart-wallet.jpg",
    en: {
      name: "Modo Smart Wallet",
      badge: "Smart",
      desc: "A smart wallet made from 100% natural Egyptian leather. This model is NOT RFID.",
      features: [
        "100% natural Egyptian leather",
        "Bluetooth connection",
        "Lost location support",
        "Out-of-range alert on phone",
        "Alarm / sound to find wallet",
        "Works with iSearching app on iOS & Android",
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
        "إمكانية معرفة مكان المحفظة",
        "تنبيه على الهاتف عند الخروج من النطاق",
        "إطلاق صوت / إنذار للعثور على المحفظة",
        "تعمل مع تطبيق iSearching على iOS و Android",
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
      desc: "A premium smart wallet made from 100% natural Egyptian leather with advanced finding features. This model is NOT RFID.",
      features: [
        "100% natural Egyptian leather",
        "Luxury premium finish",
        "Bluetooth connection",
        "Lost location support",
        "Out-of-range alert on phone",
        "Alarm / sound to find wallet",
        "Works with iSearching app on iOS & Android",
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
        "إمكانية معرفة مكان المحفظة",
        "تنبيه على الهاتف عند الخروج من النطاق",
        "إطلاق صوت / إنذار للعثور على المحفظة",
        "تعمل مع تطبيق iSearching على iOS و Android",
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
    heroBadge: "Natural Egyptian Leather Wallets",
    heroTitle: "Elegant wallets made for everyday life.",
    heroText: "Discover Modo wallets crafted from 100% natural Egyptian leather, with smart features in selected models and a premium professional look.",
    shopNow: "Shop Now",
    contactWhatsapp: "WhatsApp Us",
    productsTitle: "Our Products",
    productsText: "Choose the Modo wallet that fits your lifestyle.",
    featuresTitle: "Why Modo?",
    featuresText: "Designed for elegance, comfort, and practical daily use.",
    feature1Title: "100% Natural Egyptian Leather",
    feature1Text: "All Modo wallets are made from genuine natural Egyptian leather.",
    feature2Title: "Smart Features",
    feature2Text: "Smart and Premium models include Bluetooth connection and wallet-finding functions.",
    feature3Title: "Out of Range Alerts",
    feature3Text: "If the wallet goes out of range, your phone will notify you.",
    feature4Title: "iSearching App Support",
    feature4Text: "Works with iSearching app on both iOS and Android.",
    reviewsTitle: "Customer Reviews",
    reviewsText: "What people love about Modo Wallet.",
    review1Text: "Very elegant wallet and the leather quality is excellent.",
    review1Name: "Ahmed M.",
    review2Text: "The smart wallet features are very useful, especially the alarm and notification.",
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
    addToCart: "Add to Cart",
    emptyCart: "Your cart is empty.",
    alertEmptyCart: "Please add at least one product first.",
    successAdd: "Product added to cart"
  },
  ar: {
    navHome: "الرئيسية",
    navProducts: "المنتجات",
    navFeatures: "المميزات",
    navReviews: "التقييمات",
    navCheckout: "الدفع",
    cart: "السلة",
    heroBadge: "محافظ من الجلد المصري الطبيعي",
    heroTitle: "محافظ أنيقة مصممة للحياة اليومية.",
    heroText: "اكتشف محافظ مودو المصنوعة من جلد مصري طبيعي 100% مع مميزات ذكية في بعض الموديلات ولمسة احترافية فاخرة.",
    shopNow: "تسوق الآن",
    contactWhatsapp: "راسلنا واتساب",
    productsTitle: "منتجاتنا",
    productsText: "اختر محفظة مودو المناسبة لك.",
    featuresTitle: "لماذا مودو؟",
    featuresText: "مصممة للأناقة والراحة والاستخدام العملي اليومي.",
    feature1Title: "جلد مصري طبيعي 100%",
    feature1Text: "جميع محافظ مودو مصنوعة من جلد مصري طبيعي أصلي.",
    feature2Title: "مميزات ذكية",
    feature2Text: "موديلا Smart و Premium بهما اتصال بلوتوث وخصائص العثور على المحفظة.",
    feature3Title: "تنبيه عند الخروج من النطاق",
    feature3Text: "إذا خرجت المحفظة من النطاق سيصلك إشعار على الهاتف.",
    feature4Title: "دعم تطبيق iSearching",
    feature4Text: "تعمل مع تطبيق iSearching على iOS و Android.",
    reviewsTitle: "آراء العملاء",
    reviewsText: "ما الذي يعجب العملاء في محافظ مودو.",
    review1Text: "محفظة أنيقة جداً وجودة الجلد ممتازة.",
    review1Name: "أحمد م.",
    review2Text: "مميزات المحفظة الذكية مفيدة جداً خصوصاً التنبيه والصوت.",
    review2Name: "عمر ح.",
    review3Text: "تصميم جميل جداً وإحساس احترافي ومناسب للهدايا.",
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
    addToCart: "أضف إلى السلة",
    emptyCart: "السلة فارغة.",
    alertEmptyCart: "من فضلك أضف منتجاً واحداً على الأقل أولاً.",
    successAdd: "تمت إضافة المنتج إلى السلة"
  }
};

function t(key) {
  return translations[currentLang][key] || key;
}

function formatEGP(num) {
  return `${num} EGP`;
}

function renderTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.body.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

  document.getElementById("langToggle").textContent =
    currentLang === "en" ? "العربية" : "English";
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  products.forEach(product => {
    const p = product[currentLang];
    const qty = cart[product.id] || 0;

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${p.name}" />
      <div class="product-top">
        <h3>${p.name}</h3>
        <span class="product-badge">${p.badge}</span>
      </div>
      <p>${p.desc}</p>
      <ul class="feature-list">
        ${p.features.map(f => `<li>• ${f}</li>`).join("")}
      </ul>
      <div class="price">${formatEGP(product.price)}</div>
      <div class="product-actions">
        <div class="qty-box">
          <button onclick="decreaseQty('${product.id}')">-</button>
          <span>${qty}</span>
          <button onclick="increaseQty('${product.id}')">+</button>
        </div>
        <button class="btn btn-gold" onclick="increaseQty('${product.id}')">${t("addToCart")}</button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function increaseQty(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderProducts();
  renderCart();
}

function decreaseQty(id) {
  if (!cart[id]) return;
  cart[id]--;
  if (cart[id] <= 0) delete cart[id];
  renderProducts();
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");

  const items = Object.keys(cart).filter(id => cart[id] > 0);

  if (items.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">${t("emptyCart")}</p>`;
    document.getElementById("subtotal").textContent = formatEGP(0);
    document.getElementById("delivery").textContent = formatEGP(DELIVERY_FEE);
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
          <small>${qty} x ${formatEGP(product.price)}</small>
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
  document.getElementById("checkout").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  renderTranslations();
  renderProducts();
  renderCart();
});

document.getElementById("checkoutForm").addEventListener("submit", function (e) {
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

    orderLines += `- ${product[currentLang].name} | Qty: ${qty} | Unit: ${product.price} EGP | Total: ${lineTotal} EGP%0A`;
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

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(whatsappURL, "_blank");
});

renderTranslations();
renderProducts();
renderCart();