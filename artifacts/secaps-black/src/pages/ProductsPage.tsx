import { Link } from "wouter";

const WHATSAPP_NUMBER = "5511999999999";

const makeWhatsAppUrl = (kitName: string) => {
  const msg = encodeURIComponent(`Olá! Quero comprar o ${kitName} do Secaps Black!`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};

const kits = [
  {
    id: 1,
    name: "Kit Starter",
    bottles: 1,
    doses: 30,
    capsules: 60,
    originalPrice: 149.90,
    price: 97.00,
    pricePerDay: 3.23,
    badge: null,
    highlight: false,
    savings: null,
    description: "Ideal para quem quer experimentar e sentir os primeiros resultados.",
  },
  {
    id: 2,
    name: "Kit 2 Meses",
    bottles: 2,
    doses: 60,
    capsules: 120,
    originalPrice: 299.80,
    price: 177.00,
    pricePerDay: 2.95,
    badge: "MAIS VENDIDO",
    highlight: true,
    savings: 122.80,
    description: "Recomendado para resultados sólidos e duradouros. O preferido das clientes.",
  },
  {
    id: 3,
    name: "Kit 3 Meses",
    bottles: 3,
    doses: 90,
    capsules: 180,
    originalPrice: 449.70,
    price: 247.00,
    pricePerDay: 2.74,
    badge: "MELHOR CUSTO-BENEFÍCIO",
    highlight: false,
    savings: 202.70,
    description: "Para quem quer transformação completa com máxima economia.",
  },
  {
    id: 4,
    name: "Kit 4 Meses",
    bottles: 4,
    doses: 120,
    capsules: 240,
    originalPrice: 599.60,
    price: 307.00,
    pricePerDay: 2.56,
    badge: "SUPER PROMOÇÃO",
    highlight: false,
    savings: 292.60,
    description: "Tratamento completo com o menor preço por dose. Estoque garantido.",
  },
  {
    id: 5,
    name: "Kit 5 Meses",
    bottles: 5,
    doses: 150,
    capsules: 300,
    originalPrice: 749.50,
    price: 367.00,
    pricePerDay: 2.45,
    badge: null,
    highlight: false,
    savings: 382.50,
    description: "Para quem busca resultados profundos e não quer correr risco de desabastecimento.",
  },
  {
    id: 6,
    name: "Kit 6 Meses",
    bottles: 6,
    doses: 180,
    capsules: 360,
    originalPrice: 899.40,
    price: 417.00,
    pricePerDay: 2.32,
    badge: "MELHOR PREÇO",
    highlight: false,
    savings: 482.40,
    description: "O kit definitivo para a transformação total. Melhor preço por dose disponível.",
  },
];

export default function ProductsPage() {
  return (
    <div className="gradient-bg min-h-screen text-white">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-black/60 backdrop-blur-md border-b border-teal-900/40">
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
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HEADER */}
      <div className="pt-24 pb-12 px-4 text-center">
        <div className="inline-block bg-[#00ddb4]/10 border border-[#00ddb4]/30 text-[#00ddb4] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          ✅ Revendedora Autorizada @vivalevemulher.shop
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-3">
          Escolha Seu <span className="text-[#00ddb4]">Kit</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Quanto mais você investe, mais você economiza. Escolha o kit ideal para sua transformação.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            { icon: "🏆", text: "90 dias de garantia" },
            { icon: "🔒", text: "Compra segura" },
            { icon: "🚚", text: "Entrega em até 15 dias" },
            { icon: "✅", text: "Produto original" },
          ].map(b => (
            <div key={b.text} className="flex items-center gap-1.5 text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* KITS GRID */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kits.map((kit) => (
            <div
              key={kit.id}
              className={`kit-card rounded-2xl overflow-hidden relative flex flex-col ${kit.highlight ? "ring-2 ring-[#00ddb4] shadow-[0_0_40px_rgba(0,221,180,0.3)]" : ""}`}
            >
              {kit.badge && (
                <div className={`absolute top-0 left-0 right-0 py-2 text-center text-xs font-black uppercase tracking-wider ${kit.highlight ? "best-seller-badge" : "bg-[#00ddb4]/20 text-[#00ddb4] border-b border-[#00ddb4]/30"}`}>
                  {kit.badge}
                </div>
              )}

              <div className={`p-6 flex flex-col flex-1 ${kit.badge ? "pt-10" : ""}`}>
                {/* Product image */}
                <div className="text-center mb-4">
                  <div className="relative inline-block">
                    {kit.bottles <= 2 && (
                      <img src="/produto-principal.jpeg" alt={kit.name} className="w-28 h-28 object-contain mx-auto rounded-xl" />
                    )}
                    {kit.bottles > 2 && (
                      <div className="flex items-center justify-center gap-[-8px]">
                        {Array.from({ length: Math.min(kit.bottles, 3) }).map((_, i) => (
                          <img
                            key={i}
                            src="/produto-principal.jpeg"
                            alt=""
                            className="w-20 h-20 object-contain rounded-xl"
                            style={{ marginLeft: i > 0 ? "-12px" : "0", zIndex: i }}
                          />
                        ))}
                        {kit.bottles > 3 && (
                          <div className="w-10 h-10 rounded-full bg-[#00ddb4] text-black font-black text-sm flex items-center justify-center ml-1">
                            +{kit.bottles - 3}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-black text-center mb-1">{kit.name}</h3>
                <p className="text-gray-400 text-xs text-center mb-4">{kit.description}</p>

                {/* Details */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: "Potes", value: kit.bottles },
                    { label: "Doses", value: kit.doses },
                    { label: "Cápsulas", value: kit.capsules },
                  ].map(d => (
                    <div key={d.label} className="bg-[#00ddb4]/10 rounded-xl p-2 text-center border border-[#00ddb4]/20">
                      <p className="text-[#00ddb4] font-black text-lg">{d.value}</p>
                      <p className="text-gray-400 text-xs">{d.label}</p>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="mt-auto">
                  {kit.savings && (
                    <div className="text-center mb-1">
                      <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-0.5 rounded-full">
                        Economize R$ {kit.savings.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-1">
                    <span className="strikethrough text-sm">R$ {kit.originalPrice.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="text-center mb-1">
                    <span className="price-tag font-black text-3xl">R$ {kit.price.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <p className="text-gray-500 text-xs text-center mb-4">
                    R$ {kit.pricePerDay.toFixed(2).replace(".", ",")} / dia
                  </p>

                  <a
                    href={makeWhatsAppUrl(kit.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-black text-base uppercase tracking-wide flex items-center justify-center gap-2 transition-all ${
                      kit.highlight
                        ? "btn-whatsapp text-white"
                        : "btn-primary text-black"
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Comprar via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee reminder */}
        <div className="mt-12 text-center">
          <div className="card-dark inline-flex items-center gap-4 px-8 py-5 rounded-2xl border-yellow-400/30">
            <span className="text-4xl">🏆</span>
            <div className="text-left">
              <p className="text-yellow-400 font-black text-lg">Garantia Total de 90 Dias</p>
              <p className="text-gray-400 text-sm">Não gostou? Devolvemos 100% do seu dinheiro.</p>
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
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="font-black">Falar Agora</span>
      </a>
    </div>
  );
}
