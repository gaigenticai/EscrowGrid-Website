import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Architecture from "./pages/Demo";
import Pricing from "./pages/Pricing";
import ROICalculator from "./pages/ROICalculator";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import Construction from "./pages/Construction";
import TradeFinance from "./pages/TradeFinance";
import Developers from "./pages/Developers";
import SecurityCompliance from "./pages/SecurityCompliance";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Platform />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/construction" element={<Construction />} />
          <Route path="/solutions/trade-finance" element={<TradeFinance />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/security-compliance" element={<SecurityCompliance />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
