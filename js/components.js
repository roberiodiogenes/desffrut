/* ============================================================
   DRESFRUT — COMPONENTES COMPARTILHADOS (Navbar + Footer)
   ============================================================ */

function renderNavbar(basePath = "") {
  return `
  <a href="#main-content" class="skip-link">Pular para o conteúdo</a>
  <nav class="navbar" role="navigation" aria-label="Menu principal">
    <div class="container navbar-inner">
      <a href="${basePath}index.html" class="navbar-logo" aria-label="Dresfrut - Página inicial">
        <div class="navbar-logo-icon" aria-hidden="true">🌿</div>
        <div>
          <span class="navbar-logo-text">Dresfrut</span>
          <span class="navbar-logo-sub">Hortifrutti Cascavel–CE</span>
        </div>
      </a>

      <ul class="navbar-links" role="list" id="navbar-links">
        <li><a href="${basePath}index.html">Início</a></li>
        <li><a href="${basePath}pages/pedidos.html">🛒 Fazer Pedido</a></li>
        <li><a href="${basePath}pages/blog.html">📰 Blog</a></li>
        <li><a href="${basePath}#contato">Contato</a></li>
        <li data-auth="logged-in" style="display:none"><a href="${basePath}pages/cliente.html">Minha Conta</a></li>
      </ul>

      <div class="navbar-actions">
        <!-- Botão acessibilidade -->
        <button id="access-toggle" aria-label="Opções de acessibilidade" title="Acessibilidade"
          style="background:none;border:1.5px solid var(--color-border);border-radius:var(--radius-md);
                 width:38px;height:38px;cursor:pointer;font-size:1.1rem;transition:all .2s">
          ♿
        </button>

        <!-- Carrinho -->
        <a href="${basePath}pages/pedidos.html" class="cart-btn" aria-label="Ver sacola de compras">
          🛒
          <span class="cart-count" aria-live="polite" style="display:none">0</span>
        </a>

        <!-- Login/Área do cliente -->
        <a href="${basePath}pages/login.html" class="btn btn-outline btn-sm" data-auth="logged-out">
          Entrar
        </a>
        <a href="${basePath}pages/cliente.html" class="btn btn-primary btn-sm" data-auth="logged-in" style="display:none">
          Olá, <span data-auth="username"></span>!
        </a>

        <!-- Hamburger -->
        <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="navbar-links">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Painel de acessibilidade -->
    <div id="access-panel" style="
      display:none; position:absolute; top:var(--nav-height); right:var(--space-4);
      background:white; border:1.5px solid var(--color-border); border-radius:var(--radius-lg);
      padding:var(--space-4); box-shadow:var(--shadow-lg); z-index:2000; min-width:220px;
    " role="dialog" aria-label="Opções de acessibilidade">
      <p style="font-weight:700;margin-bottom:var(--space-3);font-size:var(--text-sm)">♿ Acessibilidade</p>
      <p style="font-size:var(--text-xs);color:var(--color-text-muted);margin-bottom:var(--space-2)">Tamanho da fonte:</p>
      <div style="display:flex;gap:var(--space-2);margin-bottom:var(--space-3)">
        <button data-font-size="normal" class="btn btn-outline btn-sm">A</button>
        <button data-font-size="large"  class="btn btn-outline btn-sm" style="font-size:1.1rem">A+</button>
        <button data-font-size="xlarge" class="btn btn-outline btn-sm" style="font-size:1.2rem">A++</button>
      </div>
      <button id="btn-contrast" class="btn btn-outline btn-sm" style="width:100%">🌓 Alto Contraste</button>
    </div>
  </nav>
  `;
}

function renderFooter(basePath = "") {
  return `
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand-name">🌿 Dresfrut</div>
          <p class="footer-brand-desc">
            Frescor do campo direto na sua mesa. Frutas e verduras selecionadas com carinho
            para você e sua família em Cascavel – CE.
          </p>
          <div class="footer-social">
            <a href="#" data-link="whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener">📱</a>
            <a href="#" data-link="instagram" aria-label="Instagram" target="_blank" rel="noopener">📸</a>
            <a href="#" data-link="tiktok" aria-label="TikTok" target="_blank" rel="noopener">🎵</a>
            <a href="#" data-link="email" aria-label="Email">✉️</a>
          </div>
        </div>

        <div>
          <p class="footer-col-title">Navegação</p>
          <ul class="footer-links">
            <li><a href="${basePath}index.html">Início</a></li>
            <li><a href="${basePath}pages/pedidos.html">Fazer Pedido</a></li>
            <li><a href="${basePath}pages/blog.html">Blog</a></li>
            <li><a href="${basePath}pages/login.html">Entrar / Cadastrar</a></li>
          </ul>
        </div>

        <div>
          <p class="footer-col-title">Horários</p>
          <ul class="footer-links">
            <li><strong style="color:rgba(255,255,255,.9)">Loja Física</strong></li>
            <li>Seg–Sex: 07h–12h / 15h–20h</li>
            <li>Sábado: 07h–12h</li>
            <li style="margin-top:.5rem"><strong style="color:rgba(255,255,255,.9)">Entregas</strong></li>
            <li>Pedidos: 07h–11h30</li>
            <li>Entregas: 07h–12h</li>
          </ul>
        </div>

        <div>
          <p class="footer-col-title">Contato</p>
          <ul class="footer-links">
            <li>📍 <span data-info="endereco">[Endereço a definir]</span></li>
            <li>📞 <span data-info="telefone">[Telefone a definir]</span></li>
            <li><a href="#" data-link="whatsapp">💬 WhatsApp</a></li>
            <li><a href="#" data-link="email">✉️ E-mail</a></li>
          </ul>
          <div style="margin-top:var(--space-4)">
            <a href="#" data-link="whatsapp" class="btn btn-accent btn-sm" target="_blank" rel="noopener">
              💬 Fale no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2025 Dresfrut – Todos os direitos reservados</span>
        <span>Feito com 💚 em Cascavel – CE</span>
      </div>
    </div>
  </footer>
  `;
}

/* Renderiza automaticamente onde existir o slot */
document.addEventListener("DOMContentLoaded", () => {
  const navSlot  = document.getElementById("navbar-slot");
  const footSlot = document.getElementById("footer-slot");
  const base     = document.body.dataset.basePath || "";

  if (navSlot)  navSlot.innerHTML  = renderNavbar(base);
  if (footSlot) footSlot.innerHTML = renderFooter(base);

  /* Ativa painel de acessibilidade após renderização */
  const accessPanel  = document.getElementById("access-panel");
  const accessToggle = document.getElementById("access-toggle");
  if (accessToggle && accessPanel) {
    accessToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = accessPanel.style.display === "block";
      accessPanel.style.display = isOpen ? "none" : "block";
    });
    document.addEventListener("click", () => {
      if (accessPanel) accessPanel.style.display = "none";
    });
  }
});
