import { Link } from "wouter";
import { ArrowRight, Star } from "lucide-react";

export default function MarketplaceHome() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-[#B69145] selection:text-white font-sans">
      {/* Header Premium (Light) */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="container mx-auto px-4 h-24 flex items-center justify-center">
          <Link href="/">
            <a className="flex items-center transition-transform hover:scale-105 duration-300">
              <img src="/logo-horizontal.png" alt="Viva Leve Mulher" className="h-16 md:h-20 drop-shadow-sm" />
            </a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-[#B69145] text-sm font-medium border border-stone-200 shadow-sm">
            <Star className="w-4 h-4 fill-current" />
            Excelência em Saúde Íntima e Emagrecimento
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900">
            Descubra o Poder <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B69145] via-[#D4AF37] to-[#B69145]">
              da Sua Melhor Versão
            </span>
          </h1>
          <p className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Nós reunimos os melhores e mais avançados tratamentos para a saúde da mulher em um só lugar. Fórmulas exclusivas para resultados reais.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-white border-t border-stone-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-stone-800">Nossos Produtos Exclusivos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Produto 1: Secaps Black */}
            <div className="group relative rounded-3xl bg-white border border-stone-200 overflow-hidden hover:border-[#B69145]/30 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="aspect-square bg-stone-50 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent z-0" />
                <img 
                  src="/banner.png" 
                  alt="Secaps Black" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 relative z-10 shadow-md"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-stone-900">Secaps Black</h3>
                  <span className="px-3 py-1 bg-[#B69145]/10 text-[#B69145] text-[10px] uppercase tracking-wider font-bold rounded-full border border-[#B69145]/20">
                    MAIS VENDIDO
                  </span>
                </div>
                <p className="text-stone-500 mb-8 line-clamp-2 text-sm leading-relaxed">
                  A fórmula termogênica mais potente do mercado para um emagrecimento rápido e definitivo.
                </p>
                <Link href="/secaps-black">
                  <a className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white shadow-lg shadow-[#B69145]/20 bg-gradient-to-r from-[#D4AF37] to-[#B69145] hover:opacity-90 hover:-translate-y-0.5 transition-all">
                    Conhecer Tratamento
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
              </div>
            </div>

            {/* Placeholder: Futuro Produto */}
            <div className="group relative rounded-3xl bg-stone-50/50 border-2 border-stone-200 border-dashed overflow-hidden">
              <div className="aspect-square bg-stone-100/50 p-8 flex items-center justify-center relative grayscale opacity-70">
                <div className="w-32 h-32 rounded-full border-4 border-dashed border-stone-300 flex items-center justify-center bg-white shadow-sm">
                  <span className="text-stone-400 font-bold text-2xl">?</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-400 mb-4">Em Breve</h3>
                <p className="text-stone-400/80 mb-8 text-sm leading-relaxed">
                  Nossa equipe de especialistas está desenvolvendo uma nova fórmula exclusiva.
                </p>
                <button disabled className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-stone-400 bg-stone-100 cursor-not-allowed">
                  Aguarde
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="border-t border-stone-200 bg-stone-50 py-12 px-4 text-center">
        <p className="text-stone-500 font-medium mb-2">© {new Date().getFullYear()} Viva Leve Mulher. Todos os direitos reservados.</p>
        <p className="text-stone-400 text-xs max-w-2xl mx-auto leading-relaxed">
          Os resultados podem variar de pessoa para pessoa. Consulte sempre um médico ou nutricionista antes de iniciar qualquer suplementação.
        </p>
      </footer>
    </div>
  );
}
