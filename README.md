# Dresfrut – Site Hortifrutti

Site oficial da **Dresfrut**, localizada em Cascavel – CE. Desenvolvido para venda online com entrega em domicílio, presença virtual e fidelização de clientes.

---

## 📁 Estrutura do Projeto

```
dresfrut/
│
├── index.html                  ← Página inicial
│
├── pages/
│   ├── pedidos.html            ← Loja / Fazer pedido
│   ├── blog.html               ← Blog de dicas e receitas
│   ├── login.html              ← Entrar / Cadastrar
│   ├── cliente.html            ← Área do cliente (logado)
│   ├── admin.html              ← Painel administrativo (restrito)
│   └── 404.html                ← Página de erro
│
├── css/
│   ├── config.css              ← ⚙️ CONFIGURAÇÕES VISUAIS (cores, fontes)
│   ├── global.css              ← Estilos globais compartilhados
│   ├── index.css               ← Estilos da página inicial
│   └── pedidos.css             ← Estilos da página de pedidos
│
├── js/
│   ├── links.js                ← ⚙️ LINKS E CONTATOS (WhatsApp, Instagram, etc.)
│   ├── global.js               ← JS global (carrinho, auth, toast, etc.)
│   ├── components.js           ← Navbar e Footer compartilhados
│   ├── index.js                ← JS da página inicial
│   └── pedidos.js              ← JS da página de pedidos
│
└── data/
    └── produtos.js             ← ⚙️ PRODUTOS E PREÇOS (editar diariamente)
```

---

## ⚙️ Arquivos de Configuração

### 1. `js/links.js` — Contato e Redes Sociais
Edite este arquivo para atualizar WhatsApp, Instagram, TikTok, e-mail e endereço.

```js
contato: {
  whatsapp: "5588900000000",  // Formato: 55 + DDD + número
  instagram: "https://instagram.com/dresfrut",
  tiktok: "https://tiktok.com/@dresfrut",
  email: "contato@dresfrut.com.br",
}
```

### 2. `data/produtos.js` — Preços dos Produtos
Edite diariamente para manter os preços atualizados. Cada produto tem:
- `preco`: valor em R$ (ex: `5.90`)
- `disponivel`: `true` ou `false`
- `destaque`: `true` = aparece na home

### 3. `css/config.css` — Visual do Site
Edite aqui para mudar cores, fontes e espaçamentos de todo o site de uma vez.

---

## 🔑 Acesso ao Painel Admin

URL: `/pages/admin.html`

```
Usuário: admin
Senha:   dresfrut2025
```

⚠️ **IMPORTANTE:** Altere a senha antes de colocar o site no ar!
Edite as constantes `ADMIN_USER` e `ADMIN_PASS` no arquivo `pages/admin.html`.

---

## 🚀 Deploy no GitHub Pages

1. Crie um repositório no GitHub (ex: `dresfrut-site`)
2. Faça upload de todos os arquivos
3. Vá em **Settings → Pages**
4. Em **Source**, selecione `main` branch, pasta `/root`
5. Salve — o site estará disponível em `https://seu-usuario.github.io/dresfrut-site/`

---

## 📋 Funcionalidades

| Recurso | Status |
|---|---|
| Página inicial responsiva | ✅ |
| Catálogo com busca e filtros | ✅ |
| Sacola de compras | ✅ |
| Pedido via WhatsApp | ✅ |
| Cadastro / Login de clientes | ✅ |
| Área do cliente (pontos, histórico) | ✅ |
| Sistema de Dres-moedas (pontos) | ✅ |
| Blog com posts e categorias | ✅ |
| Painel administrativo | ✅ |
| Gestão de preços (admin) | ✅ |
| Ranking de clientes | ✅ |
| Acessibilidade (A+, alto contraste) | ✅ |
| Página de erro 404 | ✅ |
| Footer e navbar dinâmicos | ✅ |

---

## 🛠️ Próximos Passos Recomendados

- [ ] Adicionar imagens reais dos produtos
- [ ] Editar textos e descrições
- [ ] Configurar WhatsApp, Instagram e TikTok no `js/links.js`
- [ ] Inserir endereço real no `js/links.js`
- [ ] Atualizar senha do admin
- [ ] Inserir embed do Google Maps com a localização real
- [ ] Contratar hospedagem para domínio próprio (ex: dresfrut.com.br)

---

*Desenvolvido com 💚 — Dresfrut, Cascavel – CE*
