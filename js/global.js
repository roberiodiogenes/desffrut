/* ============================================================
   DRESFRUT — JAVASCRIPT GLOBAL
   Carrinho, navbar, acessibilidade, auth
   ============================================================ */

/* ---- CARRINHO (localStorage) ---- */
const Cart = {
  key: "dresfrut_cart",

  getItems() {
    try { return JSON.parse(localStorage.getItem(this.key)) || []; }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem(this.key, JSON.stringify(items));
    this.updateUI();
  },

  add(produto, qtd = 1) {
    const items = this.getItems();
    const idx = items.findIndex(i => i.id === produto.id);
    if (idx > -1) {
      items[idx].qtd += qtd;
    } else {
      items.push({ ...produto, qtd });
    }
    this.save(items);
    showToast(`🛒 ${produto.nome} adicionado à sacola!`);
  },

  remove(id) {
    const items = this.getItems().filter(i => i.id !== id);
    this.save(items);
  },

  updateQtd(id, qtd) {
    const items = this.getItems();
    const idx = items.findIndex(i => i.id === id);
    if (idx > -1) {
      if (qtd <= 0) { items.splice(idx, 1); }
      else { items[idx].qtd = qtd; }
    }
    this.save(items);
  },

  clear() {
    localStorage.removeItem(this.key);
    this.updateUI();
  },

  total() {
    return this.getItems().reduce((s, i) => s + i.preco * i.qtd, 0);
  },

  count() {
    return this.getItems().reduce((s, i) => s + i.qtd, 0);
  },

  updateUI() {
    const cnt = this.count();
    document.querySelectorAll(".cart-count").forEach(el => {
      el.textContent = cnt;
      el.style.display = cnt > 0 ? "flex" : "none";
    });
  }
};

/* ---- AUTENTICAÇÃO (simulada via localStorage) ---- */
const Auth = {
  key: "dresfrut_user",

  getUser() {
    try { return JSON.parse(localStorage.getItem(this.key)); }
    catch { return null; }
  },

  login(userData) {
    localStorage.setItem(this.key, JSON.stringify(userData));
    this.updateUI();
  },

  logout() {
    localStorage.removeItem(this.key);
    this.updateUI();
    window.location.href = "../index.html";
  },

  isLoggedIn() {
    return !!this.getUser();
  },

  updateUI() {
    const user = this.getUser();
    document.querySelectorAll("[data-auth='logged-in']").forEach(el => {
      el.style.display = user ? "" : "none";
    });
    document.querySelectorAll("[data-auth='logged-out']").forEach(el => {
      el.style.display = user ? "none" : "";
    });
    document.querySelectorAll("[data-auth='username']").forEach(el => {
      el.textContent = user ? user.nome.split(" ")[0] : "";
    });
  }
};

/* ---- TOAST ---- */
function showToast(msg, type = "success") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ---- NAVBAR TOGGLE ---- */
function initNavbar() {
  const toggle = document.querySelector(".nav-toggle");
  const links  = document.querySelector(".navbar-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  /* Fecha menu ao clicar fora */
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", false);
    }
  });

  /* Ativa link atual */
  const path = window.location.pathname;
  document.querySelectorAll(".navbar-links a").forEach(a => {
    if (a.getAttribute("href") && path.includes(a.getAttribute("href").replace("../",""))) {
      a.classList.add("active");
    }
  });
}

/* ---- ACESSIBILIDADE ---- */
function initAccessibility() {
  const panel = document.getElementById("access-panel");
  const toggle = document.getElementById("access-toggle");
  if (toggle && panel) {
    toggle.addEventListener("click", () => panel.classList.toggle("open"));
  }

  /* Tamanho de fonte */
  document.querySelectorAll("[data-font-size]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.body.classList.remove("font-large","font-xlarge");
      const size = btn.dataset.fontSize;
      if (size !== "normal") document.body.classList.add("font-" + size);
      localStorage.setItem("dresfrut_fontsize", size);
    });
  });

  /* Alto contraste */
  const contrastBtn = document.getElementById("btn-contrast");
  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      document.body.classList.toggle("high-contrast");
      localStorage.setItem("dresfrut_contrast", document.body.classList.contains("high-contrast"));
    });
  }

  /* Restaura preferências */
  const savedFont = localStorage.getItem("dresfrut_fontsize");
  if (savedFont && savedFont !== "normal") document.body.classList.add("font-" + savedFont);
  if (localStorage.getItem("dresfrut_contrast") === "true") document.body.classList.add("high-contrast");
}

/* ---- FORMATAR PREÇO ---- */
function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/* ---- CALCULAR PONTOS ---- */
function calcPontos(valor) {
  return Math.floor(valor * (DRESFRUT_CONFIG?.pontos?.ratioPorReal || 1));
}

/* ---- INICIALIZAÇÃO ---- */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initAccessibility();
  Cart.updateUI();
  Auth.updateUI();
});
