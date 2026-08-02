const services = [
  ["Acabamento", "R$ 20"],
  ["Corte", "R$ 65"],
  ["Corte máquina", "R$ 50"],
  ["Hidratação", "R$ 50"],
  ["Selagem", "R$ 90"],
  ["Textura", "R$ 60"],
];

const whatsapp =
  "https://wa.me/5531972231112?text=Olá%2C%20Renout%20Studio!%20Gostaria%20de%20agendar%20um%20horário.";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Renout Studio — início">
          <img src="/images/logo-transparent.png" alt="Renout Studio" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#studio">O studio</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Agendar horário <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Barbearia em Cidade Nova · BH</p>
          <h1>Cortes com precisão. Estilo com identidade.</h1>
          <p className="hero-text">
            Um atendimento feito com calma, técnica e atenção aos detalhes —
            para você sair do studio na sua melhor versão.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={whatsapp} target="_blank" rel="noreferrer">
              Agendar pelo WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#servicos">Ver serviços <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-meta">
            <span>Atendimento com hora marcada</span>
            <span>Av. Cristiano Machado, 1648</span>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero.png" alt="Corte infantil no Renout Studio" />
          <div className="image-label"><span>01</span> Técnica e cuidado</div>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-heading">
          <p className="eyebrow">Serviços</p>
          <h2>O cuidado certo para o seu estilo.</h2>
          <p>Escolha seu serviço e fale diretamente com a gente para encontrar o melhor horário.</p>
        </div>
        <div className="service-list">
          {services.map(([name, price], index) => (
            <a href={whatsapp} target="_blank" rel="noreferrer" className="service-row" key={name}>
              <span className="service-number">0{index + 1}</span>
              <span className="service-name">{name}</span>
              <span className="service-price">{price}</span>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="studio section" id="studio">
        <div className="studio-grid">
          <div className="studio-image studio-image-wide">
            <img src="/images/corte-1.png" alt="Atendimento no Renout Studio" />
          </div>
          <div className="studio-copy">
            <p className="eyebrow">Renout Studio</p>
            <h2>Seu momento. Seu corte. Seu espaço.</h2>
            <p>
              Mais do que um corte, uma experiência tranquila e individual.
              Aqui, cada detalhe importa — da conversa ao acabamento final.
            </p>
            <a className="text-link" href="https://www.instagram.com/renoutstudio/" target="_blank" rel="noreferrer">
              Acompanhe @renoutstudio <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="studio-image studio-image-tall">
            <img src="/images/corte-2.png" alt="Acabamento de corte no Renout Studio" />
          </div>
        </div>
      </section>

      <section className="visit section" id="contato">
        <div className="visit-photo">
          <img src="/images/ambiente.png" alt="Ambiente do Renout Studio em Belo Horizonte" />
        </div>
        <div className="visit-copy">
          <p className="eyebrow">Visite o studio</p>
          <h2>Um espaço reservado para você.</h2>
          <div className="address">
            <p>Av. Cristiano Machado, 1648 — Sala 506</p>
            <p>Cidade Nova · Belo Horizonte, MG</p>
          </div>
          <a className="button button-dark" href={whatsapp} target="_blank" rel="noreferrer">
            Agendar agora <span aria-hidden="true">↗</span>
          </a>
          <a className="maps-link" href="https://www.google.com/maps/search/?api=1&query=Av.%20Cristiano%20Machado%2C%201648%20Belo%20Horizonte" target="_blank" rel="noreferrer">
            Ver localização no mapa
          </a>
        </div>
      </section>

      <footer>
        <img src="/images/logo-transparent.png" alt="Renout Studio" />
        <p>Cortes com precisão. Estilo com identidade.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/renoutstudio/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
        </div>
        <small>© {new Date().getFullYear()} Renout Studio</small>
      </footer>

      <a className="mobile-cta" href={whatsapp} target="_blank" rel="noreferrer">
        Agendar pelo WhatsApp <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
