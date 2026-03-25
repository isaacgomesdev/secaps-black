import { Link } from "wouter";

const WHATSAPP_NUMBER = "558540420501";

const makeWhatsAppUrl = (kitName: string) => {
  const msg = encodeURIComponent(`Olá! Quero comprar o ${kitName} do Secaps Black!`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};

const WA_SVG = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const kits = [
  {
    id: 1,
    name: "Kit 1 Mês",
    months: 1,
    bottles: 1,
    doses: 30,
    capsules: 60,
    originalPrice: null,
    price: 197,
    pricePerBottle: 197,
    pricePerDay: 6.57,
    savingsAmount: null,
    savingsPct: null,
    badge: null,
    highlight: false,
    stock: 8,
    payUrl: "https://pay.hest.com.br/54136eed-6288-4a4f-8e1b-43c2f76d1083",
    description: "Ideal para experimentar e sentir os primeiros resultados.",
  },
  {
    id: 3,
    name: "Kit 3 Meses",
    months: 3,
    bottles: 3,
    doses: 90,
    capsules: 180,
    originalPrice: 591,
    price: 297,
    pricePerBottle: 99,
    pricePerDay: 3.30,
    savingsAmount: 294,
    savingsPct: 50,
    badge: "MAIS VENDIDO",
    highlight: true,
    stock: 5,
    payUrl: "https://pay.hest.com.br/9daf0dbb-c2c1-49d4-ad74-d217f970b703",
    description: "Recomendado para resultados sólidos e duradouros. O favorito das clientes.",
  },
  {
    id: 5,
    name: "Kit 5 Meses",
    months: 5,
    bottles: 5,
    doses: 150,
    capsules: 300,
    originalPrice: 985,
    price: 397,
    pricePerBottle: 79.40,
    pricePerDay: 2.65,
    savingsAmount: 588,
    savingsPct: 60,
    badge: "MELHOR CUSTO-BENEFÍCIO",
    highlight: false,
    stock: 4,
    payUrl: "https://pay.hest.com.br/b305215e-44bf-4263-aa90-670a0d53e78d",
    description: "Para quem quer transformação completa com máxima economia.",
  },
  {
    id: 12,
    name: "Kit 12 Meses",
    months: 12,
    bottles: 12,
    doses: 360,
    capsules: 720,
    originalPrice: 2364,
    price: 697,
    pricePerBottle: 58.08,
    pricePerDay: 1.91,
    savingsAmount: 1667,
    savingsPct: 71,
    badge: "MAIOR DESCONTO",
    highlight: false,
    stock: 3,
    payUrl: "https://pay.hest.com.br/c5efdd0a-789f-48d3-b377-2f52600e86f4",
    description: "O kit definitivo. Menor preço por pote disponível. Estoque do ano inteiro garantido.",
  },
];

function fmt(n: number) {
  return n.toFixed(2).replace(".", ",");
}

function StockBar({ stock }: { stock: number }) {
  const max = 10;
  const pct = (stock / max) * 100;
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-red-400 text-xs font-bold uppercase tracking-wide animate-pulse">
          🔥 Apenas {stock} unidades restantes!
        </span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="gradient-bg min-h-screen text-white">

      {/* URGENCY BANNER */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-bold uppercase tracking-wide">
        ⚡ Promoção por tempo limitado — Estoque quase esgotado!
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-black/70 backdrop-blur-md border-b border-teal-900/40">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-[#00ddb4] tracking-tight">⚡SECAPS</span>
          <span className="text-white font-black text-xl tracking-widest">BLACK</span>
        </Link>
        <div className="flex gap-3 items-center">
          <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
            ← Voltar
          </Link>
          <a
            href={makeWhatsAppUrl("um kit")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-white font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2"
          >
            {WA_SVG}
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* HEADER */}
      <div className="pt-10 pb-8 px-4 text-center">
        <div className="inline-block bg-[#00ddb4]/10 border border-[#00ddb4]/30 text-[#00ddb4] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          ✅ Revendedora Autorizada • @vivalevemulher.shop
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-2">
          Escolha Seu <span className="text-[#00ddb4]">Kit</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-2">
          Quanto mais você leva, <strong className="text-white">mais barato fica por pote.</strong>
        </p>
        <p className="text-red-400 font-bold text-sm">⚠️ Promoção válida enquanto durar o estoque</p>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            { icon: "🏆", text: "90 dias de garantia" },
            { icon: "🔒", text: "Pagamento seguro" },
            { icon: "🚚", text: "Entrega até 15 dias" },
            { icon: "✅", text: "Produto original" },
          ].map(b => (
            <div key={b.text} className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* KITS */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kits.map((kit) => (
            <div
              key={kit.id}
              className={`kit-card rounded-3xl overflow-hidden relative flex flex-col ${
                kit.highlight
                  ? "ring-2 ring-[#00ddb4] shadow-[0_0_50px_rgba(0,221,180,0.25)]"
                  : ""
              }`}
            >
              {/* Badge */}
              {kit.badge && (
                <div className={`py-2.5 text-center text-sm font-black uppercase tracking-widest ${
                  kit.highlight
                    ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black"
                    : "bg-[#00ddb4]/20 text-[#00ddb4] border-b border-[#00ddb4]/30"
                }`}>
                  {kit.highlight && "⭐ "}{kit.badge}{kit.highlight && " ⭐"}
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">

                {/* Top row: image + title */}
                <div className="flex items-center gap-5 mb-5">
                  <div className="relative flex-shrink-0">
                    <div className="flex">
                      {Array.from({ length: Math.min(kit.bottles, 3) }).map((_, i) => (
                        <img
                          key={i}
                          src="/produto-principal.jpeg"
                          alt=""
                          className="w-16 h-16 object-contain rounded-xl border border-[#00ddb4]/20"
                          style={{ marginLeft: i > 0 ? "-10px" : "0", zIndex: i }}
                        />
                      ))}
                    </div>
                    {kit.bottles > 3 && (
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#00ddb4] text-black font-black text-xs flex items-center justify-center">
                        x{kit.bottles}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">{kit.name}</h3>
                    <p className="text-gray-400 text-xs mt-0.5">{kit.description}</p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { label: "Potes", value: kit.bottles },
                    { label: "Doses", value: kit.doses },
                    { label: "Cápsulas", value: kit.capsules },
                  ].map(d => (
                    <div key={d.label} className="bg-[#00ddb4]/10 rounded-xl p-2.5 text-center border border-[#00ddb4]/20">
                      <p className="text-[#00ddb4] font-black text-xl">{d.value}</p>
                      <p className="text-gray-400 text-xs">{d.label}</p>
                    </div>
                  ))}
                </div>

                {/* Stock bar */}
                <StockBar stock={kit.stock} />

                {/* Pricing block */}
                <div className="bg-black/30 rounded-2xl p-4 mb-5 border border-white/5">

                  {/* Unit price highlight */}
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                    <span className="text-gray-400 text-sm">Valor por pote:</span>
                    <span className="text-[#00ddb4] font-black text-xl">
                      R$ {fmt(kit.pricePerBottle)}
                      {kit.savingsPct && (
                        <span className="ml-2 bg-green-500/20 text-green-400 text-xs font-bold px-2 py-0.5 rounded-full">
                          -{kit.savingsPct}% OFF
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Total price */}
                  <div className="text-center">
                    {kit.originalPrice && (
                      <p className="text-gray-500 text-sm line-through mb-0.5">
                        De R$ {fmt(kit.originalPrice)}
                      </p>
                    )}
                    <p className="text-white font-black text-4xl mb-0.5">
                      R$ <span className="text-[#00ddb4]">{fmt(kit.price)}</span>
                    </p>
                    <p className="text-gray-400 text-sm">
                      Apenas <strong className="text-white">R$ {fmt(kit.pricePerDay)}/dia</strong>
                    </p>
                    {kit.savingsAmount && (
                      <div className="mt-2 inline-block bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                        💰 Você economiza R$ {fmt(kit.savingsAmount)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href={kit.payUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-black font-black text-base py-4 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wide"
                  >
                    🛒 Comprar Agora
                  </a>
                  <a
                    href={makeWhatsAppUrl(kit.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-xl border border-[#25d366]/40 text-[#25d366] hover:bg-[#25d366]/10 transition-colors"
                  >
                    {WA_SVG}
                    Falar com Vendedor
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Value comparison table */}
        <div className="mt-14 card-dark rounded-2xl overflow-hidden">
          <div className="bg-[#00ddb4]/10 border-b border-[#00ddb4]/20 px-6 py-4 text-center">
            <h3 className="text-lg font-black uppercase tracking-wide text-[#00ddb4]">
              📊 Compare e Economize
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold">Kit</th>
                  <th className="text-center px-4 py-3 text-gray-400 font-semibold">Total</th>
                  <th className="text-center px-4 py-3 text-[#00ddb4] font-black">Por Pote</th>
                  <th className="text-center px-4 py-3 text-gray-400 font-semibold">Por Dia</th>
                  <th className="text-center px-4 py-3 text-green-400 font-semibold">Economiza</th>
                </tr>
              </thead>
              <tbody>
                {kits.map((k, i) => (
                  <tr
                    key={k.id}
                    className={`border-b border-white/5 ${k.highlight ? "bg-[#00ddb4]/5" : ""}`}
                  >
                    <td className="px-4 py-3 font-bold">
                      {k.name}
                      {k.highlight && <span className="ml-2 text-[10px] bg-amber-400 text-black px-1.5 py-0.5 rounded font-black">POPULAR</span>}
                    </td>
                    <td className="px-4 py-3 text-center font-bold text-white">R$ {fmt(k.price)}</td>
                    <td className="px-4 py-3 text-center font-black text-[#00ddb4] text-base">R$ {fmt(k.pricePerBottle)}</td>
                    <td className="px-4 py-3 text-center text-gray-300">R$ {fmt(k.pricePerDay)}</td>
                    <td className="px-4 py-3 text-center text-green-400 font-bold">
                      {k.savingsAmount ? `R$ ${fmt(k.savingsAmount)}` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guarantee + trust */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="card-dark rounded-2xl p-6 flex items-center gap-4 border-yellow-400/20">
            <span className="text-5xl">🏆</span>
            <div>
              <p className="text-yellow-400 font-black text-lg">Garantia de 90 Dias</p>
              <p className="text-gray-400 text-sm">Não teve resultado? Devolvemos 100% do seu dinheiro. Sem perguntas.</p>
            </div>
          </div>
          <div className="card-dark rounded-2xl p-6 flex items-center gap-4 border-[#00ddb4]/20">
            <span className="text-5xl">🔒</span>
            <div>
              <p className="text-[#00ddb4] font-black text-lg">Compra 100% Segura</p>
              <p className="text-gray-400 text-sm">Pagamento protegido. Produto original certificado pela ANVISA.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#00ddb4]/10 py-8 px-4 text-center text-gray-500 text-sm">
        <p className="mb-2 text-[#00ddb4] font-semibold">@vivalevemulher.shop</p>
        <p>Revendedora Autorizada Secaps Black</p>
        <p className="mt-2">CNPJ: 29.822.523/0002-86 • Suplemento alimentar conforme ANVISA RDC 240/2018</p>
      </footer>

      {/* Floating CTA */}
      <a
        href={makeWhatsAppUrl("um kit")}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn btn-whatsapp text-white font-bold px-5 py-4 rounded-full flex items-center gap-2 shadow-2xl"
      >
        {WA_SVG}
        <span className="font-black">Falar Agora</span>
      </a>
    </div>
  );
}
