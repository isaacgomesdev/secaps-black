import { Link } from "wouter";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "558540420501";
const makeWA = (kitName: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Quero comprar o ${kitName} do Velmo Black!`)}`;
const WA_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Quero saber mais sobre o Velmo Black!")}`;

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
    <div className="bg-[#1f1a17] py-2 px-4 text-center">
      <span className="text-[#e8d5c4] text-xs mr-3">Promoção encerra em</span>
      <span className="font-mono font-bold text-white text-xs tracking-widest">{pad(h)}:{pad(m)}:{pad(s)}</span>
      <span className="text-gray-500 text-xs mx-3">·</span>
      <span className="text-[#e8d5c4] text-xs">Estoque limitado</span>
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
    image: "/images/velmo/potes-1.png",
    stock: 23,
  },
  {
    id: 3, name: "Kit 3 Meses", months: 3, bottles: 3, doses: 90,
    originalPrice: 591 as number | null, price: 297,
    pricePerBottle: 99, pricePerDay: 3.30,
    savings: 294 as number | null, savingsPct: 50 as number | null,
    label: "Mais vendido", highlight: true,
    payUrl: "https://pay.hest.com.br/9daf0dbb-c2c1-49d4-ad74-d217f970b703",
    tagline: "Resultados sólidos e duradouros.",
    image: "/images/velmo/potes-3.png",
    stock: 11,
  },
  {
    id: 5, name: "Kit 5 Meses", months: 5, bottles: 5, doses: 150,
    originalPrice: 985 as number | null, price: 397,
    pricePerBottle: 79.40, pricePerDay: 2.65,
    savings: 588 as number | null, savingsPct: 60 as number | null,
    label: "Melhor custo-benefício", highlight: false,
    payUrl: "https://pay.hest.com.br/b305215e-44bf-4263-aa90-670a0d53e78d",
    tagline: "Transformação completa, máxima economia.",
    image: "/images/velmo/potes-5.png",
    stock: 7,
  },
  {
    id: 12, name: "Kit 12 Meses", months: 12, bottles: 12, doses: 360,
    originalPrice: 2364 as number | null, price: 697,
    pricePerBottle: 58.08, pricePerDay: 1.91,
    savings: 1667 as number | null, savingsPct: 71 as number | null,
    label: "Maior desconto", highlight: false,
    payUrl: "https://pay.hest.com.br/c5efdd0a-789f-48d3-b377-2f52600e86f4",
    tagline: "Estoque garantido por um ano inteiro.",
    image: "/images/velmo/potes-5.png",
    stock: 4,
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen text-stone-800 font-sans selection:bg-rose-200">
      <CountdownBar />

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3.5">
          <Link href="/">
            <a><img src="/images/velmo/logo-1.png" alt="Velmo Black" className="h-8 sm:h-10 object-contain" /></a>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/velmo-black" className="text-stone-500 hover:text-stone-800 text-xs transition-colors font-medium">← Voltar para o site</Link>
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-velmo-top"
              className="btn-whatsapp text-white text-xs font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5 shadow-md">
              <WaSvg />
              <span className="hidden sm:inline">Falar com Vendedor</span>
              <span className="sm:hidden">Contato</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <div className="pt-16 pb-10 px-5 text-center max-w-lg mx-auto">
        <p className="text-rose-500 text-xs font-bold uppercase tracking-widest mb-4">
          Revendedora Autorizada · @vivalevemulher.shop
        </p>
        <h1 className="text-3xl sm:text-4xl font-black uppercase mb-3 text-stone-900">
          Escolha seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-500">kit</span>
        </h1>
        <p className="text-stone-500 text-sm">
          Quanto maior o kit, menor o valor por pote — e maior a economia.
        </p>
      </div>

      {/* PAYMENT TRUST STRIP */}
      <div className="max-w-5xl mx-auto px-4 mb-10">
        <div className="bg-white border border-stone-100 rounded-2xl px-6 py-4 shadow-sm flex flex-wrap items-center justify-center gap-4 text-stone-500 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="text-green-500 text-base">💳</span>
            Cartão de crédito
          </div>
          <div className="w-px h-4 bg-stone-200 hidden sm:block"></div>
          <div className="flex items-center gap-1.5">
            <span className="text-blue-500 text-base">📱</span>
            Pix (desconto imediato)
          </div>
          <div className="w-px h-4 bg-stone-200 hidden sm:block"></div>
          <div className="flex items-center gap-1.5">
            <span className="text-stone-500 text-base">📎</span>
            Boleto bancário
          </div>
          <div className="w-px h-4 bg-stone-200 hidden sm:block"></div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-500 text-base">🔒</span>
            Ambiente 100% seguro
          </div>
        </div>
      </div>

      {/* KIT CARDS */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kits.map(kit => (
            <div key={kit.id} className={`relative rounded-3xl flex flex-col overflow-hidden transition-all duration-300 ${
              kit.highlight
                ? "border-2 border-rose-400 bg-white shadow-xl scale-[1.02]"
                : "border border-stone-200 bg-white hover:border-stone-300 shadow-sm"
            }`}>

              {/* Label */}
              {kit.label && (
                <div className={`px-5 py-2 text-xs font-bold uppercase tracking-widest text-center ${
                  kit.highlight
                    ? "bg-rose-50 text-rose-600 border-b border-rose-100"
                    : "bg-stone-50 text-stone-500 border-b border-stone-100"
                }`}>
                  {kit.label}
                </div>
              )}

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Kit image */}
                <div className="flex justify-center mb-4 relative">
                  <img src={kit.image} alt={kit.name}
                    className="h-40 object-contain drop-shadow-xl" />
                </div>

                {/* Stock warning */}
                {kit.stock <= 15 && (
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-orange-700 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 mb-4 w-fit mx-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                    Restam apenas {kit.stock} unidades
                  </div>
                )}

                {/* Kit title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-stone-900">{kit.name}</h3>
                  <p className="text-stone-500 text-sm mt-1">{kit.tagline}</p>
                </div>

                {/* Details row */}
                <div className="flex gap-3 text-xs text-stone-500 mb-6 pb-6 border-b border-stone-100 justify-center font-medium">
                  <span>{kit.bottles} {kit.bottles === 1 ? "pote" : "potes"}</span>
                  <span>·</span>
                  <span>{kit.doses * 2} cápsulas</span>
                  <span>·</span>
                  <span>{kit.doses} doses</span>
                </div>

                {/* Price */}
                <div className="flex-1 mb-8">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-stone-400 text-xs font-semibold uppercase tracking-wider mb-1">Valor por dose</p>
                      <p className="text-stone-900 font-black text-2xl leading-none">R$ {fmt(kit.pricePerDay)}</p>
                    </div>
                    {kit.savingsPct && (
                      <span className="text-white bg-green-600 border border-green-500 shadow-sm text-xs font-bold px-3 py-1.5 rounded-full">
                        -{kit.savingsPct}%
                      </span>
                    )}
                  </div>

                  <div className="bg-stone-50 rounded-2xl px-5 py-4 border border-stone-100">
                    <div className="flex items-end justify-between">
                      <div>
                        {kit.originalPrice && (
                          <p className="text-stone-400 text-xs line-through mb-1">R$ {fmt(kit.originalPrice)}</p>
                        )}
                        <p className="text-stone-500 text-xs font-semibold">Total do kit</p>
                      </div>
                      <p className="text-stone-900 font-black text-3xl leading-none">R$ {fmt(kit.price)}</p>
                    </div>
                    {kit.savings && (
                      <div className="mt-3 flex justify-end">
                         <p className="text-green-700 bg-green-50 border border-green-100 text-xs font-bold px-2 py-1 rounded-md inline-block">
                           Você economiza R$ {fmt(kit.savings)}
                         </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-auto">
                  <a href={kit.payUrl} target="_blank" rel="noopener noreferrer" id={`btn-checkout-velmo-${kit.months}`}
                    className="bg-gradient-to-r from-stone-900 to-black text-[#F5E6D3] font-bold text-base py-4 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow hover:scale-[1.02]">
                    Comprar agora
                  </a>
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-500 font-medium -mt-1 mb-1">
                     <span className="text-green-500 text-xs">🔒</span> Compra 100% Segura e Criptografada
                  </div>
                  <a href={makeWA(kit.name)} target="_blank" rel="noopener noreferrer" id={`btn-whatsapp-velmo-${kit.months}`}
                    className="btn-whatsapp text-white font-semibold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:opacity-90">
                    <WaSvg />
                    Falar com Vendedor
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRUST */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: "🏆", label: "Garantia de 30 dias" },
            { icon: "🔒", label: "Pagamento seguro" },
            { icon: "🚚", label: "Entrega via Correios" },
            { icon: "✅", label: "Produto original" },
          ].map(t => (
            <div key={t.label} className="bg-white border border-stone-100 rounded-2xl py-4 px-4 text-center shadow-sm">
              <div className="text-2xl mb-2">{t.icon}</div>
              <p className="text-stone-500 text-xs font-medium">{t.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-stone-950 py-10 px-5 text-center">
        <p className="text-stone-500 text-xs font-medium mb-3">@vivalevemulher.shop · Revendedora Autorizada</p>
        <p className="text-stone-600 text-xs max-w-md mx-auto leading-relaxed">
          CNPJ 29.822.523/0002-86 · Suplemento alimentar conforme ANVISA RDC 240/2018<br />
          Indicado para maiores de 19 anos. Consulte um profissional de saúde antes do uso.
        </p>
      </footer>

      {/* FLOATING */}
      <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-velmo-floating"
        className="fixed bottom-6 right-6 btn-whatsapp text-white font-semibold px-4 py-3.5 rounded-full flex items-center gap-2 shadow-2xl text-sm z-50">
        <WaSvg />
        <span className="hidden sm:inline">Falar com Vendedor</span>
      </a>
    </div>
  );
}
