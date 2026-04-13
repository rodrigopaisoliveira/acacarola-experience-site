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
      { name: "Entrada Mista", price: "7,00 €", description: "Morcela, chouriço e bacon" },
      { name: "Morcela Ou Chouriço Ou Farinheira Assada", price: "6,00 €" },
      { name: "Queijo Cabra Ou Seco Mistura", price: "4,50 €" },
      { name: "Pão", price: "0,60 €" },
      { name: "Manteiga", price: "0,80 €" },
      { name: "Azeitonas", price: "1,50 €" },
      { name: "Sopa De Abóbora E Cenoura", price: "2,50 €" },
      { name: "Pratinho De Camarão", price: "11,00 €" },
      { name: "Gambas À Guilho", price: "11,50 €" },
    ],
  },
  {
    title: "Acompanhamentos Extra",
    items: [
      { name: "Dose De Batata", price: "3,00 €" },
      { name: "Dose De Arroz", price: "3,00 €" },
      { name: "Dose De Feijão", price: "3,00 €" },
      { name: "Dose De Legumes", price: "3,00 €" },
      { name: "Salada Mista Peq", price: "3,00 €" },
      { name: "Salada Dupla", price: "4,00 €" },
      { name: "Caixa", price: "0,40 €" },
      { name: "Saco", price: "0,20 €" },
    ],
  },
  {
    title: "Sugestão De Vinho",
    items: [
      { name: "Pacheca Douro", price: "18,00 €", description: "Moscatel galego" },
      { name: "Madre Paula", price: "12,50 €", description: "Vinho da região de Lisboa" },
    ],
  },
  {
    title: "Especialidades",
    items: [
      { name: "Arroz De Tamboril Com Gambas", price: "18,90 €" },
      { name: "Açorda De Gambas À Novo Edmundo", price: "14,50 €" },
      { name: "Picanha Grelhada À Novo Edmundo", price: "17,90 €" },
      { name: "Polvo Grelhado À Lagareiro", price: "19,90 €" },
      { name: "Plumas De Porco Preto Grelhadas", price: "15,50 €" },
    ],
  },
  {
    title: "Peixes",
    items: [
      { name: "Dourada Grelhada, Escalada", price: "14,50 €" },
      { name: "Robalo Grelhado, Escalado", price: "14,50 €" },
      { name: "Salmão Grelhado À Posta", price: "14,50 €" },
      { name: "Pregado Grelhado, Para Duas Pessoas", price: "P.V." },
      { name: "Garoupa Grelhada, À Posta", price: "P.V." },
    ],
  },
  {
    title: "Carnes",
    items: [
      { name: "Naco De Lombo De Novilho, Na Pedra", price: "21,90 €" },
      { name: "Naco De Novilho Na Pedra", price: "15,90 €" },
      { name: "Bitoque De Novilho Grelhado", price: "12,50 €" },
      { name: "Bifinhos De Perú Grelhados", price: "11,50 €" },
      { name: "Menu Infantil", price: "9,00 €", description: "Bifinho de perú grelhado c/ ovo estrelado, arroz e batata frita" },
      { name: "Bifinhos Porco Grelhados C/ Bacon", price: "11,50 €" },
      { name: "Bife Da Vazia Grelhado Com Bacon E Ovo", price: "15,50 €" },
    ],
  },
  {
    title: "Pratos Do Dia",
    items: [
      { name: "Bacalhau Assado À Lagareiro", price: "16,90 €" },
      { name: "Feijoada De Polvo Com Gambas E Cogumelos", price: "12,50 €" },
      { name: "Bacalhau Com Natas, Espinafres E Camarão", price: "12,50 €" },
      { name: "Borrego Assado No Forno À Padeiro", price: "14,90 €" },
      { name: "Arroz De Pato, Gratinado", price: "12,50 €" },
    ],
  },
  {
    title: "Sobremesas / Lambeirices",
    items: [
      { name: "Crumble De Maçã", price: "4,50 €" },
      { name: "Bolo De Bolacha Crocante", price: "3,95 €" },
      { name: "Arroz Doce", price: "2,95 €" },
      { name: "Cheesecake De Morango", price: "4,50 €" },
      { name: "Tarte De Chocolate Crocante", price: "4,50 €" },
      { name: "Mousse De Manga Caseira", price: "2,95 €" },
      { name: "Mousse De Chocolate Caseira", price: "2,95 €" },
      { name: "Mousse De Bolacha Oreo Caseira", price: "2,95 €" },
      { name: "Leite Creme Queimado Na Hora", price: "2,95 €" },
      { name: "Pudim De Ovos Caseiro", price: "2,95 €" },
      { name: "Farofias", price: "4,50 €" },
      { name: "Salada De Frutas", price: "2,95 €" },
      { name: "Maçã Assada", price: "2,95 €" },
      { name: "Abacaxi", price: "4,50 €" },
      { name: "Laranja Descascada", price: "2,50 €" },
      { name: "Manga/Papaia", price: "4,50 €" },
      { name: "Kiwi", price: "2,50 €" },
    ],
  },
  {
    title: "Gelados",
    items: [
      { name: "Haribo Ou Vianetta", price: "2,50 €" },
      { name: "Dragon Ball", price: "3,50 €" },
      { name: "Gelado Hot Wheels / Barbie", price: "4,00 €" },
      { name: "Romântica (Fatia)", price: "4,00 €" },
    ],
  },
  {
    title: "Ementas Semanais",
    items: [
      { name: "Segunda — Pataniscas De Bacalhau C/ Arroz De Tomate" },
      { name: "Segunda — Lombo De Porco Assado À Padeiro Recheado C/ Farinheira" },
      { name: "Terça — Arroz De Tamboril, Com Gambas" },
      { name: "Terça — Pato Assado No Forno À Padeiro" },
      { name: "Quarta — Bacalhau À Brás" },
      { name: "Quarta — Cozido À Antiga Portuguesa" },
      { name: "Quarta — Bochechas De Porco Assadas No Forno" },
      { name: "Sexta — Feijoada À Transmontana" },
      { name: "Sexta — Arroz De Polvo" },
      { name: "Sexta — Leitão Assado De Negrais" },
      { name: "Sábado — Feijoada De Polvo C/ Gambas E Cogumelos Frescos" },
      { name: "Sábado — Cozido À Antiga Portuguesa" },
      { name: "Domingo — Bacalhau C/ Natas C/ Espinafres" },
      { name: "Domingo — Cabrito Assado No Forno À Padeiro" },
      { name: "Domingo — Arroz De Pato Gratinado" },
    ],
  },
];
