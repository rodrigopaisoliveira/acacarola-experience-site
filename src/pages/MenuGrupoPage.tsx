import grupoMesa from "@/assets/grupo-mesa.jpg";
import grupoBacalhau from "@/assets/grupo-bacalhau.jpg";

const ementas = [
  {
    title: "Ementa 1",
    price: "30,00 €",
    entradas: "Pão, manteiga, queijo alentejano, presunto, azeitonas e salgadinhos",
    pratos: [
      { label: "1º Prato", desc: "Bacalhau c/ Natas gratinado c/ camarão" },
      { label: "2º Prato", desc: "Naco na Pedra", extra: "Acompanhamentos: batata frita, arroz, feijão preto e couve salteada" },
    ],
    includes: "Bebidas, 1 sobremesa à escolha e café",
  },
  {
    title: "Ementa 2",
    price: "35,00 €",
    entradas: "Pão, manteiga, queijo alentejano, presunto, gambas à Guilho, azeitonas e salgadinhos",
    pratos: [
      { label: "1º Prato", desc: "Bacalhau à Brás" },
      { label: "2º Prato", desc: "Picanha Fatiada Grelhada c/ abacaxi", extra: "Acompanhamentos: batata frita, arroz, feijão preto e couve salteada" },
    ],
    includes: "Bebidas, 1 sobremesa à escolha e café",
  },
  {
    title: "Ementa 3",
    price: "40,00 €",
    entradas: "Camarão cozido (100g/pessoa), pão, manteiga, queijo alentejano, azeitonas, presunto e salgadinhos",
    pratos: [
      { label: "Prato", desc: "Churrasco Misto de Porco Preto com Picanha", extra: "Acompanhamentos: batata frita, arroz, feijão preto e couve salteada" },
    ],
    includes: "Bebidas, 1 sobremesa à escolha e café",
  },
];

const normas = [
  "Bebidas incluídas: vinho alentejano \"Trinca Bolotas\", sangria, refrigerantes, águas e cerveja a copo. Média por pessoa: ~0,75L.",
  "A escolha do menu tem que ser feita com antecedência mínima de 24 horas.",
  "Só é permitido consumir bebidas adquiridas no estabelecimento.",
  "Nos menus que têm incluído prato de peixe e prato de carne, estes são servidos sequencialmente.",
  "Sobremesas (1 por pessoa à escolha): leite creme, mousse de chocolate, mousse de manga, baba de camelo, salada de frutas ou gelado Vienetta.",
  "Todas as pessoas do grupo têm de optar pelo mesmo menu.",
  "Mínimo de 10 pessoas.",
  "Crianças até 4 anos não pagam. Dos 5 aos 9 anos pagam 50%. Reserva-se o direito de pedir identificação.",
  "I.V.A. incluído à taxa legal. Temos Livro de Reclamações.",
];

const MenuGrupoPage = () => {
  return (
    <div className="py-12 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif text-center tracking-wide mb-2">
        Menus de Grupo
      </h1>
      <p className="text-center text-muted-foreground font-sans mb-12">
        Mínimo 10 pessoas · Reserva com 24h de antecedência
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

              <div className="pt-3 border-t border-border">
                <p className="text-sm text-muted-foreground">{ementa.includes}</p>
              </div>
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
