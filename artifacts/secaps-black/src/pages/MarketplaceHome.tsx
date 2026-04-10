import { Link } from "wouter";
import { ArrowRight, Star } from "lucide-react";

export default function MarketplaceHome() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#B69145] selection:text-white">
      {/* Header Premium */}
      <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#B69145]/20">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-[#B69145]">
              Viva Leve<span className="text-white">Mulher</span>
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B69145]/10 text-[#B69145] text-sm font-medium border border-[#B69145]/20">
            <Star className="w-4 h-4 fill-current" />
            Excelência em Saúde Íntima e Emagrecimento
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Descubra o Poder <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF1A0] to-[#997A00]">
              da Sua Melhor Versão
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Nós reunimos os melhores e mais avançados tratamentos para a saúde da mulher em um só lugar. Fórmulas exclusivas para resultados reais.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossos Produtos Exclusivos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Produto 1: Secaps Black */}
            <div className="group relative rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-[#B69145]/50 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-black to-zinc-800 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#B69145]/5 group-hover:bg-[#B69145]/10 transition-colors" />
                <img 
                  src="/hero-pote.webp" 
                  alt="Secaps Black" 
                  className="w-full max-w-[200px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Secaps Black</h3>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20">
                    MAIS VENDIDO
                  </span>
                </div>
                <p className="text-zinc-400 mb-8 line-clamp-2">
                  A fórmula termogênica mais potente do mercado para um emagrecimento rápido e definitivo.
                </p>
                <Link href="/secaps-black">
                  <a className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[#D4AF37] to-[#B69145] hover:opacity-90 transition-opacity">
                    Conhecer Tratamento
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
              </div>
            </div>

            {/* Placeholder: Futuro Produto */}
            <div className="group relative rounded-3xl bg-zinc-900/50 border border-zinc-800 overflow-hidden">
              <div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center relative opacity-50 grayscale">
                <div className="w-32 h-32 rounded-full border-4 border-dashed border-zinc-700 flex items-center justify-center">
                  <span className="text-zinc-600 font-bold text-xl">?</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white/50 mb-4">Em Breve</h3>
                <p className="text-zinc-500 mb-8">
                  Nossa equipe de especialistas está desenvolvendo uma nova fórmula exclusiva.
                </p>
                <button disabled className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-zinc-500 bg-zinc-800 cursor-not-allowed">
                  Aguarde
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="border-t border-zinc-800 py-12 px-4 text-center">
        <p className="text-zinc-500 mb-2">© {new Date().getFullYear()} Viva Leve Mulher. Todos os direitos reservados.</p>
        <p className="text-zinc-600 text-sm max-w-2xl mx-auto">
          Os resultados podem variar de pessoa para pessoa. Consulte sempre um médico ou nutricionista antes de iniciar qualquer suplementação.
        </p>
      </footer>
    </div>
  );
}
