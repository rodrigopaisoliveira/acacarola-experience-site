export interface MenuItem {
  name: string;
  price?: string;
  description?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    title: "Entradas",
    items: [
      { name: "Sopa De Brócolos", price: "1,90 €" },
      { name: "Gambas À Guilho", price: "11,50 €" },
      { name: "Pratinho De Camarão", price: "11,00 €" },
      { name: "Chouriço Ou Farinheira Ou Morcela Na Brasa", price: "6,00 €" },
      { name: "Queijo Cabra Ou Seco Mistura", price: "4,50 €" },
      { name: "Salgadinhos (Unidade)", price: "1,30 €" },
      { name: "Pão Torrado C/Manteiga (Cesto)", price: "3,00 €" },
      { name: "Pão", price: "0,60 €" },
      { name: "Manteiga", price: "1,00 €" },
      { name: "Azeitonas", price: "1,50 €" },
    ],
  },
  {
    title: "Pratos Do Dia",
    items: [
      { name: "Bacalhau Assado À Lagareiro", price: "15,50 €" },
      { name: "Lombo De Porco Recheado C/ Farinheira", price: "10,50 €" },
      { name: "Carapauzinhos Fritos C/ Açorda De Tomate", price: "11,00 €" },
      { name: "Espetada Do Lombo", price: "13,50 €" },
      { name: "Lulinhas À Lagareiro", price: "12,00 €" },
    ],
  },
  {
    title: "Especialidades",
    items: [
      { name: "Polvo Grelhado À Lagareiro", price: "19,50 €" },
      { name: "Secretos Porco Preto", price: "15,50 €" },
      { name: "Picanha Grelhada", price: "17,50 €" },
      { name: "Açorda De Gambas", price: "12,50 €" },
    ],
  },
  {
    title: "Peixes",
    items: [
      { name: "Dourada Grelhada Escalada", price: "13,90 €" },
      { name: "Salmão Grelhado À Posta", price: "13,90 €" },
      { name: "Garoupa Grelhada À Posta" },
      { name: "Cabeça De Garoupa Grelhada Ou Cozida" },
      { name: "Carapaus Assados Com Molho À Espanhola", price: "10,50 €" },
      { name: "Robalo Grelhado Escalado", price: "13,90 €" },
    ],
  },
  {
    title: "Carnes",
    items: [
      { name: "Escalopes De Vitela Grelhados Com Natas E Cogumelos", price: "12,00 €" },
      { name: "Bife Vazia Grelhado Com Bacon", price: "14,50 €" },
      { name: "Bifinhos Porco Grelhados C/ Bacon", price: "11,50 €" },
      { name: "Bifinhos De Perú Grelhados", price: "12,00 €" },
      { name: "Naco De Novilho Na Pedra", price: "13,50 €" },
      { name: "Bitoque De Novilho Grelhado", price: "12,50 €" },
      { name: "Costeletinhas De Borrego Grelhadas", price: "13,50 €" },
    ],
  },
  {
    title: "Acompanhamentos",
    items: [
      { name: "Batata Frita / Cozida (Dose)", price: "3,00 €" },
      { name: "Legumes (Dose)", price: "3,00 €" },
      { name: "Arroz (Dose)", price: "3,00 €" },
      { name: "Feijão Preto (Dose)", price: "3,00 €" },
      { name: "Salada Mista", price: "3,00 €" },
      { name: "Salada Mista Dupla", price: "5,00 €" },
      { name: "Caixa", price: "0,40 €" },
      { name: "Saco", price: "0,20 €" },
    ],
  },
  {
    title: "Sugestão De Vinho",
    items: [
      { name: "Esteva Tinto (Douro)", price: "11,00 €" },
    ],
  },
];
