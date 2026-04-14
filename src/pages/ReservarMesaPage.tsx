import { useState } from "react";
import { Clock, Users, Phone, UtensilsCrossed, ShoppingBag } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ReservarMesaPage = () => {
  const [activeTab, setActiveTab] = useState<"reservar" | "encomendar">("reservar");
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-popover">
      {/* Hero header */}
      <section className="bg-background py-10 md:py-16 text-center border-b border-border/50">
        <h1 className="text-2xl md:text-4xl font-serif tracking-[0.15em] uppercase text-foreground">
          Reservas & Encomendas
        </h1>
      </section>

      {/* Tab switcher */}
      <section className="py-10 px-6 max-w-2xl mx-auto">
        <div className="flex rounded-full bg-foreground/10 p-1.5 gap-1">
          <button
            onClick={() => setActiveTab("reservar")}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-sans tracking-widest uppercase transition-all duration-300 ${
              activeTab === "reservar"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            <UtensilsCrossed size={16} />
            Reservar Mesa
          </button>
          <button
            onClick={() => setActiveTab("encomendar")}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-sans tracking-widest uppercase transition-all duration-300 ${
              activeTab === "encomendar"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            <ShoppingBag size={16} />
            Encomendar
          </button>
        </div>
      </section>

      {/* Tab content */}
      {activeTab === "reservar" ? (
        <>
          {/* TheFork Widget */}
          <section className="pb-16 px-4">
            <div className="max-w-2xl mx-auto bg-popover rounded-2xl border border-foreground/10 overflow-hidden shadow-sm">
              <div className="text-center py-6 border-b border-foreground/10">
                <h2 className="font-serif text-lg tracking-[0.1em] uppercase text-foreground">
                  Escolha a data e hora
                </h2>
              </div>
              <iframe
                src="https://module.lafourchette.com/pt_PT/module/860208-b498f"
                style={{ width: "100%", minHeight: "600px", border: "none" }}
                title="Reservar mesa no TheFork"
                allow="geolocation"
              />
            </div>
          </section>
        </>
      ) : (
        <section className="px-6 pb-16 max-w-lg mx-auto text-center">
          <div className="bg-popover rounded-2xl border border-foreground/10 p-10 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Phone size={28} className="text-primary" />
            </div>
            <h2 className="font-serif text-xl tracking-[0.1em] uppercase mb-3">
              Faça a sua encomenda
            </h2>
            <p className="text-muted-foreground text-sm font-sans mb-8 leading-relaxed">
              Ligue-nos para fazer a sua encomenda para entrega ou takeaway.
            </p>

            {isMobile ? (
              <a
                href="tel:+351214780048"
                className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-10 py-4 text-sm font-sans tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors shadow-md"
              >
                <Phone size={18} />
                Ligar Agora
              </a>
            ) : (
              <div className="space-y-4">
                <p className="text-2xl font-serif tracking-wider text-foreground">
                  21 478 0048
                </p>
                <p className="text-xs text-muted-foreground font-sans tracking-widest uppercase">
                  Terça a Domingo · 12h–23h
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default ReservarMesaPage;
