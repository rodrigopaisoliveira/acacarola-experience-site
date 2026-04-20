import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import MenuPage from "./pages/MenuPage";
import ReservarMesaPage from "./pages/ReservarMesaPage";
import MenuGrupoPage from "./pages/MenuGrupoPage";
import NotFound from "./pages/NotFound";

// Mantemos o ScrollToTop para garantir que a página sobe ao mudar de rota
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          {/* Em vez de envolver o Routes, colocamos o Layout como uma rota pai */}
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu-grupo" element={<MenuGrupoPage />} />
            <Route path="/reservas" element={<ReservarMesaPage />} />
            <Route path="/encomendas" element={<ReservarMesaPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;