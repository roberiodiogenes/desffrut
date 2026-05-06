/* ============================================================
   DRESFRUT — ARQUIVO DE PRODUTOS E PREÇOS
   Edite aqui os preços diariamente conforme necessário.
   ============================================================
   INSTRUÇÕES:
   - preco: valor em R$ (número com ponto decimal)
   - unidade: "kg", "un", "dz", "maço", "bandeja"
   - disponivel: true (disponível) / false (sem estoque)
   - destaque: true (aparece na home) / false
   - img: URL da imagem (substitua quando tiver as fotos)
   ============================================================ */

const DRESFRUT_PRODUTOS = {

  frutas: [
    { id: "abacaxi-g",    nome: "Abacaxi Grande",     preco: 6.90,  unidade: "un",  disponivel: true,  destaque: true,  categoria: "frutas", img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80" },
    { id: "abacaxi-p",    nome: "Abacaxi Pequeno",    preco: 4.90,  unidade: "un",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80" },
    { id: "acerola",      nome: "Acerola",             preco: 5.00,  unidade: "kg",  disponivel: true,  destaque: true,  categoria: "frutas", img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80" },
    { id: "ameixa-fresca",nome: "Ameixa Fresca",       preco: 12.90, unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&q=80" },
    { id: "ameixa-seca",  nome: "Ameixa Seca",         preco: 18.00, unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80" },
    { id: "ata",          nome: "Ata",                 preco: 8.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80" },
    { id: "banana-maca",  nome: "Banana Maçã",         preco: 5.50,  unidade: "kg",  disponivel: true,  destaque: true,  categoria: "frutas", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80" },
    { id: "banana-pacova",nome: "Banana Pacová",        preco: 4.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80" },
    { id: "caja",         nome: "Cajá",                preco: 6.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80" },
    { id: "caqui",        nome: "Caqui",               preco: 9.90,  unidade: "kg",  disponivel: false, destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&q=80" },
    { id: "coco-seco",    nome: "Coco Seco",           preco: 4.00,  unidade: "un",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1580984969071-a8da8c2f1dcd?w=400&q=80" },
    { id: "coco-verde",   nome: "Coco Verde",          preco: 5.00,  unidade: "un",  disponivel: true,  destaque: true,  categoria: "frutas", img: "https://images.unsplash.com/photo-1580984969071-a8da8c2f1dcd?w=400&q=80" },
    { id: "goiaba",       nome: "Goiaba",              preco: 5.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=400&q=80" },
    { id: "kiwi",         nome: "Kiwi",                preco: 14.90, unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&q=80" },
    { id: "laranja",      nome: "Laranja",             preco: 4.00,  unidade: "kg",  disponivel: true,  destaque: true,  categoria: "frutas", img: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&q=80" },
    { id: "limao-grande", nome: "Limão Grande",        preco: 5.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&q=80" },
    { id: "limao-normal", nome: "Limão Normal",        preco: 4.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&q=80" },
    { id: "maca-135",     nome: "Maçã 135",            preco: 9.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80" },
    { id: "maca-198",     nome: "Maçã 198",            preco: 11.90, unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80" },
    { id: "maca-verde",   nome: "Maçã Verde",          preco: 10.90, unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80" },
    { id: "mamao-bola",   nome: "Mamão Bola",          preco: 5.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&q=80" },
    { id: "mamao-comprido",nome:"Mamão Comprido",      preco: 4.50,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&q=80" },
    { id: "mamao-havai",  nome: "Mamão Havai",         preco: 6.90,  unidade: "kg",  disponivel: true,  destaque: true,  categoria: "frutas", img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&q=80" },
    { id: "manga",        nome: "Manga",               preco: 5.00,  unidade: "kg",  disponivel: true,  destaque: true,  categoria: "frutas", img: "https://images.unsplash.com/photo-1605027990121-cbae9e0642df?w=400&q=80" },
    { id: "maracuja",     nome: "Maracujá",            preco: 7.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1592951378183-b87a0e619135?w=400&q=80" },
    { id: "melancia",     nome: "Melancia",            preco: 3.50,  unidade: "kg",  disponivel: true,  destaque: true,  categoria: "frutas", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80" },
    { id: "melao-amarelo",nome: "Melão Amarelo",       preco: 4.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=400&q=80" },
    { id: "melao-japones",nome: "Melão Japonês",       preco: 5.90,  unidade: "kg",  disponivel: false, destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=400&q=80" },
    { id: "milho",        nome: "Milho",               preco: 2.50,  unidade: "un",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&q=80" },
    { id: "morango",      nome: "Morango",             preco: 12.00, unidade: "bandeja", disponivel: true, destaque: true, categoria: "frutas", img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&q=80" },
    { id: "pera",         nome: "Pera",                preco: 11.90, unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=400&q=80" },
    { id: "pitaia",       nome: "Pitáia",              preco: 25.00, unidade: "kg",  disponivel: false, destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80" },
    { id: "tangirina",    nome: "Tangerina",           preco: 5.50,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&q=80" },
    { id: "uva-nubia",    nome: "Uva Núbia",           preco: 14.90, unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&q=80" },
    { id: "uva-sem-semen",nome: "Uva Sem Semente",    preco: 16.90, unidade: "kg",  disponivel: true,  destaque: true,  categoria: "frutas", img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&q=80" },
    { id: "uva-tomson",   nome: "Uva Tomson",          preco: 13.90, unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&q=80" },
    { id: "uva-verde",    nome: "Uva Verde",           preco: 12.90, unidade: "kg",  disponivel: false, destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&q=80" },
    { id: "abacate",      nome: "Abacate",             preco: 7.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "frutas", img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80" },
  ],

  verduras: [
    { id: "abobora-jacare", nome: "Abóbora Jacaré",   preco: 4.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400&q=80" },
    { id: "abobrinha",    nome: "Abobrinha",           preco: 4.50,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=400&q=80" },
    { id: "acelga",       nome: "Acelga",              preco: 3.50,  unidade: "maço", disponivel: true, destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80" },
    { id: "alface",       nome: "Alface",              preco: 2.50,  unidade: "un",  disponivel: true,  destaque: true,  categoria: "verduras", img: "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=400&q=80" },
    { id: "alho",         nome: "Alho",                preco: 28.00, unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80" },
    { id: "alho-poro",    nome: "Alho Poró",           preco: 5.90,  unidade: "maço", disponivel: true, destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80" },
    { id: "batata-branca",nome: "Batata Branca",       preco: 6.90,  unidade: "kg",  disponivel: true,  destaque: true,  categoria: "verduras", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80" },
    { id: "batata-ingla", nome: "Batata Inglesa",      preco: 7.50,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80" },
    { id: "batata-roxa",  nome: "Batata Roxa",         preco: 9.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80" },
    { id: "berinjela",    nome: "Berinjela",           preco: 5.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80" },
    { id: "beterraba",    nome: "Beterraba",           preco: 4.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=400&q=80" },
    { id: "brocolis",     nome: "Brócolis",            preco: 5.90,  unidade: "un",  disponivel: true,  destaque: true,  categoria: "verduras", img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&q=80" },
    { id: "cebola-branca",nome: "Cebola Branca",       preco: 5.50,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&q=80" },
    { id: "cebola-roxa",  nome: "Cebola Roxa",         preco: 6.50,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&q=80" },
    { id: "cenoura",      nome: "Cenoura",             preco: 4.90,  unidade: "kg",  disponivel: true,  destaque: true,  categoria: "verduras", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80" },
    { id: "cheiro-verde", nome: "Cheiro-Verde",        preco: 2.00,  unidade: "maço", disponivel: true, destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80" },
    { id: "chuchu",       nome: "Chuchu",              preco: 3.50,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=400&q=80" },
    { id: "couve-flor",   nome: "Couve-Flor",          preco: 6.90,  unidade: "un",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80" },
    { id: "couve-folha",  nome: "Couve-Folha",         preco: 2.50,  unidade: "maço", disponivel: true, destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80" },
    { id: "espinafre",    nome: "Espinafre",           preco: 3.50,  unidade: "maço", disponivel: true, destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80" },
    { id: "feijao-verde", nome: "Feijão Verde",        preco: 6.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=400&q=80" },
    { id: "gengibre",     nome: "Gengibre",            preco: 12.00, unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80" },
    { id: "goma-fresca",  nome: "Goma Fresca",         preco: 5.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80" },
    { id: "hortela",      nome: "Hortelã",             preco: 2.00,  unidade: "maço", disponivel: true, destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&q=80" },
    { id: "inhame",       nome: "Inhame",              preco: 5.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80" },
    { id: "jerimum",      nome: "Jerimum",             preco: 3.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400&q=80" },
    { id: "jilo",         nome: "Jiló",                preco: 4.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80" },
    { id: "macaxera",     nome: "Macaxera",            preco: 3.50,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80" },
    { id: "maxixe",       nome: "Maxixe",              preco: 4.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=400&q=80" },
    { id: "pepino",       nome: "Pepino",              preco: 3.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400&q=80" },
    { id: "pepino-japones",nome:"Pepino Japonês",      preco: 5.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400&q=80" },
    { id: "pimentao",     nome: "Pimentão",            preco: 7.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80" },
    { id: "pimentinha",   nome: "Pimentinha",          preco: 8.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80" },
    { id: "quiabo",       nome: "Quiabo",              preco: 5.00,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80" },
    { id: "repolho",      nome: "Repolho",             preco: 4.50,  unidade: "un",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=400&q=80" },
    { id: "repolho-rox",  nome: "Repolho Roxo",        preco: 5.50,  unidade: "un",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=400&q=80" },
    { id: "sacolas",      nome: "Sacola de Verduras",  preco: 15.00, unidade: "un",  disponivel: true,  destaque: true,  categoria: "verduras", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80" },
    { id: "salsa",        nome: "Salsa",               preco: 2.00,  unidade: "maço", disponivel: true, destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&q=80" },
    { id: "tomate-caja",  nome: "Tomate Cajá",         preco: 6.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1546094096-0df4bcaad337?w=400&q=80" },
    { id: "tomate-cereja",nome: "Tomate Cereja",       preco: 12.90, unidade: "bandeja", disponivel: true, destaque: true, categoria: "verduras", img: "https://images.unsplash.com/photo-1546094096-0df4bcaad337?w=400&q=80" },
    { id: "tomate-redondo",nome:"Tomate Redondo",      preco: 7.90,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1546094096-0df4bcaad337?w=400&q=80" },
    { id: "vargem",       nome: "Vagem",               preco: 6.50,  unidade: "kg",  disponivel: true,  destaque: false, categoria: "verduras", img: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=400&q=80" },
  ],

};

/* Helper: busca produto por ID */
function getProduto(id) {
  return [...DRESFRUT_PRODUTOS.frutas, ...DRESFRUT_PRODUTOS.verduras].find(p => p.id === id);
}

/* Helper: todos os destaques */
function getDestaques() {
  return [...DRESFRUT_PRODUTOS.frutas, ...DRESFRUT_PRODUTOS.verduras].filter(p => p.destaque && p.disponivel);
}
