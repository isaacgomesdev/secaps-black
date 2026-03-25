import { Link } from "wouter";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "558540420501";

const makeWA = (kitName: string) => {
  const msg = encodeURIComponent(`Olá! Quero comprar o ${kitName} do Secaps Black!`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};
const WA_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Quero saber mais sobre o Secaps Black!")}`;

const WA_SVG = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function useCountdown(initialSeconds: number) {
  const [secs, setSecs] = useState(initialSeconds);
  useEffect(() => {
    const t = setInterval(() => setSecs(s => (s <= 0 ? initialSeconds : s - 1)), 1000);
    return () => clearInterval(t);
  }, [initialSeconds]);
  return { h: Math.floor(secs / 3600), m: Math.floor((secs % 3600) / 60), s: secs % 60 };
}

function TopCountdownBanner() {
  const { h, m, s } = useCountdown(2 * 3600 + 37 * 60 + 14);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="bg-[#090f0c] border-b border-red-900/60 py-2 px-3">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span className="flex items-center gap-1.5 text-red-400 text-[11px] font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
          Promoção encerra em
        </span>
        <div className="flex items-center gap-1">
          {[{ val: pad(h), lbl: "h" }, { val: pad(m), lbl: "m" }, { val: pad(s), lbl: "s" }].map((u, i) => (
            <span key={u.lbl} className="flex items-center gap-1">
              {i > 0 && <span className="text-red-600 font-black text-sm">:</span>}
              <span className="bg-black/70 border border-red-800/50 rounded px-1.5 py-0.5 text-white font-black text-sm tabular-nums min-w-[28px] text-center">{u.val}</span>
              <span className="text-gray-600 text-[9px] uppercase">{u.lbl}</span>
            </span>
          ))}
        </div>
        <span className="text-gray-500 text-[11px] hidden sm:block">•</span>
        <span className="text-gray-400 text-[11px]">⚠️ Apenas <strong className="text-red-400">últimas unidades</strong></span>
      </div>
    </div>
  );
}

const kits = [
  {
    id: 1, name: "Kit 1 Mês", bottles: 1, doses: 30,
    originalPrice: null as number | null, price: 197,
    pricePerBottle: 197, pricePerDay: 6.57,
    savingsAmount: null as number | null, savingsPct: null as number | null,
    badge: null as string | null, highlight: false,
    payUrl: "https://pay.hest.com.br/54136eed-6288-4a4f-8e1b-43c2f76d1083",
    desc: "Para começar e sentir os primeiros resultados.",
  },
  {
    id: 3, name: "Kit 3 Meses", bottles: 3, doses: 90,
    originalPrice: 591 as number | null, price: 297,
    pricePerBottle: 99, pricePerDay: 3.30,
    savingsAmount: 294 as number | null, savingsPct: 50 as number | null,
    badge: "⭐ Mais Vendido ⭐", highlight: true,
    payUrl: "https://pay.hest.com.br/9daf0dbb-c2c1-49d4-ad74-d217f970b703",
    desc: "Recomendado para resultados sólidos e duradouros.",
  },
  {
    id: 5, name: "Kit 5 Meses", bottles: 5, doses: 150,
    originalPrice: 985 as number | null, price: 397,
    pricePerBottle: 79.40, pricePerDay: 2.65,
    savingsAmount: 588 as number | null, savingsPct: 60 as number | null,
    badge: "Melhor Custo-Benefício", highlight: false,
    payUrl: "https://pay.hest.com.br/b305215e-44bf-4263-aa90-670a0d53e78d",
    desc: "Transformação completa com máxima economia.",
  },
  {
    id: 12, name: "Kit 12 Meses", bottles: 12, doses: 360,
    originalPrice: 2364 as number | null, price: 697,
    pricePerBottle: 58.08, pricePerDay: 1.91,
    savingsAmount: 1667 as number | null, savingsPct: 71 as number | null,
    badge: "Maior Desconto", highlight: false,
    payUrl: "https://pay.hest.com.br/c5efdd0a-789f-48d3-b377-2f52600e86f4",
    desc: "Estoque garantido por um ano inteiro.",
  },
];

const fmt = (n: number) => n.toFixed(2).replace(".", ",");

export default function ProductsPage() {
  return (
    <div className="gradient-bg min-h-screen text-white">
      <TopCountdownBanner />

      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-black/75 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-lg font-black text-[#00ddb4]">⚡SECAPS</span>
          <span className="text-white font-black tracking-widest text-base">BLACK</span>
        </Link>
        <div className="flex gap-3 items-center">
          <Link href="/" className="text-gray-500 hover:text-white text-sm transition-colors">← Voltar</Link>
          <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp text-white font-bold px-3 py-2 rounded-full text-xs flex items-center gap-1.5">
            <WA_SVG />
            <span className="hidden sm:inline">Falar com Vendedor</span>
            <span className="sm:hidden">Vendedor</span>
          </a>
        </div>
      </nav>

      {/* HEADER */}
      <div className="pt-10 pb-6 px-4 text-center">
        <div className="inline-block bg-[#00ddb4]/10 border border-[#00ddb4]/20 text-[#00ddb4] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          ✅ Revendedora Autorizada • @vivalevemulher.shop
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-2">
          Escolha Seu <span className="text-[#00ddb4]">Kit</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-xs mx-auto">
          Quanto maior o kit, mais barato fica o valor por pote.
        </p>
      </div>

      {/* KITS */}
      <div className="max-w-4xl mx-auto px-4 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {kits.map(kit => (
            <div key={kit.id} className={`rounded-2xl flex flex-col overflow-hidden transition-all ${
              kit.highlight
                ? "bg-[#0c2018] border-2 border-[#00ddb4] shadow-[0_0_30px_rgba(0,221,180,0.12)]"
                : "bg-[#0c1d15] border border-white/8"
            }`}>

              {/* Badge */}
              {kit.badge && (
                <div className={`text-center py-2 text-xs font-black uppercase tracking-widest ${
                  kit.highlight ? "bg-[#00ddb4]/12 text-[#00ddb4]" : "bg-white/5 text-gray-500"
                }`}>
                  {kit.badge}
                </div>
              )}

              <div className="p-5 flex flex-col flex-1">
                {/* Image + title row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex flex-shrink-0">
                    {Array.from({ length: Math.min(kit.bottles, 3) }).map((_, i) => (
                      <img key={i} src="/produto-principal.jpeg" alt=""
                        className="w-12 h-12 object-contain rounded-lg"
                        style={{ marginLeft: i > 0 ? "-8px" : "0", zIndex: i, filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }} />
                    ))}
                    {kit.bottles > 3 && (
                      <span className="self-end ml-1.5 text-[#00ddb4] font-black text-xs">×{kit.bottles}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">{kit.name}</h3>
                    <p className="text-gray-500 text-xs">{kit.desc}</p>
                  </div>
                </div>

                {/* Quick info chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="bg-white/5 text-gray-400 text-xs px-2 py-1 rounded-lg">
                    📦 {kit.bottles} {kit.bottles === 1 ? "pote" : "potes"}
                  </span>
                  <span className="bg-white/5 text-gray-400 text-xs px-2 py-1 rounded-lg">
                    💊 {kit.doses * 2} cápsulas
                  </span>
                  <span className="bg-white/5 text-gray-400 text-xs px-2 py-1 rounded-lg">
                    📅 {kit.doses} doses
                  </span>
                </div>

                {/* Pricing */}
                <div className="mb-5 flex-1">
                  {/* Unit price — main highlight */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">Valor por pote</span>
                    <div className="flex items-center gap-2">
                      {kit.savingsPct && (
                        <span className="bg-green-500/20 text-green-400 text-[11px] font-bold px-2 py-0.5 rounded-full">
                          -{kit.savingsPct}%
                        </span>
                      )}
                      <span className="text-[#00ddb4] font-black text-xl">R$ {fmt(kit.pricePerBottle)}</span>
                    </div>
                  </div>

                  {/* Total block */}
                  <div className="bg-black/20 rounded-xl px-4 py-3 border border-white/5">
                    <div className="flex items-end justify-between">
                      <div>
                        {kit.originalPrice && (
                          <p className="text-gray-600 text-xs line-through">R$ {fmt(kit.originalPrice)}</p>
                        )}
                        <p className="text-gray-400 text-xs mt-0.5">R$ {fmt(kit.pricePerDay)}/dia</p>
                      </div>
                      <p className="text-white font-black text-3xl leading-none">R$ {fmt(kit.price)}</p>
                    </div>
                    {kit.savingsAmount && (
                      <p className="text-green-400 text-xs font-semibold mt-2 text-right">
                        💰 Economize R$ {fmt(kit.savingsAmount)}
                      </p>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2 mt-auto">
                  <a href={kit.payUrl} target="_blank" rel="noopener noreferrer"
                    className="btn-primary text-black font-black py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
                    🛒 Comprar Agora
                  </a>
                  <a href={makeWA(kit.name)} target="_blank" rel="noopener noreferrer"
                    className="btn-whatsapp text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
                    <WA_SVG />
                    Falar com Vendedor
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="rounded-2xl overflow-hidden border border-white/8">
          <div className="bg-[#00ddb4]/8 border-b border-[#00ddb4]/15 px-5 py-3 text-center">
            <h3 className="text-sm font-black uppercase tracking-wide text-[#00ddb4]">📊 Compare os Kits</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8 bg-black/20">
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs">Kit</th>
                  <th className="text-center px-3 py-3 text-gray-400 font-semibold text-xs">Total</th>
                  <th className="text-center px-3 py-3 text-[#00ddb4] font-black text-xs">Por Pote</th>
                  <th className="text-center px-3 py-3 text-gray-400 font-semibold text-xs">Por Dia</th>
                  <th className="text-center px-3 py-3 text-green-400 font-semibold text-xs">Economiza</th>
                </tr>
              </thead>
              <tbody>
                {kits.map(k => (
                  <tr key={k.id} className={`border-b border-white/5 transition-colors ${k.highlight ? "bg-[#00ddb4]/4" : "hover:bg-white/2"}`}>
                    <td className="px-4 py-3 font-bold text-sm">
                      {k.name}
                      {k.highlight && <span className="ml-2 text-[10px] bg-[#00ddb4] text-black px-1.5 py-0.5 rounded font-black">POPULAR</span>}
                    </td>
                    <td className="px-3 py-3 text-center font-bold text-white text-sm">R$ {fmt(k.price)}</td>
                    <td className="px-3 py-3 text-center font-black text-[#00ddb4] text-base">R$ {fmt(k.pricePerBottle)}</td>
                    <td className="px-3 py-3 text-center text-gray-400 text-sm">R$ {fmt(k.pricePerDay)}</td>
                    <td className="px-3 py-3 text-center text-green-400 font-semibold text-sm">
                      {k.savingsAmount ? `R$ ${fmt(k.savingsAmount)}` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          {[
            { icon: "🏆", label: "Garantia de 90 dias" },
            { icon: "🔒", label: "Pagamento seguro" },
            { icon: "🚚", label: "Entrega até 15 dias" },
            { icon: "✅", label: "Produto original ANVISA" },
          ].map(t => (
            <div key={t.label} className="flex items-center gap-1.5">
              <span className="text-base">{t.icon}</span>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-7 px-4 text-center text-gray-600 text-xs">
        <p className="mb-1 text-[#00ddb4]/60 font-semibold">@vivalevemulher.shop — Revendedora Autorizada</p>
        <p>CNPJ: 29.822.523/0002-86 • Suplemento alimentar conforme ANVISA RDC 240/2018</p>
      </footer>

      {/* Floating CTA */}
      <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
        className="floating-btn btn-whatsapp text-white font-bold px-4 py-3.5 rounded-full flex items-center gap-2 shadow-2xl">
        <WA_SVG />
        <span className="font-black text-sm">Falar com Vendedor</span>
      </a>
    </div>
  );
}
