import { useState, useEffect, useRef } from "react";
import { menuCategories } from "@/data/menuData";
import menuEntradas from "@/assets/menu-entradas.jpg";
import menuEspecialidades from "@/assets/menu-especialidades.jpg";
import menuSobremesas from "@/assets/menu-sobremesas.jpg";

// Images to show after specific sections (by index)
const sectionImages: Record<number, { src: string; alt: string }> = {
  0: { src: menuEntradas, alt: "Tábua de entradas tradicionais" },
  2: { src: menuEspecialidades, alt: "Especialidades da casa" },
  4: { src: menuSobremesas, alt: "Sobremesas caseiras" },
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement | null>(null);
  const isClickScrolling = useRef(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Measure sticky header height
  useEffect(() => {
    const header = document.querySelector(".sticky.top-0.z-40") as HTMLElement;
    if (header) setHeaderHeight(header.offsetHeight);
    const onResize = () => {
      if (header) setHeaderHeight(header.offsetHeight);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Auto-scroll the tab bar to keep active tab visible
  useEffect(() => {
    const tab = tabRefs.current[activeCategory];
    const nav = navRef.current;
    if (tab && nav) {
      const navRect = nav.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      const scrollLeft = nav.scrollLeft + tabRect.left - navRect.left - navRect.width / 2 + tabRect.width / 2;
      nav.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeCategory]);

  const handleTabClick = (idx: number) => {
    setActiveCategory(idx);
    isClickScrolling.current = true;
    sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => { isClickScrolling.current = false; }, 800);
  };

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveCategory(idx);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  // Animate items on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-4");
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0.1 }
    );
    document.querySelectorAll(".menu-item-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-popover">
      <div className="pt-10 pb-4 px-4 text-center bg-background">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-1">Menu</h1>
        <p className="text-muted-foreground font-sans text-sm">Cozinha Tradicional Portuguesa</p>
      </div>

      {/* Sticky category bar */}
      <nav
        className="sticky z-30 bg-foreground backdrop-blur-sm shadow-sm border-b border-foreground/10"
        style={{ top: `${headerHeight}px` }}
      >
        <div className="max-w-5xl mx-auto">
          <div
            ref={navRef}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex min-w-max px-4 py-0">
              {menuCategories.map((cat, idx) => (
                <button
                  key={cat.title}
                  ref={(el) => (tabRefs.current[idx] = el)}
                  onClick={() => handleTabClick(idx)}
                  className={`font-sans text-sm md:text-base px-4 py-3 transition-all whitespace-nowrap ${
                    idx === activeCategory
                      ? "text-popover font-semibold border-b-2 border-primary"
                      : "text-popover/70 hover:text-popover"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* All sections */}
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        {menuCategories.map((category, catIdx) => (
          <div key={category.title}>
            <div
              ref={(el) => (sectionRefs.current[catIdx] = el)}
              className="scroll-mt-40"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-center tracking-wide mb-8 text-foreground menu-item-animate opacity-0 translate-y-4 transition-all duration-500">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="menu-item-animate opacity-0 translate-y-4 transition-all duration-500 flex justify-between items-baseline gap-4 py-3.5 border-b border-foreground/10"
                    style={{ transitionDelay: `${(idx % 6) * 60}ms` }}
                  >
                    <div className="flex-1">
                      <span className="font-sans font-medium text-foreground">{item.name}</span>
                      {item.description && (
                        <span className="block text-sm text-muted-foreground font-sans italic mt-0.5">
                          {item.description}
                        </span>
                      )}
                    </div>
                    {item.price && (
                      <span className="font-sans text-primary whitespace-nowrap font-semibold">
                        {item.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Image after select sections */}
            {sectionImages[catIdx] && (
              <div className="mt-10 rounded-xl overflow-hidden shadow-lg menu-item-animate opacity-0 translate-y-4 transition-all duration-700">
                <img
                  src={sectionImages[catIdx].src}
                  alt={sectionImages[catIdx].alt}
                  loading="lazy"
                  width={1280}
                  height={512}
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
