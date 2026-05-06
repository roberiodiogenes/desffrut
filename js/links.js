/* ============================================================
   DRESFRUT — CONFIGURAÇÕES DE CONTATO E LINKS
   Edite aqui: WhatsApp, Instagram, email, TikTok, endereço.
   ============================================================ */

const DRESFRUT_CONFIG = {

  /* --- INFORMAÇÕES DA LOJA --- */
  loja: {
    nome:      "Dresfrut",
    slogan:    "Frescor do campo na sua mesa",
    cidade:    "Cascavel – CE",
    endereco:  "[EDITAR: Endereço completo da loja]",
    cep:       "[EDITAR: CEP]",
    telefone:  "[EDITAR: (88) 9XXXX-XXXX]",
    email:     "[EDITAR: contato@dresfrut.com.br]",
  },

  /* --- REDES SOCIAIS E CONTATO --- */
  contato: {
    whatsapp:        "5588900000000",           // Apenas números: 55 + DDD + número
    whatsappTexto:   "Olá! Quero fazer um pedido na Dresfrut 🍎",
    instagram:       "https://instagram.com/dresfrut",   // URL completa
    tiktok:          "https://tiktok.com/@dresfrut",      // URL completa
    email:           "contato@dresfrut.com.br",
    emailAssunto:    "Contato via site - Dresfrut",
  },

  /* --- HORÁRIOS DE FUNCIONAMENTO --- */
  horarios: {
    loja: {
      semana:  { abertura: "07:00", fechamento_manha: "12:00", abertura_tarde: "15:00", fechamento_tarde: "20:00" },
      sabado:  { abertura: "07:00", fechamento: "12:00" },
      domingo: { fechado: true },
    },
    entregas: {
      pedidos:  { inicio: "07:00", fim: "11:30" },
      entregas: { inicio: "07:00", fim: "12:00" },
      dias:     "Segunda a Sábado",
      obs:      "Pedidos encerram 30 min antes das entregas para garantir que todos recebam no mesmo dia.",
    }
  },

  /* --- CONFIGURAÇÕES DO SISTEMA DE PONTOS --- */
  pontos: {
    nome:         "Dres-moedas",          // Nome das moedas/tokens
    emoji:        "🍋",                    // Ícone simbólico
    ratioPorReal: 1,                       // 1 real = 1 ponto
    descricao:    "A cada R$ 1,00 em compras, você ganha 1 Dres-moeda!",
  },

  /* --- TAXA DE ENTREGA (pode ser 0 para grátis) --- */
  entrega: {
    taxaPadrao:   5.00,                    // R$
    minimoGratis: 80.00,                   // Grátis acima deste valor
    raio:         "Cascavel – CE",
  },

  /* --- CHAVES DE API (não compartilhe publicamente) --- */
  apis: {
    googleMapsKey: "[EDITAR: SUA_CHAVE_GOOGLE_MAPS]",
  },

};

/* Gera links dinâmicos no carregamento */
document.addEventListener("DOMContentLoaded", () => {
  const cfg = DRESFRUT_CONFIG;

  /* WhatsApp links */
  document.querySelectorAll("[data-link='whatsapp']").forEach(el => {
    el.href = `https://wa.me/${cfg.contato.whatsapp}?text=${encodeURIComponent(cfg.contato.whatsappTexto)}`;
  });

  /* Instagram links */
  document.querySelectorAll("[data-link='instagram']").forEach(el => {
    el.href = cfg.contato.instagram;
  });

  /* TikTok links */
  document.querySelectorAll("[data-link='tiktok']").forEach(el => {
    el.href = cfg.contato.tiktok;
  });

  /* Email links */
  document.querySelectorAll("[data-link='email']").forEach(el => {
    el.href = `mailto:${cfg.contato.email}?subject=${encodeURIComponent(cfg.contato.emailAssunto)}`;
  });

  /* Endereço */
  document.querySelectorAll("[data-info='endereco']").forEach(el => {
    el.textContent = cfg.loja.endereco;
  });

  /* Telefone */
  document.querySelectorAll("[data-info='telefone']").forEach(el => {
    el.textContent = cfg.loja.telefone;
  });

  /* Nome dos pontos */
  document.querySelectorAll("[data-info='pontos-nome']").forEach(el => {
    el.textContent = cfg.pontos.nome;
  });
});
