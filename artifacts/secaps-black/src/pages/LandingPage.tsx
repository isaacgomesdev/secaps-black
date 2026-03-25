import { Link } from "wouter";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "558540420501";
const WHATSAPP_MSG = encodeURIComponent("Olá! Quero saber mais sobre o Secaps Black!");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const TESTIMONIAL_VIDEOS = [
  { id: "yG7UCRHFWdY", title: "Depoimento 1" },
  { id: "R38LT_523yY", title: "Depoimento 2" },
  { id: "Ub0JS8_-RJM", title: "Depoimento 3" },
  { id: "Wf74ppAbbcY", title: "Depoimento 4" },
  { id: "av38riEoZNE", title: "Depoimento 5" },
  { id: "ZxJAIJ4I6rA", title: "Depoimento 6" },
];

const BUYER_NAMES = [
  "Ana P.", "Fernanda S.", "Juliana M.", "Carla R.", "Patrícia L.",
  "Renata C.", "Bianca F.", "Larissa T.", "Camila N.", "Tatiane O.",
  "Vanessa B.", "Simone A.", "Débora K.", "Luciana G.", "Mariana Z.",
];
const CITIES = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG",
  "Fortaleza, CE", "Salvador, BA", "Curitiba, PR", "Manaus, AM",
  "Recife, PE", "Porto Alegre, RS", "Brasília, DF", "Goiânia, GO",
  "Belém, PA", "Florianópolis, SC", "Natal, RN", "Maceió, AL",
];
const KIT_NAMES = ["Kit 3 Meses", "Kit 5 Meses", "Kit 12 Meses", "Kit 3 Meses", "Kit 5 Meses"];

const WA_SVG = ({ cls = "w-6 h-6" }) => (
  <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function useCountdown(initialSeconds: number) {
  const [secs, setSecs] = useState(initialSeconds);
  useEffect(() => {
    const t = setInterval(() => setSecs(s => (s <= 0 ? initialSeconds : s - 1)), 1000);
    return () => clearInterval(t);
  }, [initialSeconds]);
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  return { h, m, s };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black/60 border border-red-500/40 rounded-lg px-3 py-2 min-w-[52px] text-center">
        <span className="text-white font-black text-2xl tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-red-400 text-[10px] uppercase tracking-wider mt-1">{label}</span>
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
      setData({
        name: BUYER_NAMES[idx],
        city: CITIES[Math.floor(Math.random() * CITIES.length)],
        kit: KIT_NAMES[Math.floor(Math.random() * KIT_NAMES.length)],
      });
      setVisible(true);
      timeout = setTimeout(() => setVisible(false), 4000);
    };

    const first = setTimeout(() => {
      show();
      interval = setInterval(show, 18000);
    }, 5000);

    return () => {
      clearTimeout(first);
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-28 left-4 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
      }`}
    >
      <div className="bg-gray-900/95 border border-[#00ddb4]/30 rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 max-w-[280px]">
        <div className="w-10 h-10 rounded-full bg-[#00ddb4]/20 border border-[#00ddb4]/40 flex items-center justify-center text-xl flex-shrink-0">
          🛒
        </div>
        <div>
          <p className="text-white text-xs font-bold">{data.name} de {data.city}</p>
          <p className="text-[#00ddb4] text-xs">acabou de comprar o <strong>{data.kit}</strong></p>
          <p className="text-gray-500 text-[10px] mt-0.5">há alguns minutos</p>
        </div>
      </div>
    </div>
  );
}

function ViewerCount() {
  const [count, setCount] = useState(47);
  useEffect(() => {
    const t = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3) - 1);
    }, 7000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-semibold px-3 py-1.5 rounded-full">
      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
      {count} pessoas vendo esta página agora
    </div>
  );
}

export default function LandingPage() {
  const { h, m, s } = useCountdown(2 * 3600 + 37 * 60 + 14);

  return (
    <div className="gradient-bg min-h-screen text-white">

      {/* URGENCY TOP BANNER */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-2.5 px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-wide">
          ⚠️ Promoção por tempo limitado — Estoque quase esgotado! Garanta o seu antes que acabe!
        </p>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-black/70 backdrop-blur-md border-b border-teal-900/40">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-[#00ddb4] tracking-tight">⚡SECAPS</span>
          <span className="text-white font-black text-xl tracking-widest">BLACK</span>
        </div>
        <div className="flex gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-white font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2"
          >
            <WA_SVG cls="w-4 h-4" />
            WhatsApp
          </a>
          <Link
            href="/produtos"
            className="btn-primary text-black font-bold px-4 py-2 rounded-full text-sm"
          >
            Ver Produtos
          </Link>
        </div>
      </nav>

      {/* ── HERO + VSL ── */}
      <section className="hero-gradient pt-10 pb-0 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#00ddb4]/5 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-[#00ddb4]/10 border border-[#00ddb4]/30 text-[#00ddb4] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ✅ Revendedora Autorizada • @vivalevemulher.shop
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-3">
            <span className="text-white">Queime Gordura</span><br />
            <span className="text-[#00ddb4] teal-glow">De Verdade</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-3 font-light max-w-2xl mx-auto">
            A fórmula 10x mais potente que está transformando a vida de{" "}
            <strong className="text-white">+100.000 brasileiros</strong>
          </p>

          <div className="flex items-center justify-center gap-1 mb-4">
            {[1,2,3,4].map(i => <span key={i} className="star-gold text-xl">★</span>)}
            <span className="star-gold text-xl opacity-60">★</span>
            <span className="text-gray-400 text-sm ml-2">4.8 de 5 • +100.000 clientes</span>
          </div>

          {/* Live viewers */}
          <div className="flex justify-center mb-5">
            <ViewerCount />
          </div>

          {/* Countdown */}
          <div className="inline-flex flex-col items-center bg-black/50 border border-red-500/30 rounded-2xl px-6 py-4 mb-5">
            <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
              ⏱ Promoção encerra em
            </p>
            <div className="flex items-center gap-2">
              <CountdownUnit value={h} label="horas" />
              <span className="text-red-400 font-black text-2xl pb-4">:</span>
              <CountdownUnit value={m} label="min" />
              <span className="text-red-400 font-black text-2xl pb-4">:</span>
              <CountdownUnit value={s} label="seg" />
            </div>
            <p className="text-gray-400 text-xs mt-3">
              ⚠️ Apenas <strong className="text-red-400">últimas unidades</strong> no estoque
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider animate-pulse">
            🎬 Assista antes de comprar — nutricionista revela o segredo
          </div>
        </div>

        {/* VSL VIDEO */}
        <div className="max-w-4xl mx-auto relative z-10 mt-2 mb-0">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,221,180,0.2)] border border-[#00ddb4]/20">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/R-Syv38lqmI?rel=0&modestbranding=1&color=white"
                title="Essa nutricionista revelou por que você não consegue emagrecer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-2 text-center">
            🔔 Ligue o som • Vídeo pode conter informações importantes sobre sua saúde
          </p>
        </div>

        {/* CTA below video */}
        <div className="max-w-4xl mx-auto relative z-10 py-10">
          <p className="text-[#00ddb4] font-bold text-lg mb-2 uppercase tracking-wide">
            👇 Pronta? Garanta o seu com desconto especial
          </p>
          <p className="text-red-400 text-sm font-semibold mb-5 animate-pulse">
            🔥 Desconto válido somente hoje — Não perca essa oportunidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-white font-black text-lg px-8 py-4 rounded-full flex items-center justify-center gap-3 uppercase tracking-wide"
            >
              <WA_SVG />
              Falar no WhatsApp
            </a>
            <Link
              href="/produtos"
              className="btn-primary text-black font-black text-lg px-8 py-4 rounded-full flex items-center justify-center gap-3 uppercase tracking-wide"
            >
              🛒 Ver Todos os Kits
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <div className="bg-[#00ddb4]/10 border-y border-[#00ddb4]/20 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-12 text-center">
          {[
            { icon: "👥", val: "+100.000", label: "Clientes Satisfeitos" },
            { icon: "⭐", val: "4.8/5", label: "Avaliação Média" },
            { icon: "🏆", val: "90 dias", label: "Garantia Total" },
            { icon: "🚀", val: "Fórmula 10x", label: "Mais Potente" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <div className="text-left">
                <div className="text-[#00ddb4] font-black text-lg leading-tight">{item.val}</div>
                <div className="text-gray-400 text-xs">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BENEFITS */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-3">
              O que o <span className="text-[#00ddb4]">Secaps Black</span> faz por você
            </h2>
            <p className="text-gray-400 text-lg">Uma fórmula completa para transformar seu corpo</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🔥", title: "Queima de Gordura", desc: "Aceleração do metabolismo 24h" },
              { icon: "😋", title: "Controle do Apetite", desc: "Reduz a fome e a ansiedade" },
              { icon: "⚡", title: "Mais Energia", desc: "Mais foco e disposição no dia" },
              { icon: "🍃", title: "Melhora Intestinal", desc: "Funcionamento saudável" },
              { icon: "🩸", title: "Glicose Controlada", desc: "Estabiliza os níveis de açúcar" },
              { icon: "💪", title: "Definição Muscular", desc: "Auxilia na definição do corpo" },
              { icon: "🌿", title: "Fórmula Natural", desc: "Zero açúcar, sem lactose e glúten" },
              { icon: "🛡️", title: "11 Ativos", desc: "Ingredientes de alta eficácia" },
            ].map((b) => (
              <div key={b.title} className="card-dark rounded-2xl p-5 text-center hover:border-[#00ddb4]/50 transition-colors">
                <div className="benefit-icon mx-auto mb-3 text-2xl">{b.icon}</div>
                <h3 className="font-bold text-white text-sm mb-1">{b.title}</h3>
                <p className="text-gray-400 text-xs">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-8"></div>

      {/* SCARCITY STRIP */}
      <div className="py-5 px-4 bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 border-y border-red-700/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-red-400 font-black text-lg uppercase tracking-wide">⚠️ Atenção: Estoque Limitado</p>
            <p className="text-gray-300 text-sm">Devido à alta demanda, os kits podem esgotar a qualquer momento.</p>
          </div>
          <Link
            href="/produtos"
            className="btn-primary text-black font-black px-6 py-3 rounded-full uppercase tracking-wide flex-shrink-0"
          >
            🔒 Garantir Meu Kit Agora
          </Link>
        </div>
      </div>

      {/* HOW TO USE */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                Como Usar Seu<br /><span className="text-[#00ddb4] teal-glow">Secaps Black</span>
              </h2>
              <div className="space-y-4">
                {[
                  { num: "01", text: "2 cápsulas ao dia, preferencialmente pela manhã, por conta da cafeína." },
                  { num: "02", text: "30 min antes das principais refeições (café da manhã e almoço)." },
                  { num: "03", text: "Pode tomar as duas cápsulas juntas ou 1 antes de cada refeição." },
                  { num: "04", text: "Não exceder a recomendação de uso diário de 2 cápsulas ao dia." },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 card-dark rounded-xl p-4">
                    <span className="text-[#00ddb4] font-black text-2xl w-10 flex-shrink-0">{step.num}</span>
                    <p className="text-gray-200 text-sm leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 card-dark rounded-xl p-4 border-[#00ddb4]/40">
                <p className="text-[#00ddb4] font-bold text-sm">⏱ Quando esperar resultados?</p>
                <p className="text-gray-300 text-sm mt-1">• Redução do apetite: pode ocorrer na <strong>1ª semana</strong></p>
                <p className="text-gray-300 text-sm">• Resultados visíveis: <strong>em até 30 dias</strong></p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#00ddb4]/10 blur-3xl rounded-full"></div>
              <img
                src="/modo-de-uso.jpeg"
                alt="Como usar o Secaps Black"
                className="relative z-10 rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8"></div>

      {/* INGREDIENTS */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-3">
            Ingredientes <span className="text-[#00ddb4]">Naturais</span> e Poderosos
          </h2>
          <p className="text-gray-400 mb-10">11 ativos selecionados para máxima eficácia</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Fibras", "Psyllium", "Chia", "Café Verde", "Laranja Moro", "Quitosana", "Carnitina", "Cromo", "Spirulina", "+ 2 Ativos Exclusivos"].map((ing) => (
              <span key={ing} className="ingredient-badge">{ing}</span>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { icon: "🚫🍬", label: "Zero Açúcar" },
              { icon: "🚫🥛", label: "Sem Lactose" },
              { icon: "🚫🌾", label: "Sem Glúten" },
              { icon: "🌱", label: "Fórmula Natural" },
            ].map((item) => (
              <div key={item.label} className="card-dark rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-[#00ddb4] font-bold text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-8"></div>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#00ddb4]/10 border border-[#00ddb4]/30 text-[#00ddb4] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              💬 Resultados Reais
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-3">
              Quem já usou <span className="text-[#00ddb4]">está amando</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Veja os depoimentos de quem já transformou o corpo com o Secaps Black
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIAL_VIDEOS.map((video, i) => (
              <div
                key={video.id}
                className="rounded-2xl overflow-hidden border border-[#00ddb4]/20 shadow-[0_0_30px_rgba(0,221,180,0.08)] hover:border-[#00ddb4]/50 transition-all hover:shadow-[0_0_40px_rgba(0,221,180,0.18)]"
              >
                <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={`Depoimento ${i + 1} — Secaps Black`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1,2,3,4].map(i => <span key={i} className="star-gold text-2xl">★</span>)}
              <span className="star-gold text-2xl opacity-60">★</span>
              <span className="text-gray-300 font-bold ml-2">4.8 de 5 — +100.000 clientes satisfeitos</span>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-3 text-white font-black text-lg px-8 py-4 rounded-full uppercase"
            >
              <WA_SVG />
              Quero o Meu Também!
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8"></div>

      {/* GUARANTEE */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full"></div>
              <img src="/garantia.png" alt="Garantia de 90 dias" className="relative z-10 rounded-2xl w-full" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                <span className="text-yellow-400">Garantia Total</span><br />de 90 Dias!
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Caso não goste ou não tenha resultados com o <strong className="text-[#00ddb4]">Secaps Black</strong>, basta pedir reembolso e devolveremos <strong className="text-white">totalmente o seu dinheiro!</strong>
              </p>
              <div className="card-dark rounded-xl p-5 border-yellow-400/30">
                <p className="text-yellow-400 font-bold text-lg mb-2">✅ Compre com total segurança</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 90 dias para testar sem risco</li>
                  <li>• Reembolso 100% garantido</li>
                  <li>• Sem burocracia, sem perguntas</li>
                </ul>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-6 inline-flex items-center gap-3 text-white font-black text-lg px-8 py-4 rounded-full uppercase"
              >
                <WA_SVG />
                Quero Pedir Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8"></div>

      {/* ANVISA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
                Aprovado pela<br /><span className="text-[#00ddb4] teal-glow">ANVISA</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                O Secaps Black é <strong className="text-white">certificado e liberado</strong> para comercialização em todo território nacional, conforme as normas da ANVISA (RDC 240/2018).
              </p>
              <div className="space-y-3">
                {[
                  "Produto isento de registro conforme RDC 240/2018",
                  "Aprovado pelo Anexo 1 da RDC 27/2010",
                  "Conformidade com a RDC 23/2000 da ANVISA",
                  "Suplemento alimentar de qualidade comprovada",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="text-[#00ddb4] flex-shrink-0 font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#00ddb4]/10 blur-3xl rounded-full"></div>
              <img src="/anvisa.png" alt="Aprovado pela ANVISA" className="relative z-10 rounded-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8"></div>

      {/* SECURITY ALERT */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="alert-section rounded-2xl overflow-hidden">
            <img src="/alerta.png" alt="Alerta de Segurança" className="w-full" />
          </div>
          <div className="card-dark rounded-2xl p-6 mt-6 text-center border-[#00ddb4]/30">
            <p className="text-[#00ddb4] font-black text-xl mb-2">✅ Compre com quem é autorizado!</p>
            <p className="text-gray-300 mb-4">Somos revendedores autorizados do Secaps Black. Adquira com segurança diretamente com a gente.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 text-white font-black px-6 py-3 rounded-full"
            >
              <WA_SVG cls="w-5 h-5" />
              Falar com Revendedora Autorizada
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8"></div>

      {/* LOCATION */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00ddb4]/10 blur-3xl rounded-full"></div>
              <img src="/localizacao.jpeg" alt="Localização Secaps Black" className="relative z-10 rounded-2xl w-full" />
            </div>
            <div>
              <h2 className="text-4xl font-black uppercase mb-6">
                Informações <span className="text-[#00ddb4]">Oficiais</span>
              </h2>
              <div className="space-y-4">
                {[
                  { icon: "🏭", label: "Fábrica e Logística", value: "Capsul Brasil Indústria e Comércio S.A" },
                  { icon: "📍", label: "Endereço", value: "Av. Progresso, 1397 – São Bento, Arcos – MG" },
                  { icon: "📋", label: "Regulamentação", value: "Produto isento de registro – RDC 240/2018" },
                  { icon: "🏢", label: "CNPJ", value: "29.822.523/0002-86" },
                  { icon: "🛡️", label: "Público", value: "Indicado para maiores de 19 anos" },
                  { icon: "🚚", label: "Entrega", value: "Prazo médio de até 15 dias úteis" },
                ].map((info) => (
                  <div key={info.label} className="flex gap-3 card-dark rounded-xl px-4 py-3">
                    <span className="text-xl flex-shrink-0">{info.icon}</span>
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
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto card-dark rounded-2xl p-6">
          <h3 className="text-yellow-400 font-bold text-lg mb-3">⚠️ Contraindicações</h3>
          <div className="grid grid-cols-3 gap-3 text-sm text-gray-300">
            <div className="bg-yellow-400/10 rounded-lg p-3 text-center border border-yellow-400/20">🤰 Gestantes</div>
            <div className="bg-yellow-400/10 rounded-lg p-3 text-center border border-yellow-400/20">🍼 Lactantes</div>
            <div className="bg-yellow-400/10 rounded-lg p-3 text-center border border-yellow-400/20">🦐 Alérgicos a frutos do mar</div>
          </div>
          <p className="text-gray-500 text-xs mt-3">* Contém quitosana derivada de frutos do mar. Consulte seu médico antes do uso.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ddb4]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Pronta para <span className="text-[#00ddb4] teal-glow">Transformar</span> seu Corpo?
          </h2>
          <p className="text-gray-300 text-lg mb-2">Comece hoje. 90 dias de garantia. Sem risco.</p>
          <p className="text-red-400 font-bold text-sm mb-8 animate-pulse">
            ⚡ Oferta por tempo limitado — Garanta agora antes que acabe!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-white font-black text-xl px-10 py-5 rounded-full flex items-center justify-center gap-3 uppercase tracking-wide"
            >
              <WA_SVG />
              Falar no WhatsApp
            </a>
            <Link
              href="/produtos"
              className="btn-primary text-black font-black text-xl px-10 py-5 rounded-full flex items-center justify-center gap-3 uppercase tracking-wide"
            >
              🛒 Ver Kits com Desconto
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#00ddb4]/10 py-8 px-4 text-center text-gray-500 text-sm">
        <p className="mb-2 text-[#00ddb4] font-semibold">@vivalevemulher.shop</p>
        <p>Revendedora Autorizada Secaps Black</p>
        <p className="mt-2">Suplemento alimentar conforme normas da ANVISA (RDC 240/2018) • CNPJ: 29.822.523/0002-86</p>
        <p className="mt-1 text-xs">Indicado para maiores de 19 anos. Consulte um médico antes de iniciar qualquer suplementação.</p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn btn-whatsapp text-white font-bold px-5 py-4 rounded-full flex items-center gap-2 shadow-2xl"
      >
        <WA_SVG />
        <span className="font-black">Falar Agora</span>
      </a>

      {/* BUYER NOTIFICATION */}
      <BuyerNotification />
    </div>
  );
}
