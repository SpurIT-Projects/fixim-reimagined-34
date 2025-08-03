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
          <Route path="/remont_telefonov.html" element={<RemontTelefonov />} />
          <Route path="/remont_planshetov.html" element={<RemontPlanshetov />} />
          <Route path="/remont_notebook.html" element={<RemontNotebook />} />
          <Route path="/remont-apple-watch.html" element={<RemontAppleWatch />} />
          
          {/* Additional services */}
          <Route path="/services.html" element={<Services />} />
          <Route path="/gidrogelevaya_plenka.html" element={<GidrogelevayaPlenka />} />
          <Route path="/eksklyuzivnie-chehli.html" element={<EksklyuzivnieChehli />} />
          
          {/* Contact page */}
          <Route path="/contacts.html" element={<Contacts />} />
          
          {/* Individual brand pages - exact URLs from original site */}
          <Route path="/remont_telefonov/iphone.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/samsung.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/xiaomi.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/huawei.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/nokia.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/lg.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/sony.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/htc.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/meizu.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/lenovo.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/zte.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/realme.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/vivo.html" element={<RemontTelefonov />} />
          <Route path="/remont_telefonov/poco.html" element={<RemontTelefonov />} />
          <Route path="/remont_planshetov/ipad.html" element={<RemontPlanshetov />} />
          <Route path="/remont_planshetov/samsung.html" element={<RemontPlanshetov />} />
          <Route path="/remont_notebook/macbook.html" element={<RemontNotebook />} />
          <Route path="/remont_notebook/all_brends.html" element={<RemontNotebook />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
