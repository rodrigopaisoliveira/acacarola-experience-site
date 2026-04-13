import { useState, useEffect } from "react";
import { X } from "lucide-react";

const WhatsAppGroupPopup = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("whatsapp-group-dismissed")) {
      setDismissed(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("whatsapp-group-dismissed", "true");
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 animate-fade-in">
      <div className="bg-card border border-border/50 rounded-2xl shadow-2xl p-5 max-w-[300px] relative">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#25D366" }}>
            <svg viewBox="0 0 32 32" width="20" height="20" fill="white">
              <path d="M16.004 2.003C8.27 2.003 2.004 8.27 2.004 16c0 2.474.646 4.893 1.876 7.024L2 30l7.168-1.88A13.94 13.94 0 0 0 16.004 30C23.73 30 30 23.73 30 16S23.73 2.003 16.004 2.003Zm0 25.494a11.45 11.45 0 0 1-5.84-1.6l-.418-.248-4.34 1.14 1.16-4.24-.273-.434a11.44 11.44 0 0 1-1.756-6.112c0-6.336 5.16-11.496 11.5-11.496 6.336 0 11.496 5.16 11.496 11.496 0 6.34-5.192 11.494-11.528 11.494Zm6.3-8.607c-.346-.173-2.048-1.01-2.366-1.126-.318-.116-.548-.173-.78.173-.23.346-.896 1.126-1.098 1.358-.202.23-.404.26-.75.087-.346-.173-1.46-.538-2.782-1.716-1.028-.916-1.722-2.048-1.924-2.394-.202-.346-.022-.534.152-.706.156-.156.346-.404.52-.606.172-.202.228-.346.344-.577.116-.23.058-.433-.03-.606-.086-.173-.778-1.876-1.066-2.57-.28-.674-.566-.582-.78-.594l-.664-.01c-.23 0-.606.087-.924.433-.318.346-1.212 1.184-1.212 2.888s1.242 3.35 1.414 3.58c.173.232 2.446 3.734 5.926 5.238.828.358 1.474.57 1.978.73.832.264 1.588.226 2.186.138.666-.1 2.048-.838 2.338-1.648.29-.81.29-1.502.202-1.648-.086-.144-.318-.23-.664-.404Z"/>
            </svg>
          </div>
          <h3 className="font-serif text-sm tracking-wide uppercase leading-tight">
            Pratos do Dia
          </h3>
        </div>

        <p className="text-muted-foreground text-xs font-sans leading-relaxed mb-4">
          Junte-se ao nosso grupo WhatsApp e receba diariamente os pratos do dia!
        </p>

        <a
          href="https://chat.whatsapp.com/GRUPO_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center rounded-full py-2.5 text-sm font-sans tracking-widest uppercase transition-colors"
          style={{ backgroundColor: "#25D366", color: "white" }}
        >
          Entrar no Grupo
        </a>
      </div>
    </div>
  );
};

export default WhatsAppGroupPopup;
