# Transformação para Marketplace Multi-Produto

O objetivo deste plano é transformar o projeto atual (que é focado em página única para o Secaps Black) em uma plataforma escalável de múltiplos produtos. Ao final da implementação, teremos uma "vitrine" global e o Secaps Black passará a viver em seu próprio espaço isolado, assim como futuros produtos que você venha a lançar. Isso garantirá um carregamento extremamente rápido (Lazy Loading) e isolamento perfeito do Pixel do Facebook por produto.

## User Review Required

> [!IMPORTANT]
> - A antiga URL principal (`/`) se tornará a vitrine. O tráfego do Secaps Black precisará agora ser direcionado para o link `/secaps-black`. Confirme se essa mudança de URL afeta a sua estratégia de links nos anúncios e se você está de acordo.
> - O Pixel atual que instalamos será removido do arquivo principal (`index.html`) e reprogramado no código (React) para ser "injetado" somente quando na rota de produtos específicos para evitar inteligência cruzada no Facebook.

## Proposed Changes

---

### App Router e Layout Base

A arquitetura do roteador da aplicação precisará ser reformulada para suportar raízes ramificadas e carregar os pixels dinamicamente. 

#### [MODIFY] `src/App.tsx`
- Substituir as rotas simples por um agrupamento focado em produtos.
- Nova rota `/`: Aponta para a nova página do Marketplace (Vitrine).
- Novas rotas `/secaps-black` e `/secaps-black/produtos`: Apontarão para as antigas LandingPage e ProductsPage.
- Criar a regra de injeção inteligente de Pixel: a página fará o push de `fbq('init', 'ID-DO-SECAPS')` apenas se a rota da URL iniciar com `/secaps-black`.

#### [MODIFY] `index.html`
- Vamos remover o `<script>` padrão engessado do Meta Pixel e de Scroll e extrair suas lógicas para dentro do React. O restante do `index.html` sofrerá limpeza.

---

### Novo Módulo: Secaps Black

Os componentes originários farão parte do primeiro "ramo" do Marketplace, que diz respeito somente ao Secaps Black.

#### [MODIFY] `src/pages/LandingPage.tsx` -> (Renomear pego o Roteador como contexto do Secaps)
- Atualizar os links internos (botões de CTA) para conectarem corretamente em `/secaps-black/produtos`.
- Incluir `id="btn-cta-secaps-[local]"` nos botões principais e nas âncoras para que a Ferramenta de Eventos do Facebook jamais confunda esse botão com um futuro produto Detox, por exemplo.

#### [MODIFY] `src/pages/ProductsPage.tsx`
- Repetir a estratégia `id="btn-checkout-secaps-[kit-meses]"` nos botões que abrem o link da Hest (Checkout).
- Adicionar os `id` de `btn-whatsapp-secaps` nos botões da página de ofertas.

---

### Novo Módulo: Vitrine Marketplace

#### [NEW] `src/pages/MarketplaceHome.tsx`
- Uma tela nova em *Dark Mode* de cair o queixo, seguindo as diretrizes de visual premium do seu projeto atual. 
- Essa tela terá um visual de vitrine moderna de farmácia inteligente. O foco central será um **Banner impactante (Hero)** para o Secaps Black convidando para saber mais, e **Cards secundários (com opacidade ou badge de "Em Breve")** para futuros produtos complementares que você deseja inserir, preparando terreno pro Upsell e Cross-Sell na marca **Viva Leve Mulher**.
- Sem interferência do Pixel (para não enviar eventos sujos do topo de funil genérico com o Pixel do produto final).

---

## Verificação do Funcionalismo

### Testes a serem feitos
- **Rotas:** Garantir que quando entramos em `/secaps-black/produtos`, ele carrega o código certo sem quebrar o CSS.
- **Rastreio:** Acessar a nova Vitrine e observar via extensão do Google Chrome que "Nenhum Pixel está ativo" no nível vitrine.
- Depois, navegar de forma limpa (sem apertar F5) para a página do Secaps Black e garantir que o Pixel e o Rastreamento de Scroll (25, 50, 75%) acordam misteriosamente e enviam dados de rastreamento com a ID restrita dos botões de comprar.
