import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ReservarMesaPage = () => {
  const [activeTab, setActiveTab] = useState<"reservar" | "encomendar">("reservar");
  const isMobile = useIsMobile();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky.top-0.z-40") as HTMLElement;
    if (header) setHeaderHeight(header.offsetHeight);
  }, []);

  return (
    <div className="min-h-screen bg-popover">
      {/* Sticky tab bar like menu */}
      <nav
        className="sticky z-30 bg-foreground shadow-sm"
        style={{ top: `${headerHeight}px` }}
      >
        <div className="max-w-5xl mx-auto flex">
          <button
            onClick={() => setActiveTab("reservar")}
            className={`flex-1 py-3 text-sm md:text-base font-sans tracking-wider uppercase transition-all ${
              activeTab === "reservar"
                ? "text-popover font-semibold border-b-2 border-primary"
                : "text-popover/70 hover:text-popover"
            }`}
          >
            Reservar Mesa
          </button>
          <button
            onClick={() => setActiveTab("encomendar")}
            className={`flex-1 py-3 text-sm md:text-base font-sans tracking-wider uppercase transition-all ${
              activeTab === "encomendar"
                ? "text-popover font-semibold border-b-2 border-primary"
                : "text-popover/70 hover:text-popover"
            }`}
          >
            Encomendar
          </button>
        </div>
      </nav>

      {/* Tab content */}
      {activeTab === "reservar" ? (
        <section className="py-10 px-4">
          <div className="max-w-2xl mx-auto bg-popover rounded-2xl border border-foreground/10 overflow-hidden shadow-sm">
            <div className="text-center py-6 border-b border-foreground/10">
              <h2 className="font-serif text-lg tracking-[0.1em] uppercase text-foreground">
                Escolha a data e hora
              </h2>
            </div>
            <iframe
              src="https://widget.thefork.com/35b66897-a978-4da8-aa4d-4258c48ccf50"
              style={{ width: "100%", minHeight: "600px", border: "none" }}
              title="Reservar mesa no TheFork"
              allow="geolocation"
            />
          </div>
        </section>
      ) : (
        <section className="py-10 px-6 max-w-lg mx-auto text-center">
          <div className="bg-popover rounded-2xl border border-foreground/10 p-10 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Phone size={28} className="text-primary" />
            </div>
            <h2 className="font-serif text-xl tracking-[0.1em] uppercase mb-3">
              Faça a sua encomenda
            </h2>
            <p className="text-muted-foreground text-sm font-sans mb-8 leading-relaxed">
              Ligue-nos para fazer a sua encomenda para takeaway.
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
