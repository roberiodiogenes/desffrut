/* ============================================================
   DRESFRUT — JS DA PÁGINA INICIAL
   ============================================================ */

/* Renderiza destaques na home */
function renderDestaques() {
  const grid = document.getElementById("destaques-grid");
  if (!grid) return;
  const destaques = getDestaques().slice(0, 8);
  grid.innerHTML = destaques.map(p => `
    <article class="product-card" role="listitem">
      <img class="product-card-img" src="${p.img}" alt="${p.nome}" loading="lazy" />
      <div class="product-card-body">
        <p class="product-card-name">${p.nome}</p>
        <p class="product-card-unit">Por ${p.unidade}</p>
        <div class="product-card-footer">
          <div>
            <div class="product-price">
              ${formatBRL(p.preco)}<span>/${p.unidade}</span>
            </div>
          </div>
          <button
            class="add-cart-btn"
            aria-label="Adicionar ${p.nome} à sacola"
            onclick="Cart.add(${JSON.stringify(p).replace(/"/g,'&quot;')})"
          >+</button>
        </div>
      </div>
    </article>
  `).join("");
}

/* Blog preview (dados estáticos por enquanto) */
const blogPosts = [
  {
    titulo: "5 benefícios do abacaxi para sua saúde",
    resumo: "O abacaxi é rico em vitamina C e bromelina, um poderoso anti-inflamatório natural. Saiba como incluir na dieta.",
    data: "01/05/2025",
    img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&q=80",
    slug: "beneficios-abacaxi",
    emoji: "🍍"
  },
  {
    titulo: "Receita: Suco verde detox com couve",
    resumo: "Um suco prático e nutritivo para começar o dia com energia. Leva só 5 minutos para preparar!",
    data: "25/04/2025",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80",
    slug: "suco-verde-detox",
    emoji: "🥬"
  },
  {
    titulo: "Como escolher a melancia perfeita",
    resumo: "Aprenda os truques simples para garantir que você vai levar para casa uma melancia doce e suculenta.",
    data: "18/04/2025",
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80",
    slug: "como-escolher-melancia",
    emoji: "🍉"
  }
];

function renderBlogPreview() {
  const grid = document.getElementById("blog-preview-grid");
  if (!grid) return;
  grid.innerHTML = blogPosts.slice(0,3).map(post => `
    <article class="card" style="display:flex;flex-direction:column">
      <img src="${post.img}" alt="${post.titulo}" style="width:100%;height:180px;object-fit:cover" loading="lazy" />
      <div style="padding:var(--space-4);flex:1;display:flex;flex-direction:column">
        <span style="font-size:var(--text-xs);color:var(--color-text-muted);margin-bottom:var(--space-2)">${post.emoji} · ${post.data}</span>
        <h3 style="font-size:var(--text-base);font-weight:800;margin-bottom:var(--space-2)">${post.titulo}</h3>
        <p style="font-size:var(--text-sm);color:var(--color-text-soft);flex:1;margin-bottom:var(--space-4)">${post.resumo}</p>
        <a href="pages/blog.html#${post.slug}" class="btn btn-outline btn-sm" style="align-self:flex-start">Ler mais →</a>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderDestaques();
  renderBlogPreview();
});
