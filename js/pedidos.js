/* ============================================================
   DRESFRUT — JS DA PÁGINA DE PEDIDOS
   ============================================================ */

let categoriaAtiva = "todos";
let termoBusca = "";

/* ---- Renderiza produtos ---- */
function renderProdutos() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const todos = [...DRESFRUT_PRODUTOS.frutas, ...DRESFRUT_PRODUTOS.verduras];
  const filtrado = todos.filter(p => {
    const catOk = categoriaAtiva === "todos" || p.categoria === categoriaAtiva;
    const busca = termoBusca.toLowerCase();
    const buscaOk = !busca || p.nome.toLowerCase().includes(busca);
    return catOk && buscaOk;
  });

  if (filtrado.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:var(--space-10);color:var(--color-text-muted)">
      <p style="font-size:2rem">🔍</p>
      <p>Nenhum produto encontrado</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtrado.map(p => `
    <article class="product-card" role="listitem" data-id="${p.id}">
      ${!p.disponivel ? `<div style="background:var(--color-error);color:white;text-align:center;font-size:var(--text-xs);font-weight:700;padding:4px">INDISPONÍVEL</div>` : ''}
      <img class="product-card-img" src="${p.img}" alt="${p.nome}" loading="lazy" style="${!p.disponivel ? 'filter:grayscale(0.7)' : ''}" />
      <div class="product-card-body">
        <p class="product-card-name">${p.nome}</p>
        <p class="product-card-unit">Por ${p.unidade}</p>
        <div class="product-card-footer">
          <div>
            <div class="product-price">${formatBRL(p.preco)}<span>/${p.unidade}</span></div>
          </div>
          <button
            class="add-cart-btn"
            aria-label="Adicionar ${p.nome} à sacola"
            ${!p.disponivel ? 'disabled title="Indisponível" style="background:var(--color-border);cursor:not-allowed"' : ''}
            onclick="adicionarNaSacola('${p.id}')"
          >+</button>
        </div>
      </div>
    </article>
  `).join("");
}

function adicionarNaSacola(id) {
  const p = getProduto(id);
  if (!p || !p.disponivel) return;
  Cart.add(p, 1);
  renderSacola();
}

/* ---- Renderiza sacola ---- */
function renderSacola() {
  const items = Cart.getItems();
  const empty = document.getElementById("sacola-empty");
  const footer = document.getElementById("sacola-footer");
  const itemsDiv = document.getElementById("sacola-items");
  const countLabel = document.getElementById("sacola-count");

  const count = Cart.count();
  if (countLabel) countLabel.textContent = count + " " + (count === 1 ? "item" : "itens");

  if (items.length === 0) {
    if (empty) empty.style.display = "flex";
    if (footer) footer.style.display = "none";
    const existingItems = itemsDiv.querySelectorAll(".sacola-item");
    existingItems.forEach(el => el.remove());
    return;
  }

  if (empty) empty.style.display = "none";
  if (footer) footer.style.display = "flex";

  /* Limpa itens antigos */
  itemsDiv.querySelectorAll(".sacola-item").forEach(el => el.remove());

  /* Renderiza itens */
  const frag = document.createDocumentFragment();
  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "sacola-item";
    div.innerHTML = `
      <img class="sacola-item-img" src="${item.img}" alt="${item.nome}" />
      <div class="sacola-item-info">
        <div class="sacola-item-name">${item.nome}</div>
        <div class="sacola-item-preco">${formatBRL(item.preco * item.qtd)}</div>
      </div>
      <div class="sacola-item-qtd">
        <button class="qtd-btn" aria-label="Diminuir quantidade de ${item.nome}" onclick="alterarQtd('${item.id}', ${item.qtd - 1})">−</button>
        <span class="qtd-val">${item.qtd}</span>
        <button class="qtd-btn" aria-label="Aumentar quantidade de ${item.nome}" onclick="alterarQtd('${item.id}', ${item.qtd + 1})">+</button>
      </div>
    `;
    frag.appendChild(div);
  });
  itemsDiv.appendChild(frag);

  /* Totais */
  const cfg = DRESFRUT_CONFIG?.entrega;
  const subtotal = Cart.total();
  const entrega = (cfg && subtotal >= cfg.minimoGratis) ? 0 : (cfg?.taxaPadrao || 5);
  const total = subtotal + entrega;
  const pontos = calcPontos(total);

  const el = (id) => document.getElementById(id);
  if (el("sacola-subtotal")) el("sacola-subtotal").textContent = formatBRL(subtotal);
  if (el("sacola-entrega-val")) el("sacola-entrega-val").textContent = entrega === 0 ? "🎉 Grátis!" : formatBRL(entrega);
  if (el("sacola-total")) el("sacola-total").textContent = formatBRL(total);
  if (el("sacola-pontos-val")) el("sacola-pontos-val").textContent = pontos;
}

function alterarQtd(id, novaQtd) {
  Cart.updateQtd(id, novaQtd);
  renderSacola();
}

/* ---- Filtros & Busca ---- */
function initFiltros() {
  document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filtro-btn").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      categoriaAtiva = btn.dataset.cat;
      renderProdutos();
    });
  });

  const busca = document.getElementById("busca-input");
  if (busca) {
    busca.addEventListener("input", () => {
      termoBusca = busca.value;
      renderProdutos();
    });
  }

  /* Filtra pela URL: ?cat=frutas */
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("cat");
  if (catParam) {
    const btn = document.querySelector(`.filtro-btn[data-cat="${catParam}"]`);
    if (btn) btn.click();
  }
}

/* ---- Modal de finalização ---- */
function initModal() {
  const modal = document.getElementById("modal-finalizar");
  const btnFinalizar = document.getElementById("btn-finalizar");
  const btnClose = document.getElementById("modal-close");
  const btnLimpar = document.getElementById("btn-limpar");
  const pagamento = document.getElementById("pagamento");
  const trocoWrap = document.getElementById("troco-wrap");

  if (btnFinalizar) {
    btnFinalizar.addEventListener("click", () => {
      const items = Cart.getItems();
      if (items.length === 0) { showToast("⚠️ Adicione produtos à sacola!"); return; }

      /* Preenche resumo do modal */
      const cfg = DRESFRUT_CONFIG?.entrega;
      const subtotal = Cart.total();
      const entrega = (cfg && subtotal >= cfg.minimoGratis) ? 0 : (cfg?.taxaPadrao || 5);
      const total = subtotal + entrega;

      const resumo = document.getElementById("modal-resumo");
      if (resumo) {
        resumo.innerHTML = `
          <strong style="display:block;margin-bottom:var(--space-2)">Resumo do pedido:</strong>
          ${items.map(i => `
            <div class="modal-resumo-item">
              <span>${i.qtd}× ${i.nome}</span>
              <span>${formatBRL(i.preco * i.qtd)}</span>
            </div>
          `).join("")}
          <div class="modal-resumo-item" style="margin-top:var(--space-1)">
            <span>Entrega:</span>
            <span>${entrega === 0 ? "Grátis 🎉" : formatBRL(entrega)}</span>
          </div>
          <div class="modal-resumo-total">
            <span>Total a pagar:</span>
            <span>${formatBRL(total)}</span>
          </div>
        `;
      }

      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  }

  if (btnClose) {
    btnClose.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });
  }

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  if (btnLimpar) {
    btnLimpar.addEventListener("click", () => {
      if (confirm("Limpar a sacola?")) {
        Cart.clear();
        renderSacola();
      }
    });
  }

  /* Troco */
  if (pagamento) {
    pagamento.addEventListener("change", () => {
      if (trocoWrap) trocoWrap.style.display = pagamento.value === "dinheiro" ? "block" : "none";
    });
  }

  /* Enviar pelo WhatsApp */
  const btnWA = document.getElementById("btn-enviar-whatsapp");
  if (btnWA) {
    btnWA.addEventListener("click", () => {
      const nome   = document.getElementById("nome-completo")?.value.trim();
      const fone   = document.getElementById("telefone-pedido")?.value.trim();
      const ende   = document.getElementById("endereco-pedido")?.value.trim();
      const pag    = document.getElementById("pagamento")?.value;
      const obs    = document.getElementById("obs")?.value.trim();
      const troco  = document.getElementById("troco")?.value;

      if (!nome || !fone || !ende || !pag) {
        showToast("⚠️ Preencha todos os campos obrigatórios!");
        return;
      }

      const items = Cart.getItems();
      const cfg   = DRESFRUT_CONFIG?.entrega;
      const sub   = Cart.total();
      const entrega = (cfg && sub >= cfg.minimoGratis) ? 0 : (cfg?.taxaPadrao || 5);
      const total  = sub + entrega;
      const pontos = calcPontos(total);

      const pagMap = { pix: "PIX", dinheiro: "Dinheiro", cartao: "Cartão", outros: "Outros" };

      let msg = `🌿 *NOVO PEDIDO – DRESFRUT*\n\n`;
      msg += `👤 *Nome:* ${nome}\n`;
      msg += `📞 *Telefone:* ${fone}\n`;
      msg += `📍 *Endereço:* ${ende}\n\n`;
      msg += `🛒 *Itens do pedido:*\n`;
      items.forEach(i => {
        msg += `  • ${i.qtd}× ${i.nome} — ${formatBRL(i.preco * i.qtd)}\n`;
      });
      msg += `\n💰 *Subtotal:* ${formatBRL(sub)}\n`;
      msg += `🚚 *Entrega:* ${entrega === 0 ? "Grátis" : formatBRL(entrega)}\n`;
      msg += `✅ *Total:* ${formatBRL(total)}\n`;
      msg += `💳 *Pagamento:* ${pagMap[pag] || pag}`;
      if (pag === "dinheiro" && troco) msg += ` (troco para R$ ${troco})`;
      if (obs) msg += `\n📝 *Obs:* ${obs}`;
      msg += `\n🍋 *Pontos:* +${pontos} Dres-moedas`;

      const waNum = DRESFRUT_CONFIG?.contato?.whatsapp || "";
      const url = `https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");

      /* Limpa após envio */
      Cart.clear();
      renderSacola();
      modal.style.display = "none";
      document.body.style.overflow = "";
      showToast("✅ Pedido enviado pelo WhatsApp!");
    });
  }
}

/* ---- INIT ---- */
document.addEventListener("DOMContentLoaded", () => {
  initFiltros();
  renderProdutos();
  renderSacola();
  initModal();
});
