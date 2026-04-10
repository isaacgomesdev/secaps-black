import { Link } from "wouter";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "558540420501";
const makeWA = (kitName: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Quero comprar o ${kitName} do Secaps Black!`)}`;
const WA_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Quero saber mais sobre o Secaps Black!")}`;

const WaSvg = () => (
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

function CountdownBar() {
  const { h, m, s } = useCountdown(2 * 3600 + 37 * 60 + 14);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="bg-black/80 py-2 px-4 text-center">
      <span className="text-gray-400 text-xs mr-3">Promoção encerra em</span>
      <span className="font-mono font-black text-white text-xs tracking-widest">{pad(h)}:{pad(m)}:{pad(s)}</span>
      <span className="text-gray-600 text-xs mx-3">·</span>
      <span className="text-gray-400 text-xs">Estoque limitado</span>
    </div>
  );
}

const fmt = (n: number) => n.toFixed(2).replace(".", ",");

const kits = [
  {
    id: 1, name: "Kit 1 Mês", months: 1, bottles: 1, doses: 30,
    originalPrice: null as number | null, price: 197,
    pricePerBottle: 197, pricePerDay: 6.57,
    savings: null as number | null, savingsPct: null as number | null,
    label: null as string | null, highlight: false,
    payUrl: "https://pay.hest.com.br/54136eed-6288-4a4f-8e1b-43c2f76d1083",
    tagline: "Para sentir os primeiros resultados.",
    image: "/product-1.png",
  },
  {
    id: 3, name: "Kit 3 Meses", months: 3, bottles: 3, doses: 90,
    originalPrice: 591 as number | null, price: 297,
    pricePerBottle: 99, pricePerDay: 3.30,
    savings: 294 as number | null, savingsPct: 50 as number | null,
    label: "Mais vendido", highlight: true,
    payUrl: "https://pay.hest.com.br/9daf0dbb-c2c1-49d4-ad74-d217f970b703",
    tagline: "Resultados sólidos e duradouros.",
    image: "/product-3.png",
  },
  {
    id: 5, name: "Kit 5 Meses", months: 5, bottles: 5, doses: 150,
    originalPrice: 985 as number | null, price: 397,
    pricePerBottle: 79.40, pricePerDay: 2.65,
    savings: 588 as number | null, savingsPct: 60 as number | null,
    label: "Melhor custo-benefício", highlight: false,
    payUrl: "https://pay.hest.com.br/b305215e-44bf-4263-aa90-670a0d53e78d",
    tagline: "Transformação completa, máxima economia.",
    image: "/product-5.png",
  },
  {
    id: 12, name: "Kit 12 Meses", months: 12, bottles: 12, doses: 360,
    originalPrice: 2364 as number | null, price: 697,
    pricePerBottle: 58.08, pricePerDay: 1.91,
    savings: 1667 as number | null, savingsPct: 71 as number | null,
    label: "Maior desconto", highlight: false,
    payUrl: "https://pay.hest.com.br/c5efdd0a-789f-48d3-b377-2f52600e86f4",
    tagline: "Estoque garantido por um ano inteiro.",
    image: "/product-12.png",
  },
];

export default function ProductsPage() {
  return (
    <div className="gradient-bg min-h-screen text-white">
      <CountdownBar />

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/6">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3.5">
          <Link href="/" className="font-black text-white tracking-tight text-base">
            <span className="text-[#00ddb4]">SECAPS</span> BLACK
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/secaps-black" className="text-gray-500 hover:text-white text-xs transition-colors">← Voltar</Link>
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-secaps-top"
              className="btn-whatsapp text-white text-xs font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5">
              <WaSvg />
              <span className="hidden sm:inline">Falar com Vendedor</span>
              <span className="sm:hidden">Contato</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <div className="pt-12 pb-8 px-5 text-center max-w-lg mx-auto">
        <p className="text-[#00ddb4] text-xs font-semibold uppercase tracking-widest mb-4">
          Revendedora Autorizada · @vivalevemulher.shop
        </p>
        <h1 className="text-3xl sm:text-4xl font-black uppercase mb-3">
          Escolha seu <span className="text-[#00ddb4]">kit</span>
        </h1>
        <p className="text-gray-500 text-sm">
          Quanto maior o kit, menor o valor por pote — e maior a economia.
        </p>
      </div>

      {/* KIT CARDS */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {kits.map(kit => (
            <div key={kit.id} className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-200 ${
              kit.highlight
                ? "border-2 border-[#00ddb4] bg-[#0b1e15] shadow-[0_0_40px_rgba(0,221,180,0.08)]"
                : "border border-white/7 bg-[#0a1910] hover:border-white/15"
            }`}>

              {/* Label */}
              {kit.label && (
                <div className={`px-5 py-2 text-xs font-semibold uppercase tracking-widest ${
                  kit.highlight
                    ? "bg-[#00ddb4]/10 text-[#00ddb4] border-b border-[#00ddb4]/15"
                    : "bg-white/4 text-gray-500 border-b border-white/5"
                }`}>
                  {kit.label}
                </div>
              )}

              <div className="p-5 flex flex-col flex-1">
                {/* Kit image — centered, prominent */}
                <div className="flex justify-center mb-4">
                  <img src={kit.image} alt={kit.name}
                    className="h-36 object-contain drop-shadow-[0_6px_24px_rgba(0,0,0,0.8)]" />
                </div>

                {/* Kit title */}
                <div className="text-center mb-5">
                  <h3 className="text-xl font-black text-white">{kit.name}</h3>
                  <p className="text-gray-500 text-xs mt-1">{kit.tagline}</p>
                </div>

                {/* Details row */}
                <div className="flex gap-3 text-xs text-gray-600 mb-5 pb-5 border-b border-white/5 justify-center">
                  <span>{kit.bottles} {kit.bottles === 1 ? "pote" : "potes"}</span>
                  <span>·</span>
                  <span>{kit.doses * 2} cápsulas</span>
                  <span>·</span>
                  <span>{kit.doses} doses</span>
                </div>

                {/* Price */}
                <div className="flex-1 mb-5">
                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">Valor por dose</p>
                      <p className="text-[#00ddb4] font-black text-2xl leading-none">R$ {fmt(kit.pricePerDay)}</p>
                    </div>
                    {kit.savingsPct && (
                      <span className="text-green-400 bg-green-500/10 border border-green-500/20 text-xs font-bold px-2.5 py-1 rounded-full">
                        -{kit.savingsPct}%
                      </span>
                    )}
                  </div>

                  <div className="bg-black/30 rounded-xl px-4 py-3.5 border border-white/5">
                    <div className="flex items-end justify-between">
                      <div>
                        {kit.originalPrice && (
                          <p className="text-gray-700 text-xs line-through">R$ {fmt(kit.originalPrice)}</p>
                        )}
                        <p className="text-gray-500 text-xs">Total do kit</p>
                      </div>
                      <p className="text-white font-black text-3xl leading-none">R$ {fmt(kit.price)}</p>
                    </div>
                    {kit.savings && (
                      <p className="text-green-400/80 text-xs mt-2 text-right">
                        Você economiza R$ {fmt(kit.savings)}
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 mt-auto">
                  <a href={kit.payUrl} target="_blank" rel="noopener noreferrer" id={`btn-checkout-secaps-${kit.months}`}
                    className="btn-primary text-black font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2">
                    Comprar agora
                  </a>
                  <a href={makeWA(kit.name)} target="_blank" rel="noopener noreferrer" id={`btn-whatsapp-secaps-${kit.months}`}
                    className="btn-whatsapp text-white font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2">
                    <WaSvg />
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
        <div className="rounded-2xl overflow-hidden border border-white/7">
          <div className="px-5 py-3.5 border-b border-white/5 bg-white/2">
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest text-center">Comparativo dos kits</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-5 py-3 text-gray-500 font-medium text-xs">Kit</th>
                  <th className="text-right px-4 py-3 text-gray-500 font-medium text-xs">Total</th>
                  <th className="text-right px-4 py-3 text-[#00ddb4] font-semibold text-xs">Por dose</th>
                  <th className="text-right px-4 py-3 text-gray-500 font-medium text-xs hidden sm:table-cell">Doses</th>
                  <th className="text-right px-5 py-3 text-green-400 font-medium text-xs">Economia</th>
                </tr>
              </thead>
              <tbody>
                {kits.map(k => (
                  <tr key={k.id} className={`border-b border-white/4 last:border-0 ${k.highlight ? "bg-[#00ddb4]/4" : ""}`}>
                    <td className="px-5 py-3.5 text-sm font-semibold text-white">
                      {k.name}
                      {k.highlight && (
                        <span className="ml-2 text-[10px] bg-[#00ddb4] text-black px-1.5 py-0.5 rounded font-black uppercase tracking-wide">popular</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-right text-sm text-white font-semibold">R$ {fmt(k.price)}</td>
                    <td className="px-4 py-3.5 text-right text-base text-[#00ddb4] font-black">R$ {fmt(k.pricePerDay)}</td>
                    <td className="px-4 py-3.5 text-right text-sm text-gray-500 hidden sm:table-cell">{k.doses}</td>
                    <td className="px-5 py-3.5 text-right text-sm text-green-400 font-medium">
                      {k.savings ? `R$ ${fmt(k.savings)}` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* TRUST */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: "🏆", label: "Garantia de 90 dias" },
            { icon: "🔒", label: "Pagamento seguro" },
            { icon: "🚚", label: "Entrega em até 15 dias" },
            { icon: "✅", label: "Produto original ANVISA" },
          ].map(t => (
            <div key={t.label} className="bg-white/2 border border-white/5 rounded-xl py-3 px-3 text-center">
              <div className="text-xl mb-1">{t.icon}</div>
              <p className="text-gray-400 text-xs">{t.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-5 text-center">
        <p className="text-[#00ddb4]/50 text-xs font-medium mb-2">@vivalevemulher.shop · Revendedora Autorizada</p>
        <p className="text-gray-700 text-xs max-w-md mx-auto leading-relaxed">
          CNPJ 29.822.523/0002-86 · Suplemento alimentar conforme ANVISA RDC 240/2018<br />
          Indicado para maiores de 19 anos. Consulte um profissional de saúde antes do uso.
        </p>
      </footer>

      {/* FLOATING */}
      <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-secaps-floating"
        className="floating-btn btn-whatsapp text-white font-semibold px-4 py-3.5 rounded-full flex items-center gap-2 shadow-2xl text-sm">
        <WaSvg />
        <span>Falar com Vendedor</span>
      </a>
    </div>
  );
}
