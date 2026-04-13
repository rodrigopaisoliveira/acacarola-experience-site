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
import gallerySalad from "@/assets/gallery-salad.jpg";
import galleryPotatoes from "@/assets/gallery-potatoes.jpg";
import galleryFish from "@/assets/gallery-fish.jpg";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";
import interior1 from "@/assets/interior-1.jpg";
import exterior1 from "@/assets/exterior-1.jpg";
import foodDetail1 from "@/assets/food-detail-1.jpg";
import foodDetail2 from "@/assets/food-detail-2.jpg";

const carouselImages = [
  { src: gallerySalad, alt: "Salada fresca" },
  { src: carousel1, alt: "Cozido à portuguesa" },
  { src: foodDetail1, alt: "Peixe grelhado com limão" },
  { src: carousel2, alt: "Picanha grelhada" },
  { src: galleryPotatoes, alt: "Batatas assadas" },
  { src: foodDetail2, alt: "Arroz de marisco" },
  { src: carousel3, alt: "Polvo à lagareiro" },
  { src: carousel4, alt: "Arroz de marisco" },
  { src: galleryFish, alt: "Peixe grelhado" },
  { src: carousel5, alt: "Leite creme" },
  { src: carousel6, alt: "Mousse de chocolate" },
];

const reviews = [
  {
    name: "Revisor de Tripadvisor",
    source: "Tripadvisor",
    rating: 5,
    text: "Fui com amigos, excelente carta de apresentação. Para todos os gostos, desde peixe a carne tudo fresco. Recomendo a picanha!",
  },
  {
    name: "Revisor de Tripadvisor",
    source: "Tripadvisor",
    rating: 5,
    text: "Bem localizado, no centro da Pontinha, com bom serviço, atendimento simpático, boa variedade de pratos, de comida tradicional portuguesa.",
  },
  {
    name: "Kd Bn",
    source: "Google",
    rating: 5,
    text: "Amazing food! Food is so tasty and comes quick. Specially Hot Stone steak. Its come as a raw and you cook it on the stone!",
  },
  {
    name: "Veda Ko",
    source: "Google",
    rating: 4,
    text: "I really enjoyed this place. A very Portuguese restaurant/spot. Seafood was amazing. They have a great variety of traditional dishes.",
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
        <img src={heroBg} alt="Interior acolhedor do Novo Edmundo" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center space-y-10 px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif tracking-[0.15em] sm:tracking-[0.2em] text-primary-foreground uppercase drop-shadow-lg">
            Novo Edmundo
          </h1>
          <Link to="/reservas">
            <Button className="mt-6 rounded-full px-12 py-7 text-base tracking-[0.25em] uppercase bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-sans font-medium shadow-lg">
              Reserve Agora
            </Button>
          </Link>
        </div>
      </section>

      {/* About text only */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-wide">
          Simplicidade e Simpatia
        </h2>
        <p className="text-muted-foreground font-sans leading-relaxed max-w-3xl mx-auto">
          De portas abertas desde 1964, o Novo Edmundo nasceu como "O Café do Vale" — uma das casas mais
          emblemáticas da Pontinha. Em 1994, o espaço foi renovado e dedicado à boa mesa: grelhados, peixe
          fresco, mariscos e doces caseiros, servidos com a simpatia de sempre. Três salas, 135 lugares e
          uma tradição que se mantém viva há mais de 60 anos.
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
                <span className="text-2xl font-serif font-bold">4,2</span>
                <span className="text-muted-foreground font-sans text-sm">/5</span>
              </div>
              <p className="text-xs text-muted-foreground font-sans">Google · 2,3 mil críticas</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="flex items-center gap-2">
                <TripadvisorIcon size={20} />
                <span className="text-2xl font-serif font-bold">3,8</span>
                <span className="text-muted-foreground font-sans text-sm">/5</span>
              </div>
              <p className="text-xs text-muted-foreground font-sans">Tripadvisor · 123 críticas</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {reviews.map((review, i) => (
              <div key={i} className="bg-background rounded-lg p-6 space-y-3">
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
              href="https://www.google.com/maps/place/Novo+Edmundo/@38.7633,-9.2,17z/data=!4m8!3m7!1s0xd1ecce4687c4c0d:0xd74e8fdc7c08398c!8m2!3d38.7633!4d-9.2!9m1!1b1!16s%2Fg%2F11c54h3y5x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="rounded-full px-8 py-5 tracking-wide font-sans gap-2">
                <Star size={16} /> Ver Críticas <ExternalLink size={14} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Interior & Exterior Photos */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden h-64 md:h-80">
            <img src={interior1} alt="Interior acolhedor do Novo Edmundo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" width={1280} height={854} />
          </div>
          <div className="rounded-2xl overflow-hidden h-64 md:h-80">
            <img src={exterior1} alt="Fachada do Novo Edmundo ao entardecer" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" width={1280} height={854} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-primary/5" id="contacto">
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
              title="Localização Novo Edmundo"
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
