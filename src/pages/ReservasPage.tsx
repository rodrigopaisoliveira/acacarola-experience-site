import { ExternalLink } from "lucide-react";

const ReservasPage = () => {
  return (
    <div className="min-h-screen bg-popover">
      {/* Hero header */}
      <section className="bg-background py-16 md:py-24 text-center border-b border-border/50">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-[0.15em] uppercase">
          Entrega e Levantamento
        </h1>
      </section>

      {/* How to order */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-xl md:text-2xl font-serif tracking-[0.1em] uppercase mb-10">
          Como gostaria de encomendar?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/351214780048?text=Olá, gostaria de fazer uma encomenda"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground text-popover px-10 py-5 text-sm font-sans tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors min-w-[200px] inline-block text-center"
          >
            Entrega
          </a>
          <a
            href="https://wa.me/351214780048?text=Olá, gostaria de encomendar para takeaway"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground text-popover px-10 py-5 text-sm font-sans tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors min-w-[200px] inline-block text-center"
          >
            Takeaway
          </a>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl font-serif tracking-[0.05em] uppercase mb-8">
          Disponível com um dos nossos parceiros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {[
            { name: "Bolt Food" },
            { name: "Uber Eats" },
          ].map((partner) => (
            <div key={partner.name} className="flex items-center justify-between py-6 px-4 border-t border-foreground/10">
              <div className="flex items-center gap-4">
                <span className="font-serif text-base font-bold">{partner.name}</span>
                <span className="font-sans text-sm tracking-[0.1em] uppercase text-muted-foreground">{partner.name.toUpperCase()}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
                <ExternalLink size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReservasPage;
