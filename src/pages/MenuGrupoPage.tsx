import { useState, useRef, useEffect } from "react";
import grupoMesa from "@/assets/grupo-mesa.jpg";
import grupoSangria from "@/assets/grupo-sangria.jpg";

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
  const [activeMenu, setActiveMenu] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky.top-0.z-40") as HTMLElement;
    if (header) setHeaderHeight(header.offsetHeight);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveMenu(idx);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (idx: number) => {
    setActiveMenu(idx);
    sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-popover">
      {/* Header */}
      <div className="bg-background py-8 md:py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-2">
          Menus de Grupo
        </h1>
        <p className="text-muted-foreground font-sans">
          Mínimo 15 pessoas · Reserva com 48h de antecedência
        </p>
      </div>

      {/* Sticky menu bar - mobile only */}
      <nav
        className="sticky z-30 bg-foreground shadow-sm lg:hidden"
        style={{ top: `${headerHeight}px` }}
      >
        <div className="max-w-5xl mx-auto flex">
          {ementas.map((ementa, idx) => (
            <button
              key={ementa.title}
              onClick={() => handleTabClick(idx)}
              className={`flex-1 py-3 text-sm font-sans tracking-wider uppercase transition-all ${
                idx === activeMenu
                  ? "text-popover font-semibold border-b-2 border-primary"
                  : "text-popover/70 hover:text-popover"
              }`}
            >
              {ementa.title}
            </button>
          ))}
          <button
            onClick={() => handleTabClick(3)}
            className={`flex-1 py-3 text-sm font-sans tracking-wider uppercase transition-all ${
              activeMenu === 3
                ? "text-popover font-semibold border-b-2 border-primary"
                : "text-popover/70 hover:text-popover"
            }`}
          >
            Normas
          </button>
        </div>
      </nav>

      {/* Hero image */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={grupoMesa}
            alt="Mesa de grupo com pratos tradicionais"
            width={1280}
            height={512}
            className="w-full h-48 md:h-72 object-cover"
          />
        </div>
      </div>

      {/* Ementas */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ementas.map((ementa, idx) => (
            <div
              key={ementa.title}
              ref={(el) => (sectionRefs.current[idx] = el)}
              className="scroll-mt-40 border border-foreground/10 rounded-lg p-6 bg-popover"
            >
              <div className="text-center mb-5">
                <h2 className="text-xl font-serif tracking-wide mb-1">{ementa.title}</h2>
                <span className="text-3xl font-serif font-semibold text-primary">{ementa.price}</span>
                <span className="block text-xs text-muted-foreground mt-1">por pessoa</span>
              </div>

              <div className="space-y-4">
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
                  <div className="pt-3 border-t border-foreground/10">
                    <p className="text-sm text-foreground font-medium">{ementa.extras}</p>
                  </div>
                )}

                {ementa.sameAs && (
                  <div className="pt-3 border-t border-foreground/10">
                    <p className="text-xs text-muted-foreground italic">{ementa.sameAs}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sangria image */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src={grupoSangria} alt="Sangria de fruta" loading="lazy" width={1280} height={512} className="w-full h-48 md:h-64 object-cover" />
        </div>
      </div>

      {/* Normas */}
      <div ref={(el) => (sectionRefs.current[3] = el)} className="scroll-mt-40 max-w-5xl mx-auto px-6 pb-12">
        <div className="border border-foreground/10 rounded-lg p-6 md:p-8 bg-popover">
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
    </div>
  );
};

export default MenuGrupoPage;
