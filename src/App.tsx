import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RemontTelefonov from "./pages/RemontTelefonov";
import RemontPlanshetov from "./pages/RemontPlanshetov";
import RemontNotebook from "./pages/RemontNotebook";
import RemontAppleWatch from "./pages/RemontAppleWatch";
import Services from "./pages/Services";
import GidrogelevayaPlenka from "./pages/GidrogelevayaPlenka";
import EksklyuzivnieChehli from "./pages/EksklyuzivnieChehli";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main service pages */}
          <Route path="/remont_telefonov" element={<RemontTelefonov />} />
          <Route path="/remont_planshetov" element={<RemontPlanshetov />} />
          <Route path="/remont_notebook" element={<RemontNotebook />} />
          <Route path="/remont-apple-watch" element={<RemontAppleWatch />} />
          
          {/* Additional services */}
          <Route path="/services" element={<Services />} />
          <Route path="/gidrogelevaya_plenka" element={<GidrogelevayaPlenka />} />
          <Route path="/eksklyuzivnie-chehli" element={<EksklyuzivnieChehli />} />
          
          {/* Contact page */}
          <Route path="/contacts" element={<Contacts />} />
          
          {/* Individual brand pages - these will be created later if needed */}
          <Route path="/remont_telefonov/*" element={<RemontTelefonov />} />
          <Route path="/remont_planshetov/*" element={<RemontPlanshetov />} />
          <Route path="/remont_notebook/*" element={<RemontNotebook />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
