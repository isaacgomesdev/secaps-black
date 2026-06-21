import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

// Definição de Pixels por Rota/Produto
const PIXEL_MAP: Record<string, string> = {
  "/velmo-black": "943052955324367",
  // "/detox": "1234567890", // Exemplo futuro
};

export default function PixelTracker() {
  const [location] = useLocation();
  const currentPixelId = useRef<string | null>(null);
  const scrollMarks = useRef<Record<number, boolean>>({});

  useEffect(() => {
    if (typeof window === "undefined" || !window.fbq) return;

    // Encontrar qual Pixel usar baseado na rota inicial (ex: começa com /secaps-black)
    let matchedPixelId = null;
    for (const [routePrefix, pixelId] of Object.entries(PIXEL_MAP)) {
      if (location.startsWith(routePrefix)) {
        matchedPixelId = pixelId;
        break;
      }
    }

    // Se estivermos na "Vitrine" (/) ou sem pixel mapeado, não inicializar nada.
    if (!matchedPixelId) {
      return;
    }

    // Inicializar o Pixel apenas se for diferente do atual ou primeira vez
    if (currentPixelId.current !== matchedPixelId) {
      window.fbq("init", matchedPixelId);
      currentPixelId.current = matchedPixelId;
      scrollMarks.current = {}; // resetar scroll marks ao mudar de produto
    }

    // Disparar PageView
    window.fbq("track", "PageView");

    // Lógica de Scroll exclusiva para este Pixel
    const handleScroll = () => {
      const h = document.documentElement;
      const b = document.body;
      const st = "scrollTop";
      const sh = "scrollHeight";
      const percent = Math.round(
        // @ts-ignore
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
      );

      const marks = [25, 50, 75, 90];
      marks.forEach((mark) => {
        if (percent >= mark && !scrollMarks.current[mark]) {
          scrollMarks.current[mark] = true;
          window.fbq("trackCustom", "Scroll", { percent_scrolled: mark });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return null;
}
