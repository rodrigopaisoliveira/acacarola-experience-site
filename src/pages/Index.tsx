import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Users, Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const GoogleIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

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
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logoTransparent from "@/assets/logo-cacarola-transparent.png";
import logoWhite from "@/assets/logo-cacarola-white.png";
import carouselNew1 from "@/assets/carousel-new-1.jpg";
import carouselNew2 from "@/assets/carousel-new-2.jpg";
import carouselNew3 from "@/assets/carousel-new-3.jpg";
import carouselNew4 from "@/assets/carousel-new-4.jpg";
import carouselNew5 from "@/assets/carousel-new-5.jpg";
import carouselNew6 from "@/assets/carousel-new-6.jpg";
import carouselNew7 from "@/assets/carousel-new-7.jpg";
import carouselNew8 from "@/assets/carousel-new-8.jpg";
import carouselNew9 from "@/assets/carousel-new-9.jpg";
import carouselNew10 from "@/assets/carousel-new-10.jpg";
import interior1 from "@/assets/interior-1.jpg";
import exterior1 from "@/assets/exterior-1.jpg";

const carouselImages = [
  { src: carouselNew1, alt: "Peixe grelhado com batatas e legumes" },
  { src: carouselNew2, alt: "Carne estufada com puré e grelos" },
  { src: carouselNew3, alt: "Ervilhas com ovos escalfados" },
  { src: carouselNew4, alt: "Carne com batatas e grelos" },
  { src: carouselNew5, alt: "Carne estufada com puré" },
  { src: carouselNew6, alt: "Bacalhau gratinado com puré" },
  { src: carouselNew7, alt: "Peixe cozido com legumes" },
  { src: carouselNew8, alt: "Costeleta grelhada com ovo" },
  { src: carouselNew9, alt: "Carne assada com batatas fritas" },
  { src: carouselNew10, alt: "Peixinhos fritos com arroz de legumes" },
];

const reviews = [
  {
    name: "Luís F",
    source: "Tripadvisor",
    rating: 5,
    text: "Bom restaurante. Fui um pouco à descoberta e com alguma incerteza, mas gostei da escolha. Staff muito atencioso e eficaz, comida bem confeccionada e preços dentro da normalidade. Aconselho este espaço. Bom naco na pedra...",
  },
  {
    name: "Julietaf",
    source: "Tripadvisor",
    rating: 5,
    text: "Se gosta de comida portuguesa recomendo este restaurante da Pontinha. Com estacionamento ao pé, é um bom sítio para degustar pratos antigos que eram cozinhados pelas nossas avós.",
  },
  {
    name: "ruijesoliv",
    source: "Tripadvisor",
    rating: 4,
    text: "Comida caseira bem cozinhada, bons grelhados a preços honestos, serviço rápido e simpatia dos funcionários.",
  },
  {
    name: "gradeiro",
    source: "Tripadvisor",
    rating: 5,
    text: "Nada melhor que um grupo de amigos em torno de uma refeição tradicional, honesta e muito verdadeira, servida com simplicidade mas com a simpatia pessoal e profissional que nos faz querer voltar. Parabéns a toda a equipa!",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const slidesPerView = isMobile ? 1 : 3;
  const maxSlide = carouselImages.length - slidesPerView;

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  }, [maxSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  }, [maxSlide]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Interior acolhedor do A Caçarola" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center space-y-6 px-6">
          <img src={logoWhite} alt="A Caçarola — Restaurante" className="mx-auto w-64 sm:w-72 md:w-96 lg:w-[28rem] drop-shadow-lg translate-x-[28px] sm:translate-x-[32px] md:translate-x-[42px]" width={400} height={400} />
          <Link to="/reservas">
            <Button className="mt-6 border-2 border-primary-foreground/80 rounded-full px-10 py-6 text-sm tracking-[0.2em] uppercase bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-serif shadow-none">
              Reserve Agora
            </Button>
          </Link>
        </div>
      </section>

      {/* About text only */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-wide">
          Onde Cada Refeição Sabe a Casa
        </h2>
        <p className="text-muted-foreground font-sans leading-relaxed max-w-3xl mx-auto">
          No Restaurante A Caçarola, recebemo-lo como família no coração da Pontinha. Servimos pratos
          tradicionais portugueses com porções generosas, tal como os nossos clientes habituais apreciam. O
          nosso espaço acolhedor e descontraído é perfeito para partilhar momentos especiais, seja num
          almoço em família, num encontro de grupo ou numa celebração privada. Estamos aqui para tornar
          cada ocasião autêntica, confortável e memorável.
        </p>
      </section>

      {/* Photo Carousel - Full width like Caçarola */}
      <section className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
        >
          {carouselImages.map((img, i) => (
            <div key={i} className="min-w-full md:min-w-[33.333%] h-[60vh] md:h-[70vh]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={960}
                height={960}
              />
            </div>
          ))}
        </div>
        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-foreground/80 text-background flex items-center justify-center hover:bg-foreground transition-colors z-10"
          aria-label="Foto anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-foreground/80 text-background flex items-center justify-center hover:bg-foreground transition-colors z-10"
          aria-label="Próxima foto"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-6 bg-card" id="avaliacoes">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-3 tracking-wide">
            O Que Dizem sobre Nós
          </h2>
          <div className="flex items-center justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="flex items-center gap-2">
                <GoogleIcon size={20} />
                <span className="text-2xl font-serif font-bold">4,3</span>
                <span className="text-muted-foreground font-sans text-sm">/5</span>
              </div>
              <p className="text-xs text-muted-foreground font-sans">Google · 395 críticas</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="flex items-center gap-2">
                <TripadvisorIcon size={20} />
                <span className="text-2xl font-serif font-bold">4,2</span>
                <span className="text-muted-foreground font-sans text-sm">/5</span>
              </div>
              <p className="text-xs text-muted-foreground font-sans">Tripadvisor · 21 críticas</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {reviews.map((review, i) => (
              <div key={i} className="bg-popover rounded-lg p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-sans font-medium text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground font-sans flex items-center gap-1">
                      {review.source === "Google" ? <GoogleIcon size={12} /> : <TripadvisorIcon size={12} />}
                      Crítica de {review.source}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.tripadvisor.pt/Restaurant_Review-g3135840-d5959931-Reviews-Restaurante_a_Cacarola-Odivelas_Lisbon_District_Central_Portugal.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full px-8 py-5 tracking-wide font-sans gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Star size={16} className="text-secondary" /> Ver Críticas <ExternalLink size={14} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Interior & Exterior Photos */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden h-64 md:h-80">
            <img src={interior1} alt="Interior acolhedor do A Caçarola" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" width={1280} height={854} />
          </div>
          <div className="rounded-2xl overflow-hidden h-64 md:h-80">
            <img src={exterior1} alt="Fachada do A Caçarola ao entardecer" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" width={1280} height={854} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-popover" id="contacto">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-primary mb-4">Venha conhecer-nos</p>
          <h2 className="text-3xl md:text-5xl font-serif mb-4 tracking-wide">
            A sua mesa está à espera
          </h2>
          <p className="text-muted-foreground font-sans text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Traga a família, os amigos, ou venha celebrar um momento especial.
          </p>

          <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden bg-muted mb-10 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.2!2d-9.2138!3d38.7633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecce4687c4c0d%3A0xd74e8fdc7c08398c!2sNovo%20Edmundo!5e0!3m2!1spt-PT!2spt!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização A Caçarola"
            />
          </div>

          <Link to="/reservas">
            <Button className="rounded-full px-10 py-7 tracking-[0.15em] uppercase font-sans bg-primary text-primary-foreground hover:bg-primary/90 text-sm gap-3 shadow-md">
              <Users size={18} />
              Reservar Mesa
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
