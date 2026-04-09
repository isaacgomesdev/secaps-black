import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/LandingPage";
import ProductsPage from "@/pages/ProductsPage";

const queryClient = new QueryClient();

// Como o React não recarrega a página ao trocar de tela, 
// esse rastreador avisa ao Facebook sempre que a URL (/ para /produtos) mudar.
function RouteTracker() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/produtos" component={ProductsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <RouteTracker />
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
