import { Link } from "wouter";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "558540420501";
const WHATSAPP_MSG = encodeURIComponent("Olá! Quero saber mais sobre o Secaps Black!");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const TESTIMONIAL_VIDEOS = [
  { id: "yG7UCRHFWdY" }, { id: "R38LT_523yY" }, { id: "Ub0JS8_-RJM" },
  { id: "Wf74ppAbbcY" }, { id: "av38riEoZNE" }, { id: "ZxJAIJ4I6rA" },
];

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
      <span className="font-mono font-black text-white text-xs tracking-widest">
        {pad(h)}:{pad(m)}:{pad(s)}
      </span>
      <span className="text-gray-600 text-xs mx-3">·</span>
      <span className="text-gray-400 text-xs">Estoque limitado</span>
    </div>
  );
}

function ViewerCount() {
  const [count, setCount] = useState(47);
  useEffect(() => {
    const t = setInterval(() => setCount(c => Math.max(30, c + Math.floor(Math.random() * 3) - 1)), 9000);
    return () => clearInterval(t);
  }, []);
  return (
    <p className="text-gray-500 text-xs font-medium">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 align-middle" />
      {count} pessoas vendo agora
    </p>
  );
}

export default function LandingPage() {
  return (
    <div className="gradient-bg min-h-screen text-white">
      <CountdownBar />

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/6">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3.5">
          <span className="font-black text-white tracking-tight text-base">
            <span className="text-[#00ddb4]">SECAPS</span> BLACK
          </span>
          <div className="flex items-center gap-2.5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-secaps-top"
              className="btn-whatsapp text-white text-xs font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5">
              <WaSvg />
              <span className="hidden sm:inline">Falar com Vendedor</span>
              <span className="sm:hidden">Contato</span>
            </a>
            <Link href="/secaps-black/produtos" id="btn-cta-secaps-top"
              className="btn-primary text-black text-xs font-bold px-3.5 py-2 rounded-full">
              Ver Kits
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-5 pt-12 pb-10 text-center max-w-3xl mx-auto">
        <p className="text-[#00ddb4] text-xs font-semibold uppercase tracking-widest mb-5">
          Revendedora Autorizada · @vivalevemulher.shop
        </p>
        <h1 className="text-[clamp(2.4rem,9vw,5rem)] font-black uppercase leading-[1.05] mb-4 tracking-tight">
          Queime gordura<br />
          <span className="text-[#00ddb4]">de verdade.</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mb-2 leading-relaxed">
          A fórmula que está transformando o corpo de mais de{" "}
          <span className="text-white font-semibold">100 mil brasileiras</span>.
        </p>
        <div className="flex items-center justify-center gap-1.5 mb-8">
          <span className="text-[#FFD700] text-sm">★★★★</span>
          <span className="text-[#FFD700] text-sm opacity-50">★</span>
          <span className="text-gray-500 text-xs ml-1">4.8 · +100.000 clientes</span>
          <span className="text-gray-700 mx-2">·</span>
          <ViewerCount />
        </div>

        {/* VSL */}
        <div className="rounded-2xl overflow-hidden border border-white/8 shadow-[0_0_60px_rgba(0,221,180,0.1)]">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/R-Syv38lqmI?rel=0&modestbranding=1&color=white"
              title="Secaps Black — Nutricionista revela o segredo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          </div>
        </div>
        <p className="text-gray-600 text-xs mt-2">Ative o som · Informações importantes sobre sua saúde</p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-7 max-w-sm mx-auto sm:max-w-none sm:justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-secaps-hero"
            className="btn-whatsapp text-white font-bold text-sm px-7 py-4 rounded-full flex items-center justify-center gap-2">
            <WaSvg />
            Falar com Vendedor
          </a>
          <Link href="/secaps-black/produtos" id="btn-cta-secaps-hero"
            className="btn-primary text-black font-bold text-sm px-7 py-4 rounded-full flex items-center justify-center">
            Ver os kits com desconto
          </Link>
        </div>
      </section>

      {/* NUMBERS STRIP */}
      <div className="border-y border-white/6 bg-white/2 py-5 px-5">
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { val: "+100 mil", label: "clientes satisfeitas" },
            { val: "4.8 / 5", label: "avaliação média" },
            { val: "90 dias", label: "garantia total" },
            { val: "11 ativos", label: "fórmula exclusiva" },
          ].map(item => (
            <div key={item.label} className="text-center">
              <p className="text-[#00ddb4] font-black text-xl leading-none">{item.val}</p>
              <p className="text-gray-500 text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BENEFITS */}
      <section className="py-16 px-5 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-center mb-2">
          O que o Secaps Black <span className="text-[#00ddb4]">faz por você</span>
        </h2>
        <p className="text-gray-500 text-sm text-center mb-10">Uma fórmula completa, não apenas um termogênico.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: "🔥", title: "Queima de gordura", desc: "Acelera o metabolismo 24h por dia" },
            { icon: "🍃", title: "Menos apetite", desc: "Controla a fome e a compulsão" },
            { icon: "⚡", title: "Mais energia", desc: "Foco e disposição no dia a dia" },
            { icon: "🌿", title: "Intestino regulado", desc: "Funcionamento saudável e leve" },
            { icon: "💪", title: "Definição corporal", desc: "Auxilia na preservação muscular" },
            { icon: "🩸", title: "Glicose estável", desc: "Controla os níveis de açúcar no sangue" },
            { icon: "✳️", title: "Fórmula limpa", desc: "Sem glúten, lactose ou açúcar" },
            { icon: "🛡", title: "11 ingredientes", desc: "Selecionados por alta eficácia" },
          ].map(b => (
            <div key={b.title} className="bg-white/3 border border-white/6 rounded-xl p-4 hover:border-[#00ddb4]/30 transition-colors">
              <div className="text-xl mb-2">{b.icon}</div>
              <p className="text-white font-semibold text-sm leading-tight mb-1">{b.title}</p>
              <p className="text-gray-500 text-xs leading-snug hidden sm:block">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-16 px-5 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#00ddb4] text-xs font-semibold uppercase tracking-widest mb-3 text-center">Modo de uso</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-8 text-center">
            Simples de usar,<br />resultado rápido.
          </h2>
          <div className="space-y-3 mb-8">
            {[
              "Tome 2 cápsulas por dia, preferencialmente pela manhã.",
              "30 minutos antes das suas refeições principais.",
              "Pode tomar as duas juntas ou uma por refeição.",
              "Não exceda 2 cápsulas diárias.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/3 border border-white/6 rounded-xl px-4 py-3.5">
                <span className="text-[#00ddb4] font-black text-base w-6 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-gray-300 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#00ddb4]/6 border border-[#00ddb4]/15 rounded-xl px-5 py-4">
            <p className="text-white font-semibold text-sm mb-1">Quando começar a sentir?</p>
            <p className="text-gray-400 text-sm">A redução do apetite pode acontecer já na primeira semana. Resultados visíveis em até 30 dias de uso contínuo.</p>
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="py-16 px-5 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#00ddb4] text-xs font-semibold uppercase tracking-widest mb-3">Composição</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-2">Ingredientes naturais</h2>
          <p className="text-gray-500 text-sm mb-8">11 ativos selecionados para máxima eficácia</p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Fibras", "Psyllium", "Chia", "Café Verde", "Laranja Moro", "Quitosana", "Carnitina", "Cromo", "Spirulina", "+ 2 Ativos Exclusivos"].map(ing => (
              <span key={ing} className="bg-[#00ddb4]/8 border border-[#00ddb4]/20 text-[#00ddb4] text-xs px-4 py-1.5 rounded-full font-medium">
                {ing}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
            {["Zero açúcar", "Sem lactose", "Sem glúten", "100% natural"].map(item => (
              <div key={item} className="bg-white/3 border border-white/6 rounded-xl py-2.5 px-1 text-center">
                <p className="text-gray-300 text-[11px] font-medium leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-5 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#00ddb4] text-xs font-semibold uppercase tracking-widest text-center mb-3">Depoimentos</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-center mb-2">
            Quem já usou está amando
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10 max-w-sm mx-auto">
            Resultados reais de clientes que transformaram o corpo com o Secaps Black.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIAL_VIDEOS.map((v, i) => (
              <div key={v.id} className="rounded-xl overflow-hidden border border-white/8">
                <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                  <iframe className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                    title={`Depoimento ${i + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-secaps-testimonials"
              className="btn-whatsapp inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-4 rounded-full">
              <WaSvg />
              Falar com Vendedor
            </a>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 px-5 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500/6 blur-3xl rounded-full" />
            <img src="/garantia-90-dias.png" alt="Garantia de 90 dias" className="relative z-10 w-full" />
          </div>
          <div>
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Sem risco</p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">
              Garantia total<br />de 90 dias.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experimente por 90 dias. Se não gostar dos resultados por qualquer motivo, devolvemos <strong className="text-white">100% do seu dinheiro</strong>. Sem burocracia, sem perguntas.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-7">
              {["90 dias para testar sem pressão", "Reembolso total garantido", "Processo simples e rápido"].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#00ddb4] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-secaps-guarantee"
              className="btn-whatsapp inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-4 rounded-full w-full sm:w-auto justify-center">
              <WaSvg />
              Falar com Vendedor
            </a>
          </div>
        </div>
      </section>

      {/* ANVISA */}
      <section className="py-16 px-5 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#00ddb4] text-xs font-semibold uppercase tracking-widest mb-3">Segurança</p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">
            Produto original,<br />regulamentado.
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-7 max-w-md mx-auto">
            O Secaps Black é fabricado conforme as normas da ANVISA e comercializado exclusivamente por revendedores autorizados.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {[
              "Isento de registro — RDC 240/2018",
              "Conformidade com RDC 27/2010 e 23/2000",
              "Fabricado por Capsul Brasil S.A — Arcos, MG",
              "Adquira apenas com revendedores autorizados",
            ].map(item => (
              <div key={item} className="flex items-start gap-3 bg-white/3 border border-white/6 rounded-xl px-4 py-3">
                <span className="text-[#00ddb4] font-bold flex-shrink-0 mt-0.5">✓</span>
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-5 text-center border-t border-white/5">
        <div className="max-w-sm mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black uppercase mb-3">
            Pronta para<br /><span className="text-[#00ddb4]">começar?</span>
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            90 dias de garantia. Compra 100% segura.
          </p>
          <div className="flex flex-col gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-secaps-final"
              className="btn-whatsapp text-white font-bold text-sm px-7 py-4 rounded-full flex items-center justify-center gap-2 w-full">
              <WaSvg />
              Falar com Vendedor
            </a>
            <Link href="/secaps-black/produtos" id="btn-cta-secaps-final"
              className="btn-primary text-black font-bold text-sm px-7 py-4 rounded-full flex items-center justify-center w-full">
              Ver kits com desconto
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-5 text-center">
        <p className="text-[#00ddb4]/50 text-xs font-medium mb-2">@vivalevemulher.shop · Revendedora Autorizada</p>
        <p className="text-gray-700 text-xs leading-relaxed max-w-md mx-auto">
          Suplemento alimentar isento de registro conforme ANVISA RDC 240/2018 · CNPJ 29.822.523/0002-86<br />
          Indicado para maiores de 19 anos. Contraindicado para gestantes, lactantes e alérgicos a frutos do mar.<br />
          Consulte um profissional de saúde antes de iniciar qualquer suplementação.
        </p>
      </footer>

      {/* FLOATING BUTTON */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-secaps-floating"
        className="floating-btn btn-whatsapp text-white font-semibold px-4 py-3.5 rounded-full flex items-center gap-2 shadow-2xl text-sm">
        <WaSvg />
        <span>Falar com Vendedor</span>
      </a>
    </div>
  );
}
