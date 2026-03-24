export function render() {
  document.getElementById("app").innerHTML = `
    <div class="ebook-header">
      <span class="ebook-eyebrow">Ebook</span>
      <h1>Frontend Blueprint</h1>
      <p class="ebook-tagline">Projetos e guias práticos.</p>
      <p class="ebook-subtitle">
        Não é um curso sobre fundamentos. É um guia de projetos reais —
        com estrutura de pastas, arquitetura e as decisões que o mercado
        cobra de todo dev frontend.
      </p>
    </div>

    <div class="ebook-cover-block">
      <div class="ebook-cover">
        <img src="https://github.com/devgbr86/devgbr86/releases/download/ebook/Ebook.cover.image.2.png" alt="Frontend Blueprint cover">
      </div>
      <div class="ebook-meta">
        <div class="meta-item">
          <span>Formato</span>
          EPUB
        </div>
        <div class="meta-item">
          <span>Abordagem</span>
          Project-based — aprenda construindo
        </div>
        <div class="meta-item">
          <span>Projetos</span>
          3 projetos completos do zero
        </div>
        <div class="meta-item">
          <span>Stack</span>
          Git · HTML/CSS · JavaScript · TypeScript
        </div>
      </div>
    </div>

    <div class="ebook-section">
      <h2>Os três projetos</h2>
      <ul class="chapter-list">
        <li>
          <span class="chapter-num">01</span>
          <div>
            <strong>Git, VSCode &amp; Deploy — seu primeiro projeto no ar</strong>
            <p>
              Configure seu ambiente do zero: Git, VSCode e extensões essenciais.
              Construa um projeto HTML/CSS com estrutura de pastas profissional
              e faça deploy real — do repositório ao domínio publicado.
            </p>
          </div>
        </li>
        <li>
          <span class="chapter-num">02</span>
          <div>
            <strong>JavaScript — SPA com Hash Router</strong>
            <p>
              Construa um site multi-página sem nenhum framework.
              Roteamento por hash, módulos ES6, separação de responsabilidades
              e arquitetura de pastas que escala. Exatamente o que você
              está lendo agora foi feito assim.
            </p>
          </div>
        </li>
        <li>
          <span class="chapter-num">03</span>
          <div>
            <strong>TypeScript — integração com API de filmes (OMDB)</strong>
            <p>
              Consuma uma API externa com fetch, tipage completa com TypeScript,
              validação de dados e tratamento de erros. O projeto entrega
              uma interface funcional de busca de filmes — com código
              que você entende e consegue manter.
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="ebook-section">
      <h2>Para quem é este ebook</h2>
      <p>
        Para quem já sabe o básico e quer dar o próximo passo com projetos
        de verdade. Cada capítulo entrega um projeto funcional, com estrutura
        de pastas, decisões explicadas e código que vai direto pro portfólio.
      </p>
      <p>
        Sem rodeios, sem exercícios artificiais. Só projeto, arquitetura
        e o raciocínio por trás de cada escolha.
      </p>
    </div>

    <div class="ebook-cta">
      <a
        href="https://wa.me/5531996981103?text=Ol%C3%A1%2C%20quero%20comprar%20o%20ebook%20Frontend%20Blueprint"
        target="_blank"
        rel="noopener noreferrer"
        class="cta-button"
      >
        Comprar via WhatsApp
      </a>
      <p class="cta-note">Pagamento Pix/transferência. Entrega imediata do arquivo.</p>
    </div>
  `
}