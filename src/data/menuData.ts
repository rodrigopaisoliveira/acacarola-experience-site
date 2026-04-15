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
      { name: "Chouriço ou Farinheira ou Morcela na Brasa", price: "6,90 €" },
      { name: "Queijo Cabra ou Seco Vaca", price: "4,50 €" },
      { name: "Pão", price: "0,60 €" },
      { name: "Manteiga", price: "1,00 €" },
      { name: "Azeitonas", price: "1,50 €" },
      { name: "Sopa: Agrião", price: "2,50 €" },
      { name: "Pão Torrado c/Manteiga (Cesto)", price: "3,50 €" },
      { name: "Gambas à Guilho", price: "11,50 €" },
      { name: "Ovos Mexidos com Farinheira", price: "11,50 €" },
      { name: "Pratinho de Camarão", price: "12,00 €" },
    ],
  },
  {
    title: "Sugestão de Vinho",
    items: [
      { name: "Isento Grande Reserva 17% vol.", price: "32,00 €" },
      { name: "Quinta da Alorna Reserva Tinto (Tejo)", price: "13,90 €" },
      { name: "Quinta da Alorna Colheita Tinto (Tejo)", price: "10,90 €" },
      { name: "Cerveja Super Bock Bavaria Weiss 1927 0,33cl", price: "2,50 €" },
    ],
  },
  {
    title: "Pratos do Dia",
    items: [
      { name: "Bacalhau Assado à Lagareiro", price: "16,50 €" },
      { name: "Feijoada à Brasileira", price: "12,50 €" },
      { name: "Pernil de Porco Assado no Forno", price: "11,90 €" },
      { name: "Massinha de Peixe com Gambas", price: "12,90 €" },
      { name: "Espetada do Lombo Grelhada", price: "14,90 €" },
      { name: "Robalo Grelhado à Lagareiro", price: "14,50 €" },
    ],
  },
  {
    title: "Especialidades",
    items: [
      { name: "Polvo Grelhado à Lagareiro", price: "21,90 €" },
      { name: "Secretos de Porco Preto Grelhados", price: "15,50 €" },
      { name: "Açorda de Gambas", price: "13,90 €" },
      { name: "Pianinho Grelhado", price: "11,50 €" },
      { name: "Picanha Black Angus Grelhada na Brasa", price: "19,90 €" },
    ],
  },
  {
    title: "Peixes",
    items: [
      { name: "Dourada Grelhada Escalada", price: "14,50 €" },
      { name: "Salmão Grelhado à Lagareiro", price: "15,50 €" },
      { name: "Peixe Espada Preto Grelhado à Posta", price: "15,50 €" },
      { name: "Garoupa Grelhada à Posta", price: "45,00 €/Kg" },
      { name: "Cabeça de Garoupa Grelhada ou Cozida", price: "35,00 €/Kg" },
    ],
  },
  {
    title: "Carnes",
    items: [
      { name: "Bifinhos de Perú Grelhados", price: "13,50 €" },
      { name: "Bifinhos Porco Grelhados C/ Bacon", price: "12,50 €" },
      { name: "Alheira de Mirandela", price: "10,90 €" },
      { name: "Escalopes de Vitela com Natas e Cogumelos", price: "13,90 €" },
      { name: "Naco de Novilho na Pedra", price: "14,90 €" },
      { name: "Bitoque de Novilho Grelhado", price: "12,90 €" },
      { name: "Bife de Novilho à Mirandesa (Flat Iron)", price: "15,90 €" },
      { name: "Bife da Vazia Grelhado com Bacon", price: "15,50 €" },
      { name: "Costeleta de Novilho Grelhada com Ovo Estrelado", price: "16,90 €" },
      { name: "Naco do Lombo na Pedra", price: "18,90 €" },
    ],
  },
  {
    title: "Acompanhamentos (Extra)",
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
];
