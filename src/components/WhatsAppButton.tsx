import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="tel:+351214780048"
      className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl transition-transform hover:scale-110 animate-pulse-subtle"
      aria-label="Ligar para o restaurante"
    >
      <Phone size={28} className="text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;