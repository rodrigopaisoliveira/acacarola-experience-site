import grupoMesa from "@/assets/grupo-mesa.jpg";
import grupoBacalhau from "@/assets/grupo-bacalhau.jpg";

const ementas = [
  {
    title: "Menu 1",
    price: "25€",
    entradas: "Pão, manteigas, queijo fresco e queijo seco",
    pratos: [
      { label: "1º Prato", desc: "Feijoada de Gambas" },
      { label: "2º Prato", desc: "Lombo de Porco Assado no Forno", extra: "Acompanhado por batatas fritas, arroz e legumes" },
    ],
    bebidas: "Refrigerantes e água à discrição; vinho no jarro (branca ou tinta) e sangria têm um limite de 75cl p/adulto",
    sobremesa: "Doces: Mousse de Chocolate/Manga, Leite Creme, Bolo de Bolacha. Frutas: Laranja, Abacaxi, Kiwi",
    extras: "1 Café por Pessoa",
  },
  {
    title: "Menu 2",
    price: "28€",
    entradas: "Pão, manteigas, queijo fresco, queijo seco e entrada mista",
    pratos: [
      { label: "1º Prato", desc: "Bacalhau à Brás" },
      { label: "2º Prato", desc: "Churrasquinho de Porco", extra: "Salsichas/Lagartinhos/Bifes de Porco" },
    ],
    sameAs: "Os restantes itens são iguais ao Menu 1",
  },
  {
    title: "Menu 3",
    price: "38€",
    entradas: "Pão, manteigas, queijo fresco, queijo seco e gambas à Guilho",
    pratos: [
      { label: "1º Prato", desc: "Massinha de Peixe" },
      { label: "2º Prato", desc: "Picanha e Secretos de Porco Preto c/ Abacaxi" },
    ],
    sameAs: "Os restantes itens são iguais ao Menu 1",
  },
];

const normas = [
  "Mínimo de 15 pessoas.",
  "Todos devem optar pelo mesmo menu.",
  "A reserva deve ser feita com, pelo menos, 48h de antecedência.",
  "Crianças até aos 4 anos não pagam.",
  "Crianças dos 5 aos 9 anos pagam metade do valor do menu.",
  "Reserva-se o direito de pedir o Cartão de Cidadão para confirmação da identidade dos mesmos.",
  "I.V.A. incluído à taxa legal.",
  "Temos Livro de Reclamações.",
];

const MenuGrupoPage = () => {
  return (
    <div className="py-12 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif text-center tracking-wide mb-2">
        Menus de Grupo
      </h1>
      <p className="text-center text-muted-foreground font-sans mb-12">
        Mínimo 15 pessoas · Reserva com 48h de antecedência
      </p>

      {/* Hero image */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-12">
        <img
          src={grupoMesa}
          alt="Mesa de grupo com pratos tradicionais"
          width={1280}
          height={512}
          className="w-full h-48 md:h-72 object-cover"
        />
      </div>

      {/* Ementas grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {ementas.map((ementa) => (
          <div
            key={ementa.title}
            className="border border-border rounded-lg p-6 flex flex-col bg-card"
          >
            <div className="text-center mb-5">
              <h2 className="text-xl font-serif tracking-wide mb-1">{ementa.title}</h2>
              <span className="text-3xl font-serif font-semibold text-primary">{ementa.price}</span>
              <span className="block text-xs text-muted-foreground mt-1">por pessoa</span>
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">Entradas</h3>
                <p className="text-sm text-muted-foreground">{ementa.entradas}</p>
              </div>

              {ementa.pratos.map((prato) => (
                <div key={prato.label}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">{prato.label}</h3>
                  <p className="text-sm text-foreground font-medium">{prato.desc}</p>
                  {prato.extra && (
                    <p className="text-xs text-muted-foreground italic mt-0.5">{prato.extra}</p>
                  )}
                </div>
              ))}

              {ementa.bebidas && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">Bebidas</h3>
                  <p className="text-sm text-muted-foreground">{ementa.bebidas}</p>
                </div>
              )}

              {ementa.sobremesa && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">Sobremesa</h3>
                  <p className="text-sm text-muted-foreground">{ementa.sobremesa}</p>
                </div>
              )}

              {ementa.extras && (
                <div className="pt-3 border-t border-border">
                  <p className="text-sm text-foreground font-medium">{ementa.extras}</p>
                </div>
              )}

              {ementa.sameAs && (
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">{ementa.sameAs}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Food image */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-12">
        <img
          src={grupoBacalhau}
          alt="Bacalhau gratinado com natas"
          loading="lazy"
          width={1280}
          height={512}
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      {/* Normas */}
      <div className="border border-border rounded-lg p-6 md:p-8 bg-card">
        <h2 className="text-xl md:text-2xl font-serif text-center tracking-wide mb-6">
          Normas para os Menus de Grupo
        </h2>
        <ul className="space-y-3 max-w-3xl mx-auto">
          {normas.map((norma, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>{norma}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuGrupoPage;
