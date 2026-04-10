import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/LandingPage";
import ProductsPage from "@/pages/ProductsPage";
import MarketplaceHome from "@/pages/MarketplaceHome";
import PixelTracker from "@/PixelTracker";

const queryClient = new QueryClient();

// O RouteTracker antigo foi removido, pois agora temos o PixelTracker inteligente

function Router() {
  return (
    <Switch>
      {/* Vitrine Global */}
      <Route path="/" component={MarketplaceHome} />
      
      {/* Secaps Black Produto */}
      <Route path="/secaps-black" component={LandingPage} />
      <Route path="/secaps-black/produtos" component={ProductsPage} />
      
      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <PixelTracker />
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}


export default App;
