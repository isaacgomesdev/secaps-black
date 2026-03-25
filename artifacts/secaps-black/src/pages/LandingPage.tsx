import { Link } from "wouter";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "558540420501";
const WHATSAPP_MSG = encodeURIComponent("Olá! Quero saber mais sobre o Secaps Black!");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const TESTIMONIAL_VIDEOS = [
  { id: "yG7UCRHFWdY" }, { id: "R38LT_523yY" }, { id: "Ub0JS8_-RJM" },
  { id: "Wf74ppAbbcY" }, { id: "av38riEoZNE" }, { id: "ZxJAIJ4I6rA" },
];

const BUYER_NAMES = ["Ana P.","Fernanda S.","Juliana M.","Carla R.","Patrícia L.","Renata C.","Bianca F.","Larissa T.","Camila N.","Tatiane O.","Vanessa B.","Simone A.","Débora K.","Luciana G.","Mariana Z."];
const CITIES = ["São Paulo, SP","Rio de Janeiro, RJ","Belo Horizonte, MG","Fortaleza, CE","Salvador, BA","Curitiba, PR","Manaus, AM","Recife, PE","Porto Alegre, RS","Brasília, DF","Goiânia, GO","Belém, PA","Florianópolis, SC","Natal, RN","Maceió, AL"];
const KIT_NAMES = ["Kit 3 Meses","Kit 5 Meses","Kit 12 Meses","Kit 3 Meses","Kit 5 Meses"];

const WA_SVG = ({ size = "md" }: { size?: "sm" | "md" }) => (
  <svg className={size === "sm" ? "w-4 h-4 flex-shrink-0" : "w-5 h-5 flex-shrink-0"} fill="currentColor" viewBox="0 0 24 24">
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

function BuyerNotification() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "", kit: "" });
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    const show = () => {
      const idx = Math.floor(Math.random() * BUYER_NAMES.length);
      setData({ name: BUYER_NAMES[idx], city: CITIES[Math.floor(Math.random() * CITIES.length)], kit: KIT_NAMES[Math.floor(Math.random() * KIT_NAMES.length)] });
      setVisible(true);
      timeout = setTimeout(() => setVisible(false), 4000);
    };
    const first = setTimeout(() => { show(); interval = setInterval(show, 18000); }, 5000);
    return () => { clearTimeout(first); clearTimeout(timeout); clearInterval(interval); };
  }, []);
  return (
    <div className={`fixed bottom-24 left-3 z-50 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}>
      <div className="bg-gray-900/95 border border-[#00ddb4]/25 rounded-xl px-3 py-2.5 shadow-2xl flex items-center gap-2.5 max-w-[260px]">
        <div className="w-8 h-8 rounded-full bg-[#00ddb4]/20 border border-[#00ddb4]/40 flex items-center justify-center text-base flex-shrink-0">🛒</div>
        <div>
          <p className="text-white text-xs font-bold">{data.name} de {data.city}</p>
          <p className="text-[#00ddb4] text-xs">comprou o <strong>{data.kit}</strong></p>
          <p className="text-gray-600 text-[10px]">há alguns minutos</p>
        </div>
      </div>
    </div>
  );
}

function ViewerCount() {
  const [count, setCount] = useState(47);
  useEffect(() => {
    const t = setInterval(() => setCount(c => Math.max(30, c + Math.floor(Math.random() * 3) - 1)), 7000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="inline-flex items-center gap-1.5 bg-red-600/10 border border-red-500/25 text-red-400 text-xs font-semibold px-3 py-1.5 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      {count} pessoas vendo agora
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="gradient-bg min-h-screen text-white">
      <TopCountdownBanner />

      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-black/75 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="text-lg font-black text-[#00ddb4]">⚡SECAPS</span>
          <span className="text-white font-black tracking-widest text-base">BLACK</span>
        </div>
        <div className="flex gap-2">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp text-white font-bold px-3 py-2 rounded-full text-xs flex items-center gap-1.5">
            <WA_SVG size="sm" />
            <span className="hidden sm:inline">Falar com Vendedor</span>
            <span className="sm:hidden">Vendedor</span>
          </a>
          <Link href="/produtos" className="btn-primary text-black font-bold px-3 py-2 rounded-full text-xs">
            Ver Kits
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-gradient pt-8 pb-0 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#00ddb4]/5 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-[#00ddb4]/10 border border-[#00ddb4]/30 text-[#00ddb4] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            ✅ Revendedora Autorizada • @vivalevemulher.shop
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-tight mb-3">
            <span className="text-white">Queime Gordura</span><br />
            <span className="text-[#00ddb4] teal-glow">De Verdade</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-3 font-light max-w-2xl mx-auto">
            A fórmula 10x mais potente que está transformando a vida de{" "}
            <strong className="text-white">+100.000 brasileiros</strong>
          </p>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1,2,3,4].map(i => <span key={i} className="star-gold text-lg">★</span>)}
            <span className="star-gold text-lg opacity-60">★</span>
            <span className="text-gray-400 text-xs ml-1.5">4.8 de 5 • +100.000 clientes</span>
          </div>
          <div className="flex justify-center mb-4"><ViewerCount /></div>
          <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-300 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider animate-pulse">
            🎬 Assista antes de comprar — nutricionista revela o segredo
          </div>
        </div>

        {/* VSL */}
        <div className="max-w-4xl mx-auto relative z-10 mt-2">
          <div className="relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,221,180,0.15)] border border-[#00ddb4]/20">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/R-Syv38lqmI?rel=0&modestbranding=1&color=white"
                title="Essa nutricionista revelou por que você não consegue emagrecer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-1.5 text-center">🔔 Ligue o som — informações importantes para sua saúde</p>
        </div>

        {/* CTA abaixo do vídeo */}
        <div className="max-w-lg mx-auto relative z-10 py-8">
          <p className="text-[#00ddb4] font-bold text-base mb-1 uppercase tracking-wide">👇 Garanta o seu com desconto especial</p>
          <p className="text-red-400 text-xs font-semibold mb-5 animate-pulse">🔥 Desconto válido somente hoje!</p>
          <div className="flex flex-col gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-white font-black text-base px-6 py-4 rounded-full flex items-center justify-center gap-2 uppercase tracking-wide w-full">
              <WA_SVG />
              Falar com Vendedor
            </a>
            <Link href="/produtos"
              className="btn-primary text-black font-black text-base px-6 py-4 rounded-full flex items-center justify-center gap-2 uppercase tracking-wide w-full">
              🛒 Ver Todos os Kits
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <div className="bg-[#00ddb4]/8 border-y border-[#00ddb4]/15 py-4 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: "👥", val: "+100.000", label: "Clientes" },
            { icon: "⭐", val: "4.8/5", label: "Avaliação" },
            { icon: "🏆", val: "90 dias", label: "Garantia" },
            { icon: "🚀", val: "10x", label: "Mais potente" },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2 justify-center">
              <span className="text-xl">{item.icon}</span>
              <div>
                <div className="text-[#00ddb4] font-black text-base leading-tight">{item.val}</div>
                <div className="text-gray-500 text-xs">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BENEFITS */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-2">
              O que o <span className="text-[#00ddb4]">Secaps Black</span> faz por você
            </h2>
            <p className="text-gray-400 text-sm md:text-base">Uma fórmula completa para transformar seu corpo</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              { icon: "🔥", title: "Queima de Gordura", desc: "Metabolismo 24h" },
              { icon: "😋", title: "Controle do Apetite", desc: "Reduz fome e ansiedade" },
              { icon: "⚡", title: "Mais Energia", desc: "Foco e disposição" },
              { icon: "🍃", title: "Intestino Saudável", desc: "Melhora o funcionamento" },
              { icon: "🩸", title: "Glicose Controlada", desc: "Estabiliza o açúcar" },
              { icon: "💪", title: "Definição Muscular", desc: "Corpo mais definido" },
              { icon: "🌿", title: "Fórmula Natural", desc: "Zero açúcar e glúten" },
              { icon: "🛡️", title: "11 Ativos", desc: "Alta eficácia clínica" },
            ].map(b => (
              <div key={b.title} className="card-dark rounded-xl p-3 md:p-5 text-center">
                <div className="benefit-icon mx-auto mb-2 text-xl">{b.icon}</div>
                <h3 className="font-bold text-white text-xs md:text-sm mb-0.5">{b.title}</h3>
                <p className="text-gray-400 text-xs hidden md:block">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* SCARCITY STRIP */}
      <div className="py-4 px-4 bg-gradient-to-r from-red-900/25 via-red-800/15 to-red-900/25 border-y border-red-800/25">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <p className="text-red-400 font-black text-base uppercase tracking-wide">⚠️ Estoque Limitado</p>
            <p className="text-gray-400 text-xs">Alta demanda — os kits podem esgotar a qualquer momento.</p>
          </div>
          <Link href="/produtos" className="btn-primary text-black font-black px-5 py-2.5 rounded-full uppercase tracking-wide text-sm flex-shrink-0 w-full sm:w-auto text-center">
            🔒 Garantir Meu Kit
          </Link>
        </div>
      </div>

      {/* HOW TO USE */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-5">
                Como Usar Seu<br /><span className="text-[#00ddb4] teal-glow">Secaps Black</span>
              </h2>
              <div className="space-y-3">
                {[
                  { num: "01", text: "2 cápsulas ao dia, preferencialmente pela manhã." },
                  { num: "02", text: "30 min antes das refeições (café da manhã e almoço)." },
                  { num: "03", text: "Pode tomar as duas juntas ou 1 antes de cada refeição." },
                  { num: "04", text: "Não exceder 2 cápsulas por dia." },
                ].map(step => (
                  <div key={step.num} className="flex gap-3 card-dark rounded-xl p-3.5">
                    <span className="text-[#00ddb4] font-black text-xl w-8 flex-shrink-0">{step.num}</span>
                    <p className="text-gray-200 text-sm leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 card-dark rounded-xl p-4 border-[#00ddb4]/30">
                <p className="text-[#00ddb4] font-bold text-sm">⏱ Quando esperar resultados?</p>
                <p className="text-gray-300 text-sm mt-1">• Apetite reduzido: a partir da <strong>1ª semana</strong></p>
                <p className="text-gray-300 text-sm">• Resultados visíveis: <strong>em até 30 dias</strong></p>
              </div>
            </div>
            <div className="relative order-first md:order-last">
              <div className="absolute inset-0 bg-[#00ddb4]/10 blur-3xl rounded-full" />
              <img src="/modo-de-uso.jpeg" alt="Como usar o Secaps Black" className="relative z-10 rounded-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* INGREDIENTS */}
      <section className="py-12 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-2">
            Ingredientes <span className="text-[#00ddb4]">Naturais</span> e Poderosos
          </h2>
          <p className="text-gray-400 mb-8 text-sm">11 ativos selecionados para máxima eficácia</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Fibras","Psyllium","Chia","Café Verde","Laranja Moro","Quitosana","Carnitina","Cromo","Spirulina","+ 2 Ativos Exclusivos"].map(ing => (
              <span key={ing} className="ingredient-badge text-sm">{ing}</span>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {[
              { icon: "🚫🍬", label: "Zero Açúcar" },
              { icon: "🚫🥛", label: "Sem Lactose" },
              { icon: "🚫🌾", label: "Sem Glúten" },
              { icon: "🌱", label: "Fórmula Natural" },
            ].map(item => (
              <div key={item.label} className="card-dark rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="text-[#00ddb4] font-bold text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* TESTIMONIALS */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#00ddb4]/10 border border-[#00ddb4]/30 text-[#00ddb4] text-xs font-semibold px-3 py-1 rounded-full mb-3">
              💬 Resultados Reais
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-2">
              Quem já usou <span className="text-[#00ddb4]">está amando</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm mx-auto">
              Depoimentos de quem já transformou o corpo com o Secaps Black
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIAL_VIDEOS.map((video, i) => (
              <div key={video.id} className="rounded-xl overflow-hidden border border-[#00ddb4]/15 hover:border-[#00ddb4]/40 transition-all">
                <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                  <iframe className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={`Depoimento ${i + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1,2,3,4].map(i => <span key={i} className="star-gold text-xl">★</span>)}
              <span className="star-gold text-xl opacity-60">★</span>
              <span className="text-gray-300 text-sm font-bold ml-2">4.8 de 5</span>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 text-white font-black text-base px-7 py-4 rounded-full uppercase">
              <WA_SVG />
              Falar com Vendedor
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* GUARANTEE */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full" />
              <img src="/garantia.png" alt="Garantia de 90 dias" className="relative z-10 rounded-2xl w-full" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4">
                <span className="text-yellow-400">Garantia Total</span><br />de 90 Dias!
              </h2>
              <p className="text-gray-300 text-base mb-4 leading-relaxed">
                Caso não tenha resultados com o <strong className="text-[#00ddb4]">Secaps Black</strong>, devolvemos <strong className="text-white">100% do seu dinheiro!</strong>
              </p>
              <div className="card-dark rounded-xl p-4 border-yellow-400/25 mb-5">
                <p className="text-yellow-400 font-bold text-base mb-2">✅ Compre com total segurança</p>
                <ul className="space-y-1.5 text-gray-300 text-sm">
                  <li>• 90 dias para testar sem risco</li>
                  <li>• Reembolso 100% garantido</li>
                  <li>• Sem burocracia, sem perguntas</li>
                </ul>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center gap-2 text-white font-black text-base px-7 py-4 rounded-full uppercase w-full sm:w-auto">
                <WA_SVG />
                Falar com Vendedor
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* ANVISA */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4">
                Aprovado pela<br /><span className="text-[#00ddb4] teal-glow">ANVISA</span>
              </h2>
              <p className="text-gray-300 text-base mb-4 leading-relaxed">
                O Secaps Black é <strong className="text-white">certificado e liberado</strong> conforme as normas da ANVISA (RDC 240/2018).
              </p>
              <div className="space-y-2.5">
                {[
                  "Produto isento de registro conforme RDC 240/2018",
                  "Aprovado pelo Anexo 1 da RDC 27/2010",
                  "Conformidade com a RDC 23/2000 da ANVISA",
                  "Suplemento alimentar de qualidade comprovada",
                ].map(item => (
                  <div key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-[#00ddb4] flex-shrink-0 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#00ddb4]/10 blur-3xl rounded-full" />
              <img src="/anvisa.png" alt="Aprovado pela ANVISA" className="relative z-10 rounded-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* SECURITY ALERT */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden border-2 border-gray-800">
            <img src="/alerta.png" alt="Alerta de Segurança" className="w-full" />
          </div>
          <div className="card-dark rounded-2xl p-5 mt-4 text-center border-[#00ddb4]/25">
            <p className="text-[#00ddb4] font-black text-lg mb-2">✅ Compre com quem é autorizado!</p>
            <p className="text-gray-400 text-sm mb-4">Somos revendedores autorizados. Adquira com segurança diretamente com a gente.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 text-white font-black px-6 py-3 rounded-full text-sm">
              <WA_SVG size="sm" />
              Falar com Vendedor
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* LOCATION */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative order-last md:order-first">
              <div className="absolute inset-0 bg-[#00ddb4]/10 blur-3xl rounded-full" />
              <img src="/localizacao.jpeg" alt="Localização Secaps Black" className="relative z-10 rounded-2xl w-full" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">
                Informações <span className="text-[#00ddb4]">Oficiais</span>
              </h2>
              <div className="space-y-2.5">
                {[
                  { icon: "🏭", label: "Fabricante", value: "Capsul Brasil Indústria e Comércio S.A" },
                  { icon: "📍", label: "Endereço", value: "Av. Progresso, 1397 – Arcos, MG" },
                  { icon: "📋", label: "Registro ANVISA", value: "Isento – RDC 240/2018" },
                  { icon: "🏢", label: "CNPJ", value: "29.822.523/0002-86" },
                  { icon: "🛡️", label: "Indicação", value: "Maiores de 19 anos" },
                  { icon: "🚚", label: "Entrega", value: "Até 15 dias úteis" },
                ].map(info => (
                  <div key={info.label} className="flex gap-3 card-dark rounded-xl px-3 py-2.5">
                    <span className="text-lg flex-shrink-0">{info.icon}</span>
                    <div>
                      <p className="text-[#00ddb4] text-xs font-semibold uppercase tracking-wide">{info.label}</p>
                      <p className="text-gray-200 text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRAINDICATIONS */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto card-dark rounded-2xl p-5">
          <h3 className="text-yellow-400 font-bold text-base mb-3">⚠️ Contraindicações</h3>
          <div className="grid grid-cols-3 gap-2 text-xs text-gray-300">
            <div className="bg-yellow-400/10 rounded-lg p-2.5 text-center border border-yellow-400/15">🤰 Gestantes</div>
            <div className="bg-yellow-400/10 rounded-lg p-2.5 text-center border border-yellow-400/15">🍼 Lactantes</div>
            <div className="bg-yellow-400/10 rounded-lg p-2.5 text-center border border-yellow-400/15">🦐 Alérgicos frutos do mar</div>
          </div>
          <p className="text-gray-600 text-xs mt-3">* Contém quitosana derivada de frutos do mar. Consulte seu médico antes do uso.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ddb4]/4 to-transparent pointer-events-none" />
        <div className="max-w-sm mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-3">
            Pronta para <span className="text-[#00ddb4] teal-glow">Transformar</span>?
          </h2>
          <p className="text-gray-400 text-sm mb-2">90 dias de garantia. Sem risco.</p>
          <p className="text-red-400 text-xs font-semibold mb-6 animate-pulse">⚡ Oferta por tempo limitado!</p>
          <div className="flex flex-col gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-white font-black text-base px-6 py-4 rounded-full flex items-center justify-center gap-2 uppercase w-full">
              <WA_SVG />
              Falar com Vendedor
            </a>
            <Link href="/produtos"
              className="btn-primary text-black font-black text-base px-6 py-4 rounded-full flex items-center justify-center gap-2 uppercase w-full">
              🛒 Ver Kits com Desconto
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-7 px-4 text-center text-gray-600 text-xs">
        <p className="mb-1 text-[#00ddb4]/60 font-semibold">@vivalevemulher.shop — Revendedora Autorizada</p>
        <p>Suplemento alimentar conforme ANVISA RDC 240/2018 • CNPJ: 29.822.523/0002-86</p>
        <p className="mt-1">Indicado para maiores de 19 anos. Consulte um médico antes de iniciar qualquer suplementação.</p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
        className="floating-btn btn-whatsapp text-white font-bold px-4 py-3.5 rounded-full flex items-center gap-2 shadow-2xl">
        <WA_SVG size="sm" />
        <span className="font-black text-sm">Falar com Vendedor</span>
      </a>

      <BuyerNotification />
    </div>
  );
}
