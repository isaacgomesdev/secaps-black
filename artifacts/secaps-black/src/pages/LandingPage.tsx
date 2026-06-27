import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "558540420501";
const WHATSAPP_MSG = encodeURIComponent("Olá! Quero saber mais sobre o Velmo Black!");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const WaSvg = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
    <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 py-2.5 px-4 text-center flex items-center justify-center gap-3 flex-wrap">
      <span className="text-rose-100 text-xs font-medium">🔥 Oferta especial encerra em</span>
      <div className="flex items-center gap-1">
        {[pad(h), pad(m), pad(s)].map((v, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="bg-white/20 backdrop-blur text-white font-mono font-black text-sm px-2 py-0.5 rounded">{v}</span>
            {i < 2 && <span className="text-white font-bold text-sm">:</span>}
          </span>
        ))}
      </div>
      <span className="text-rose-100 text-xs font-medium">· Últimas unidades disponíveis</span>
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
    <span className="inline-flex items-center gap-1.5 text-stone-500 text-xs font-medium">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
      {count} mulheres vendo agora
    </span>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Quem pode tomar o Velmo Black?", a: "Indicado para mulheres adultas a partir de 19 anos. Não recomendado para gestantes, lactantes ou menores de idade, salvo com orientação médica específica." },
    { q: "Tem efeitos colaterais?", a: "A fórmula foi desenvolvida para ser suave e bem tolerada. Em casos raros de sensibilidade à cafeína, pode ocorrer leve dor de cabeça ou insônia se tomado à noite. Evite tomar após as 14h." },
    { q: "Posso tomar com outros medicamentos?", a: "Na maioria dos casos sim, mas se você usa medicamentos contínuos para diabetes, hipertensão ou saúde mental, consulte seu médico antes de iniciar." },
    { q: "Em quanto tempo recebo o produto?", a: "Entregamos por Correios em todo o Brasil. O prazo é de até 15 dias úteis após a postagem, podendo ser mais rápido dependendo da sua região." },
    { q: "Como funciona a garantia de 30 dias?", a: "Se você não estiver satisfeita com os resultados em até 30 dias, entre em contato pelo WhatsApp e devolvemos 100% do valor pago. Sem questionamentos, sem burocracia." },
    { q: "Qual a diferença entre os kits?", a: "O princípio ativo é idêntico em todos os kits. A diferença está na duração do tratamento e no desconto por pote: kits maiores garantem mais tempo de uso e o maior custo-benefício." },
    { q: "Quando vou começar a sentir os efeitos?", a: "A maioria das clientes relata maior saciedade e menos vontade de doces já na primeira semana. Os resultados metabólicos mais expressivos surgem entre 30 e 90 dias de uso contínuo." },
  ];
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
          >
            <span className="font-semibold text-stone-900 text-sm">{faq.q}</span>
            <span className={`text-stone-400 text-xl flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48" : "max-h-0"}`}>
            <div className="px-6 pb-5 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-4">
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen text-stone-800 font-sans selection:bg-rose-200">
      <CountdownBar />

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/60 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3.5">
          <img src="/images/velmo/logo-1.png" alt="Velmo Black" className="h-8 sm:h-10 object-contain" />
          <div className="flex items-center gap-2.5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-velmo-top"
              className="btn-whatsapp text-white text-xs font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5 shadow-md">
              <WaSvg />
              <span className="hidden sm:inline">Falar com Vendedor</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <Link href="/velmo-black/produtos" id="btn-cta-velmo-top"
              className="bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800 text-[#F5E6D3] text-xs font-bold px-4 py-2 rounded-full shadow-md transition-all">
              Ver Kits &rarr;
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-5 pt-8 pb-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            Para mulheres que querem emagrecer de verdade
          </div>
          <h1 className="text-[clamp(1.9rem,4.5vw,3.2rem)] font-black uppercase leading-[1.05] mb-3 tracking-tight text-stone-900">
            Controle a fome,<br />
            reduza os doces<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">e emagreça com saúde.</span>
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-md mb-4 leading-relaxed">
            O <strong className="text-stone-800">Velmo Black</strong> atua nas <strong>três causas</strong> do emagrecimento feminino: <em>fome excessiva, compulsão por doces e metabolismo lento.</em> 2 cápsulas por dia, sem dieta radical.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-5">
            <div className="flex items-center gap-1">
              <span className="text-amber-400 text-sm">★★★★★</span>
              <span className="text-stone-500 text-xs font-medium ml-1">4.8 · +2.300 avaliações</span>
            </div>
            <span className="text-stone-300">|</span>
            <ViewerCount />
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 max-w-sm sm:max-w-none mb-5">
            <Link href="/velmo-black/produtos" id="btn-cta-velmo-hero"
              className="bg-gradient-to-r from-stone-900 to-black text-[#F5E6D3] font-bold text-sm px-7 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform">
              🔥 Ver kits com desconto
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-velmo-hero"
              className="bg-white border border-stone-200 text-stone-700 font-bold text-sm px-7 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-sm hover:bg-stone-50 transition-colors">
              <WaSvg />
              Tirar Dúvidas
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
            <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-md border border-green-200">🔒 Compra Segura</div>
            <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-200">🛡️ ANVISA</div>
            <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md border border-amber-200">↩️ Garantia 30 dias</div>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-amber-100 rounded-full blur-3xl opacity-50" />
          <img src="/images/velmo/mockup.png" alt="Potes Velmo Black" className="relative z-10 w-full drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
        </div>
      </section>

      {/* PROBLEM / AGITATION */}
      <section className="bg-stone-900 text-white py-20 px-5">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-4">Você se identifica com isso?</p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase mb-6 leading-tight">
              Por que emagrecer parece tão<br />
              <span className="text-rose-400">difícil pra você?</span>
            </h2>
            <p className="text-stone-400 text-base mb-12 leading-relaxed">
              A verdade é que a maioria das mulheres falha na dieta <strong className="text-stone-200">não por falta de força de vontade</strong> — mas porque o corpo feminino tem necessidades hormonais específicas que nenhuma dieta genérica considera.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                { emoji: "😤", title: "Fome que não passa", desc: "Você come, mas nunca fica satisfeita. A sensação de fome volta em minutos e te sabota o dia todo." },
                { emoji: "🍫", title: "Compulsão por doces", desc: "Após o almoço, à tarde, à noite… A vontade de comer doce parece mais forte que qualquer dieta." },
                { emoji: "🐢", title: "Metabolismo lento", desc: "Você se esforça, restringe e mesmo assim a balança não se move. Seu corpo simplesmente resiste." },
              ].map(p => (
                <div key={p.title} className="bg-stone-800/60 border border-stone-700 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{p.emoji}</div>
                  <h3 className="font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-rose-500/10 border border-rose-500/30 rounded-2xl p-6">
              <p className="text-rose-300 text-base font-semibold">
                ✦ O Velmo Black foi formulado para atacar <em>exatamente esses três pontos</em> — ao mesmo tempo, todos os dias, com apenas 2 cápsulas.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-5 bg-[#FDFBF7]">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-rose-500 text-xs font-bold uppercase tracking-widest mb-3">Como funciona</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-stone-900 mb-3">
                3 ações. 1 cápsula.<br />
                <span className="text-rose-500">Resultados reais.</span>
              </h2>
              <p className="text-stone-500 text-sm max-w-xl mx-auto">A fórmula do Velmo Black combina ingredientes ativos estudados para agir de forma sinérgica no metabolismo feminino.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { num: "01", icon: "🧠", title: "Controla a Fome", desc: "O L-Triptofano estimula a produção de serotonina — o hormônio do bem-estar — reduzindo a ansiedade alimentar e aumentando a saciedade naturalmente." },
                { num: "02", icon: "🍫", title: "Elimina a Compulsão", desc: "O Cromo regula os níveis de glicose no sangue e reduz os picos de insulina que causam a vontade incontrolável de açúcar e doces." },
                { num: "03", icon: "🔥", title: "Acelera o Metabolismo", desc: "A Cafeína moderada + Laranja Moro ativam a termogênese e o gasto calórico basal, ajudando seu corpo a queimar gordura mesmo em repouso." },
              ].map(item => (
                <div key={item.num} className="relative bg-white border border-stone-100 rounded-3xl p-7 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="absolute -top-4 left-6 bg-stone-900 text-stone-400 font-black text-xs px-3 py-1 rounded-full">{item.num}</div>
                  <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                  <h3 className="font-black text-stone-900 text-lg mb-3">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-5 bg-gradient-to-b from-rose-50 to-amber-50/50">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-rose-500 text-xs font-bold uppercase tracking-widest mb-3">Resultados reais</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-stone-900 mb-3">
                O que acontece quando você<br />
                <span className="text-rose-500">trata a causa certa?</span>
              </h2>
              <p className="text-stone-500 text-sm">Resultados típicos de clientes com uso contínuo por 30–90 dias, aliado a hábitos saudáveis.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Juliana T.", age: 34, avatar: "J", lost: "8kg em 60 dias",
                  title: "Parei de saborear a culpa e comecei a saborear a vida",
                  text: "Depois do almoço era uma luta diária com o chocolate. Minha filha me viu chorar por não conseguir parar de comer. Com o Velmo Black, já na primeira semana essa compulsão simplesmente sumiu. Perdi 8kg em dois meses e voltei a usar minha calça 38.",
                  highlight: "Compulsão por doces zerada na semana 1"
                },
                {
                  name: "Mariana R.", age: 29, avatar: "M", lost: "11kg em 90 dias",
                  title: "Finalmente meu esforço passou a dar resultado",
                  text: "Eu malhava 4x por semana e não perdia nada. Parecia que meu corpo resistia. Com o Velmo Black meu metabolismo destravou — perdi 11kg em 3 meses, tenho energia o dia todo e me sinto outra pessoa. Literalmente.",
                  highlight: "Metabolismo ativado, 11kg em 90 dias"
                },
                {
                  name: "Camila F.", age: 41, avatar: "C", lost: "6kg em 45 dias",
                  title: "O único que não me deixou ansiosa nem com coração disparado",
                  text: "Já tentei vários termogênicos e sempre tive taquicardia. O Velmo Black é diferente — me deu energia sem agitação, controlou minha fome sem me deixar mal-humorada. Recomendo pra todas as mulheres acima dos 40!",
                  highlight: "Energia estável, sem efeito rebote"
                },
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-3xl shadow-sm border border-stone-100 flex flex-col overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-rose-50 to-amber-50 border-b border-stone-100 px-6 py-4">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white font-black">{t.avatar}</div>
                      <div>
                        <p className="font-bold text-stone-900 text-sm">{t.name}, {t.age} anos</p>
                        <div className="text-amber-400 text-xs tracking-widest">★★★★★</div>
                      </div>
                    </div>
                    <div className="mt-3 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
                      📉 {t.lost}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="font-bold text-stone-900 text-sm mb-3 leading-snug">"{t.title}"</h4>
                    <p className="text-stone-500 text-xs flex-1 leading-relaxed italic mb-4">"{t.text}"</p>
                    <div className="bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5">
                      <span className="text-green-500">✔</span> {t.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/velmo-black/produtos"
                className="inline-flex items-center gap-2 text-stone-700 font-bold text-sm border-b-2 border-rose-300 hover:border-rose-500 hover:text-rose-600 pb-1 transition-all">
                Quero ser a próxima história de sucesso →
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* INGREDIENTS */}
      <section className="py-20 px-5 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/velmo/logo-3.png')] opacity-[0.03] bg-center bg-no-repeat bg-contain" />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <p className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-3">Fórmula Premium</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">
                Cada ingrediente tem<br />
                <span className="text-rose-400">um propósito científico</span>
              </h2>
              <p className="text-stone-400 text-sm max-w-md mx-auto">Nenhum componente está aqui por acaso. A sinergia entre eles é o que faz a fórmula funcionar.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "L-Triptofano", tag: "Saciedade & Humor", desc: "Precursor da serotonina. Combate a ansiedade que leva à compulsão alimentar." },
                { title: "Laranja Moro", tag: "Gordura Localizada", desc: "Rica em antocianinas — reduz o acúmulo de gordura visceral e apoia o controle do peso." },
                { title: "Cromo", tag: "Controle do Açúcar", desc: "Regula a glicose sanguínea e elimina os picos de insulina responsáveis pela vontade de doce." },
                { title: "Cafeína Moderada", tag: "Energia & Termogênese", desc: "Ativa o metabolismo e o estado de alerta sem causar tremor, taquicardia ou ansiedade." },
                { title: "Vitamina C", tag: "Antioxidante & Imunidade", desc: "Proteção celular, formação de colágeno e suporte imunológico durante o emagrecimento." },
                { title: "Extrato de Canela", tag: "Metabolismo Glicêmico", desc: "Proantocianidinas que complementam a ação do cromo no controle da glicemia." },
              ].map(ing => (
                <div key={ing.title} className="bg-stone-900 border border-stone-800 rounded-2xl p-5 hover:border-rose-800/50 transition-colors">
                  <span className="text-rose-400 text-[10px] font-bold uppercase tracking-widest">{ing.tag}</span>
                  <h3 className="text-white font-bold text-base mt-1 mb-2">{ing.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{ing.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* HOW TO USE */}
      <section className="py-20 px-5 bg-white">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-14">
            <div className="flex-1">
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-3">Simples assim</p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-stone-900 mb-2">Não muda sua rotina.</h2>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-rose-500 mb-8">Muda seus resultados.</h2>
              <div className="space-y-6">
                {[
                  { n: "1", title: "2 cápsulas ao acordar", desc: "Tome 30 minutos antes do café da manhã com um copo cheio de água. O efeito de saciedade começa já nessa primeira refeição." },
                  { n: "2", title: "Siga sua rotina normal", desc: "Não precisa de dieta radical nem de academia intensiva. O Velmo Black vai trabalhar enquanto você vive seu dia a dia." },
                  { n: "3", title: "Resultados em 7 a 30 dias", desc: "Na primeira semana, menos fome e menos vontade de doces. Em 30 dias, diferença visível no corpo, na disposição e na autoestima." },
                ].map(step => (
                  <div key={step.n} className="flex gap-5">
                    <div className="w-11 h-11 rounded-full bg-stone-900 flex items-center justify-center text-[#F5E6D3] font-black flex-shrink-0 shadow-md">{step.n}</div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">{step.title}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/velmo-black/produtos" id="btn-cta-velmo-howto"
                  className="bg-gradient-to-r from-stone-900 to-black text-[#F5E6D3] font-bold text-sm px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
                  Quero começar agora →
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full blur-2xl opacity-60" />
                <img src="/images/velmo/potes-1.png" alt="Pote Velmo Black" className="relative w-64 max-w-xs drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* SOCIAL PROOF NUMBERS */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 py-12 px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { val: "+2.300", label: "Mulheres atendidas" },
            { val: "4.8★", label: "Nota média de avaliação" },
            { val: "30 dias", label: "Garantia incondicional" },
            { val: "98%", label: "Clientes satisfeitas" },
          ].map(item => (
            <div key={item.label}>
              <p className="text-2xl sm:text-3xl font-black text-rose-400 leading-none mb-2">{item.val}</p>
              <p className="text-stone-400 text-xs font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GUARANTEE */}
      <section className="py-20 px-5 bg-gradient-to-b from-amber-50 to-white">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-amber-200 rounded-3xl p-8 md:p-12 shadow-lg text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.08)_0%,_transparent_70%)]" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-amber-50 border-4 border-amber-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-5xl">🛡️</span>
                </div>
                <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-3">Risco zero para você</p>
                <h2 className="text-2xl sm:text-4xl font-black uppercase text-stone-900 mb-5">
                  Garantia Total<br />de 30 Dias
                </h2>
                <p className="text-stone-600 text-base leading-relaxed mb-4 max-w-xl mx-auto">
                  Experimente o Velmo Black por 30 dias completos. Se você não sentir <strong>diferença na fome, nos doces ou na disposição</strong>, devolveremos <strong className="text-rose-600">100% do seu dinheiro</strong>.
                </p>
                <p className="text-stone-400 text-sm mb-8 max-w-md mx-auto">
                  Sem perguntas. Sem burocracia. Sem complicação. Basta mandar uma mensagem no WhatsApp.
                </p>
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                  {[
                    { icon: "✅", label: "Reembolso 100%" },
                    { icon: "⚡", label: "Processo rápido" },
                    { icon: "💬", label: "Suporte WhatsApp" },
                    { icon: "🔒", label: "Sem questionamentos" },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-2 text-stone-700">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>
                  ))}
                </div>
                <Link href="/velmo-black/produtos" id="btn-cta-velmo-guarantee"
                  className="bg-gradient-to-r from-stone-900 to-black text-[#F5E6D3] font-bold text-base px-12 py-4 rounded-full inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform">
                  Experimentar sem risco →
                </Link>
                <p className="text-stone-400 text-xs mt-4">Você não tem nada a perder. Só peso. 😉</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 bg-white border-t border-stone-100">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-stone-900 mb-3">Dúvidas Frequentes</h2>
              <p className="text-stone-500 text-sm">Tudo que você precisa saber antes de começar sua transformação.</p>
            </div>
            <FaqAccordion />
            <div className="mt-10 text-center">
              <p className="text-stone-500 text-sm mb-4">Ainda tem dúvidas? Fale diretamente com nossa equipe.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp text-white font-bold text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md hover:scale-105 transition-transform">
                <WaSvg />
                Falar com Vendedor no WhatsApp
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-5 bg-gradient-to-br from-stone-900 via-stone-950 to-black text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,63,94,0.1)_0%,_transparent_70%)]" />
        <AnimatedSection className="relative z-10">
          <div className="max-w-lg mx-auto">
            <img src="/images/velmo/logo-1.png" alt="Velmo Black" className="h-10 mx-auto mb-8 brightness-0 invert opacity-70" />
            <p className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-4">A decisão é agora</p>
            <h2 className="text-2xl sm:text-4xl font-black uppercase mb-5 leading-tight">
              Você já tentou<br />muita coisa.<br />
              <span className="text-rose-400">Que tal tentar o que funciona?</span>
            </h2>
            <p className="text-stone-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
              Mais de 2.300 mulheres já escolheram o Velmo Black. A diferença entre elas e quem ainda está lutando sozinha? Elas agiram. Você vai agir também?
            </p>
            <div className="flex flex-col gap-3 max-w-xs mx-auto">
              <Link href="/velmo-black/produtos" id="btn-cta-velmo-final"
                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-bold text-base px-7 py-4 rounded-full flex items-center justify-center gap-2 w-full shadow-lg hover:scale-105 transition-all">
                🔥 Ver kits com desconto
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-velmo-final"
                className="btn-whatsapp text-white font-bold text-sm px-7 py-4 rounded-full flex items-center justify-center gap-2 w-full hover:scale-105 transition-transform">
                <WaSvg />
                Falar com Vendedor
              </a>
            </div>
            <p className="text-stone-600 text-xs mt-6">🛡️ Garantia de 30 dias · Compra 100% segura · Suporte via WhatsApp</p>
          </div>
        </AnimatedSection>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 py-10 px-5 text-center">
        <p className="text-stone-500 text-xs font-medium mb-3">@vivalevemulher.shop · Revendedora Autorizada</p>
        <p className="text-stone-600 text-xs leading-relaxed max-w-md mx-auto">
          Suplemento alimentar isento de registro conforme ANVISA RDC 240/2018 · CNPJ 29.822.523/0002-86<br />
          O Velmo Black não substitui alimentação equilibrada, prática de exercícios e acompanhamento profissional.
        </p>
      </footer>

      {/* FLOATING ACTION BAR MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-stone-200 z-50 flex items-center justify-center gap-3 md:hidden shadow-[0_-10px_20px_rgba(0,0,0,0.08)] pb-safe">
        <Link href="/velmo-black/produtos" className="flex-1 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold text-sm py-3.5 rounded-xl flex items-center justify-center shadow-lg hover:scale-[1.02] transition-transform">
          🔥 Ver Kits e Ofertas
        </Link>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-white font-semibold p-3.5 rounded-xl flex items-center justify-center shadow-md">
          <WaSvg />
        </a>
      </div>

      {/* FLOATING BUTTON DESKTOP */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="btn-whatsapp-velmo-floating"
        className="hidden md:flex fixed bottom-6 right-6 btn-whatsapp text-white font-semibold px-4 py-3.5 rounded-full items-center gap-2 shadow-2xl text-sm z-50 hover:scale-105 transition-transform">
        <WaSvg />
        <span>Falar com Vendedor</span>
      </a>
    </div>
  );
}
