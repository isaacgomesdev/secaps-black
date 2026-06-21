import { Link } from "wouter";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "558540420501";
const WHATSAPP_MSG = encodeURIComponent("Olá! Quero saber mais sobre o Velmo Black!");
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
    <div className="bg-[#1f1a17] py-2 px-4 text-center">
      <span className="text-[#e8d5c4] text-xs mr-3">Promoção especial encerra em</span>
      <span className="font-mono font-bold text-white text-xs tracking-widest">
        {pad(h)}:{pad(m)}:{pad(s)}
      </span>
      <span className="text-gray-500 text-xs mx-3">·</span>
      <span className="text-[#e8d5c4] text-xs">Estoque limitado</span>
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
    <p className="text-stone-500 text-xs font-medium">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-400 mr-1.5 align-middle animate-pulse" />
      {count} mulheres vendo agora
    </p>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen text-stone-800 font-sans selection:bg-rose-200">
      <CountdownBar />

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3.5">
          <img src="/images/velmo/logo-1.png" alt="Velmo Black" className="h-8 sm:h-10 object-contain" />
          <div className="flex items-center gap-2.5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-velmo-top"
              className="btn-whatsapp text-white text-xs font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5 shadow-md">
              <WaSvg />
              <span className="hidden sm:inline">Falar com Vendedor</span>
              <span className="sm:hidden">Contato</span>
            </a>
            <Link href="/velmo-black/produtos" id="btn-cta-velmo-top"
              className="bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800 text-[#F5E6D3] text-xs font-bold px-4 py-2 rounded-full shadow-md transition-all">
              Ver Kits
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-5 pt-12 pb-16 text-center max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-left">
          <p className="text-rose-500 text-xs font-bold uppercase tracking-widest mb-4">
            Emagreça com saúde e disposição
          </p>
          <h1 className="text-[clamp(2.4rem,6vw,4rem)] font-black uppercase leading-[1.05] mb-5 tracking-tight text-stone-900">
            Assuma o controle<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-500">do seu corpo.</span>
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-md mb-6 leading-relaxed">
            Velmo Black atua no controle do apetite, metabolismo e redução da vontade por doces. Tudo o que você precisa em uma cápsula.
          </p>
          
          <div className="flex items-center gap-1.5 mb-8">
            <span className="text-amber-400 text-sm">★★★★</span>
            <span className="text-amber-400 text-sm">★</span>
            <span className="text-stone-500 text-xs ml-1 font-medium">4.8 de 5 avaliações</span>
            <span className="text-stone-300 mx-2">|</span>
            <ViewerCount />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-sm sm:max-w-none">
            <Link href="/velmo-black/produtos" id="btn-cta-velmo-hero"
              className="bg-gradient-to-r from-stone-900 to-black text-[#F5E6D3] font-bold text-sm px-8 py-4 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
              Ver os kits com desconto
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-velmo-hero"
              className="bg-white border border-stone-200 text-stone-700 font-bold text-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-sm hover:bg-stone-50 transition-colors">
              <WaSvg />
              Tirar Dúvidas
            </a>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-md">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-amber-50 rounded-full blur-3xl opacity-60"></div>
          <img src="/images/velmo/mockup.png" alt="Potes Velmo Black" className="relative z-10 w-full drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
        </div>
      </section>

      {/* NUMBERS STRIP */}
      <div className="bg-white border-y border-stone-100 py-8 px-5 shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "Apetite", label: "Menos fome e compulsão" },
            { val: "Energia", label: "Mais disposição no dia a dia" },
            { val: "Doces", label: "Redução da vontade" },
            { val: "30 dias", label: "Garantia incondicional" },
          ].map(item => (
            <div key={item.label} className="text-center">
              <p className="text-stone-800 font-black text-xl leading-none mb-1">{item.val}</p>
              <p className="text-stone-500 text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BENEFITS */}
      <section className="py-20 px-5 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-stone-900 mb-3">
            Por que escolher o <span className="text-rose-500">Velmo Black?</span>
          </h2>
          <p className="text-stone-500 text-sm max-w-xl mx-auto">Uma fórmula premium, equilibrada e desenvolvida especificamente para a rotina e o corpo da mulher.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "✨", title: "Controle da Fome", desc: "Auxilia na sensação de saciedade prolongada" },
            { icon: "🍫", title: "Menos Doces", desc: "Apoia a redução da compulsão por açúcar" },
            { icon: "⚡", title: "Metabolismo", desc: "Suporte energético moderado e equilibrado" },
            { icon: "🧘‍♀️", title: "Bem-estar", desc: "Associação de ingredientes para disposição mental" },
            { icon: "🛡️", title: "Antioxidante", desc: "Proteção celular e suporte imunológico" },
            { icon: "💊", title: "Praticidade", desc: "Apenas 2 cápsulas ao dia na sua rotina" },
          ].map(b => (
            <div key={b.title} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-2xl mb-4">{b.icon}</div>
              <p className="text-stone-900 font-bold text-lg mb-2">{b.title}</p>
              <p className="text-stone-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="py-20 px-5 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/velmo/logo-3.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-3">Fórmula Premium</p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">Ingredientes Estratégicos</h2>
            <p className="text-stone-400 text-sm">Sem estimulantes agressivos. Foco no equilíbrio.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "L-Triptofano", desc: "Precursor da serotonina. Auxilia no equilíbrio do humor e na redução da vontade de doces." },
              { title: "Antocianinas (Laranja Moro)", desc: "Antioxidantes naturais que auxiliam nas estratégias de controle de peso." },
              { title: "Cromo", desc: "Mineral essencial que participa do metabolismo da glicose e ação da insulina." },
              { title: "Cafeína Moderada", desc: "Suporte energético e estado de alerta sem causar efeitos estimulantes extremos." },
              { title: "Vitamina C", desc: "Importante ação antioxidante, proteção celular e participação na formação de colágeno." },
              { title: "Proantocianidinas (Canela)", desc: "Compostos bioativos que complementam a ação metabólica." },
            ].map(ing => (
              <div key={ing.title} className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-5 backdrop-blur-sm">
                <h3 className="text-rose-300 font-bold mb-1">{ing.title}</h3>
                <p className="text-stone-300 text-sm leading-relaxed">{ing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-3">Como usar</p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-stone-900 mb-6">Rotina Simples</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 font-black flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">2 cápsulas ao dia</h4>
                  <p className="text-stone-500 text-sm">Preferencialmente 30 minutos antes das principais refeições (café da manhã e almoço).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 font-black flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Hidratação</h4>
                  <p className="text-stone-500 text-sm">Ingerir com um copo de água para melhor absorção dos nutrientes.</p>
                </div>
              </div>
              <div className="bg-rose-50 border border-rose-100 rounded-xl p-5 mt-4">
                <h4 className="font-bold text-rose-900 text-sm mb-1">Tempo de resultado?</h4>
                <p className="text-rose-800/80 text-sm">Nas primeiras semanas nota-se maior saciedade e energia. Após 30 dias, os benefícios metabólicos tornam-se mais evidentes.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
             <img src="/images/velmo/potes-1.png" alt="Pote Velmo Black" className="w-2/3 max-w-sm drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-20 px-5 bg-amber-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-stone-900 mb-4">Garantia de 30 dias</h2>
          <p className="text-stone-600 text-base leading-relaxed mb-8">
            O Velmo Black possui garantia de 30 dias. Caso você não fique satisfeita com o produto, poderá solicitar o reembolso dentro desse período, oferecendo mais segurança na sua compra.
          </p>
          <Link href="/velmo-black/produtos" id="btn-cta-velmo-guarantee"
            className="bg-gradient-to-r from-stone-900 to-black text-[#F5E6D3] font-bold text-sm px-8 py-4 rounded-full inline-flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
            Experimentar sem risco
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-center text-stone-900 mb-10">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Quem pode tomar o Velmo Black?", a: "Indicado para adultos a partir de 19 anos. Não recomendado para gestantes e lactantes salvo sob orientação médica." },
              { q: "Tem efeitos colaterais?", a: "Geralmente bem tolerado. Em casos raros de sensibilidade à cafeína, pode ocorrer dor de cabeça leve ou insônia." },
              { q: "Posso tomar com outros medicamentos?", a: "Pode ser utilizado, mas é importante consultar um médico antes se você tiver diabetes, hipertensão, ou uso contínuo de controlados." },
              { q: "Em quanto tempo recebo o produto?", a: "A entrega é realizada pelos Correios e pode ocorrer em até 15 dias úteis após a postagem, dependendo da sua região." }
            ].map((faq, i) => (
              <div key={i} className="border border-stone-200 rounded-xl p-5">
                <h4 className="font-bold text-stone-900 mb-2">{faq.q}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-5 bg-stone-900 text-center text-white">
        <div className="max-w-sm mx-auto">
          <img src="/images/velmo/logo-1.png" alt="Velmo Black" className="h-10 mx-auto mb-8 brightness-0 invert opacity-80" />
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">
            Dê o primeiro passo
          </h2>
          <p className="text-stone-400 text-sm mb-8">
            Escolha seu kit e inicie sua transformação hoje mesmo.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/velmo-black/produtos" id="btn-cta-velmo-final"
              className="bg-gradient-to-r from-rose-400 to-rose-500 text-white font-bold text-sm px-7 py-4 rounded-full flex items-center justify-center w-full shadow-lg">
              Ver kits com desconto
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-velmo-final"
              className="btn-whatsapp text-white font-bold text-sm px-7 py-4 rounded-full flex items-center justify-center gap-2 w-full">
              <WaSvg />
              Falar com Vendedor
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 py-10 px-5 text-center">
        <p className="text-stone-500 text-xs font-medium mb-3">@vivalevemulher.shop · Revendedora Autorizada</p>
        <p className="text-stone-600 text-xs leading-relaxed max-w-md mx-auto">
          Suplemento alimentar isento de registro conforme ANVISA RDC 240/2018 · CNPJ 29.822.523/0002-86<br />
          O Velmo Black não substitui alimentação equilibrada, prática de exercícios e acompanhamento profissional.
        </p>
      </footer>

      {/* FLOATING BUTTON */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-velmo-floating"
        className="fixed bottom-6 right-6 btn-whatsapp text-white font-semibold px-4 py-3.5 rounded-full flex items-center gap-2 shadow-2xl text-sm z-50 hover:scale-105 transition-transform">
        <WaSvg />
        <span className="hidden sm:inline">Falar com Vendedor</span>
      </a>
    </div>
  );
}
