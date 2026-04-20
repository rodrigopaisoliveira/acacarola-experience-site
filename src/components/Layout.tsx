import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import logoWhite from "@/assets/logo-cacarola-white.png";
import WhatsAppButton from "./WhatsAppButton";
import WhatsAppGroupPopup from "./WhatsAppGroupPopup";

const TripadvisorIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="8.5" cy="14" r="2.5" stroke="#00AF87" strokeWidth="1.5"/>
    <circle cx="15.5" cy="14" r="2.5" stroke="#00AF87" strokeWidth="1.5"/>
    <circle cx="8.5" cy="14" r="1" fill="#00AF87"/>
    <circle cx="15.5" cy="14" r="1" fill="#00AF87"/>
    <path d="M6 11c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#00AF87" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M1 11h4M19 11h4" stroke="#00AF87" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 18l-1.5 2M12 18l1.5 2" stroke="#00AF87" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const sidebarLinks = [
  { label: "Início", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Menu de Grupo", to: "/menu-grupo" },
  { label: "Reservas & Encomendas", to: "/reservas" },
];

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40">
        {/* Top Banner */}
        <div className="bg-banner text-banner-foreground text-center py-2 px-4 text-[10px] md:text-sm font-sans tracking-wider md:tracking-widest uppercase flex items-center justify-center gap-2 md:gap-4">
          <span className="hidden sm:inline">Jantem juntos, comemorem melhor –</span>
          <Link to="/reservas" className="font-semibold hover:underline flex items-center gap-1">
            Reserve a sua experiência <span className="text-base">›</span>
          </Link>
        </div>

        {/* Navbar */}
        <nav className="relative flex items-center justify-center py-6 md:py-8 px-6 bg-background border-b border-border/50">
          <button
            onClick={() => setSidebarOpen(true)}
            className="absolute left-6 text-foreground"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.05em] sm:tracking-[0.08em] text-foreground uppercase font-normal whitespace-nowrap">
            A Caçarola
          </Link>
          <a
            href="tel:+351214780048"
            className="absolute right-6 text-foreground hover:text-primary transition-colors"
            aria-label="Ligar para o restaurante"
          >
            <Phone size={22} />
          </a>
        </nav>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="relative w-80 max-w-[85vw] bg-foreground text-background h-full animate-slide-in flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-8 pb-4">
              <span className="font-serif text-lg tracking-[0.05em] text-background">A Caçarola</span>
              <button onClick={() => setSidebarOpen(false)} aria-label="Fechar menu" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors text-background">
                <X size={18} />
              </button>
            </div>

            <div className="h-px bg-background/20 mx-8" />

            <div className="flex-1 px-8 py-6 space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setSidebarOpen(false)}
                  className="block py-3.5 text-base font-sans tracking-wide text-background/70 hover:text-background hover:pl-2 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="p-8 pt-4 border-t border-background/20 space-y-4">
              <div className="flex items-start gap-3 text-sm text-background/60">
                <MapPin size={15} className="mt-0.5 shrink-0 text-background/80" />
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Av. dos Bombeiros Voluntários 18, Pontinha</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/60">
                <Phone size={15} className="shrink-0 text-background/80" />
                <a href="tel:+351214780048" className="hover:text-background transition-colors">21 478 0048</a>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {/* O Outlet renderiza o componente da rota filha aqui */}
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="text-center mb-10">
            <img src={logoWhite} alt="A Caçarola" className="mx-auto w-32 md:w-40 mb-3 translate-x-[16px] md:translate-x-[20px]" />
            <p className="font-sans text-muted-foreground text-xs tracking-widest uppercase">
              Restaurante · Pontinha, Lisboa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10 text-center">
            <div className="space-y-2">
              <MapPin size={18} className="mx-auto text-primary" />
              <p className="font-sans text-sm text-muted-foreground">
                Av. dos Bombeiros Voluntários 18<br />1675-107 Pontinha
              </p>
            </div>
            <div className="space-y-2">
              <Phone size={18} className="mx-auto text-primary" />
              <p className="font-sans text-sm text-muted-foreground">
                <a href="tel:+351214780048" className="hover:text-primary transition-colors">+351 21 478 0048</a>
              </p>
            </div>
            <div className="space-y-2">
              <Clock size={18} className="mx-auto text-primary" />
              <div className="font-sans text-sm text-muted-foreground space-y-0.5">
                <p>Dom–Sex: 12:00–15:00, 19:00–22:00</p>
                <p>Sáb: Encerrado</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-6 flex flex-col items-center gap-5">
            <div className="flex gap-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border text-muted-foreground flex items-center justify-center hover:bg-muted hover:text-foreground transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.tripadvisor.pt" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border text-muted-foreground flex items-center justify-center hover:bg-muted hover:text-foreground transition-colors">
                <TripadvisorIcon size={14} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border text-muted-foreground flex items-center justify-center hover:bg-muted hover:text-foreground transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-muted-foreground font-sans">
              <p>© {new Date().getFullYear()} A Caçarola</p>
              <span className="hidden sm:inline">·</span>
              <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">
                Livro de Reclamações
              </a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <WhatsAppGroupPopup />
    </div>
  );
};

export default Layout;