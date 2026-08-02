import { ReviewsCarousel } from "./ReviewsCarousel";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const whatsapp = "https://wa.me/5531972231112?text=Olá%2C%20Renout%20Studio!%20Gostaria%20de%20agendar%20um%20horário.";
const reviews = "https://www.google.com/search?q=Renout+Studio+barbearia+Belo+Horizonte+avaliações";

const services = [
  { name: "Corte", price: "R$ 65", image: `${basePath}/images/corte-1.png`, copy: "Precisão, estilo e acabamento para valorizar a sua identidade." },
  { name: "Corte máquina", price: "R$ 50", image: `${basePath}/images/corte-2.png`, copy: "Linhas limpas e um resultado impecável, do clássico ao contemporâneo." },
  { name: "Textura", price: "R$ 60", image: `${basePath}/images/hero.png`, copy: "Forma, movimento e personalidade para transformar o visual." },
  { name: "Selagem", price: "R$ 90", image: `${basePath}/images/ambiente.png`, copy: "Cuidado técnico para fios alinhados, saudáveis e com presença." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-slides" aria-hidden="true">
          <img className="hero-slide slide-one" src={`${basePath}/images/corte-1.png`} alt="" />
          <img className="hero-slide slide-two" src={`${basePath}/images/corte-2.png`} alt="" />
          <img className="hero-slide slide-three" src={`${basePath}/images/hero.png`} alt="" />
        </div>
        <div className="hero-shade" />
        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="Renout Studio — início">
            <img src={`${basePath}/images/logo-transparent.png`} alt="Renout Studio" />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#experiencia">Experiência</a>
            <a href="#servicos">Serviços</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Agendar <span>↗</span></a>
        </header>

        <div className="hero-content">
          <div className="hero-kicker"><span>Studio masculino</span><span>Cidade Nova · BH</span></div>
          <h1>Seu estilo,<br /><em>bem cuidado.</em></h1>
          <p>Precisão em cada detalhe. Uma experiência particular, moderna e feita no seu tempo.</p>
          <div className="hero-actions">
            <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <span>↗</span></a>
            <a className="circle-link" href="#experiencia" aria-label="Conheça o studio"><span>↓</span></a>
          </div>
        </div>
        <div className="slide-index"><b>01</b><span /><small>03</small></div>
        <div className="hero-word" aria-hidden="true">RENOUT</div>
      </section>

      <section className="brand-strip" aria-label="Diferenciais">
        <div>Precisão</div><span>✦</span><div>Identidade</div><span>✦</span><div>Experiência</div><span>✦</span><div>Renout Studio</div>
      </section>

      <section className="experience section" id="experiencia">
        <div className="experience-copy">
          <p className="eyebrow">Mais que um corte</p>
          <h2>Uma pausa na rotina.<br />Um ritual para você.</h2>
          <p className="lead">A Renout combina técnica, conversa e atenção real aos detalhes. Sem pressa, sem fórmulas prontas — cada atendimento acompanha quem você é.</p>
          <div className="experience-points">
            <div><b>01</b><span>Atendimento individual</span></div>
            <div><b>02</b><span>Hora marcada</span></div>
            <div><b>03</b><span>Técnica e acabamento</span></div>
          </div>
          <a className="underlined" href={whatsapp} target="_blank" rel="noreferrer">Viva a experiência Renout <span>↗</span></a>
        </div>
        <div className="experience-visual">
          <div className="photo-main"><img src={`${basePath}/images/hero.png`} alt="Atendimento cuidadoso no Renout Studio" /></div>
          <div className="photo-float"><img src={`${basePath}/images/ambiente.png`} alt="Interior do Renout Studio" /></div>
          <div className="visual-badge"><strong>R</strong><span>Seu tempo<br />tem valor</span></div>
        </div>
      </section>

      <section className="services section-dark" id="servicos">
        <div className="section-top">
          <div><p className="eyebrow">Serviços</p><h2>Escolha o seu<br /><em>próximo cuidado.</em></h2></div>
          <p>Passe pelas opções para conhecer cada experiência. Para os demais serviços, consulte a tabela completa.</p>
        </div>
        <div className="service-cards">
          {services.map((service, index) => (
            <a className="service-card" href={whatsapp} target="_blank" rel="noreferrer" key={service.name}>
              <img src={service.image} alt="" />
              <div className="service-overlay" />
              <span className="card-number">0{index + 1}</span>
              <div className="card-copy"><h3>{service.name}</h3><p>{service.copy}</p></div>
              <div className="card-footer"><strong>{service.price}</strong><span>↗</span></div>
            </a>
          ))}
        </div>
        <div className="service-table">
          <div><span>Acabamento</span><b>R$ 20</b></div>
          <div><span>Hidratação</span><b>R$ 50</b></div>
          <div><span>Todos os serviços</span><a href={whatsapp} target="_blank" rel="noreferrer">Consultar e agendar ↗</a></div>
        </div>
      </section>

      <section className="reviews section" id="avaliacoes">
        <div className="reviews-intro">
          <p className="eyebrow">Reputação</p>
          <h2>Quem senta na cadeira,<br /><em>conta a experiência.</em></h2>
          <p>As avaliações ajudam novos clientes a escolher com confiança e mostram o cuidado que existe em cada atendimento.</p>
          <a className="button button-dark" href={reviews} target="_blank" rel="noreferrer">Ver avaliações no Google <span>↗</span></a>
        </div>
        <ReviewsCarousel />
      </section>

      <section className="app-banner">
        <div className="app-pattern" aria-hidden="true">R</div>
        <div className="app-copy">
          <p className="eyebrow">Renout no seu celular</p>
          <h2>Seu horário,<br />do seu jeito.</h2>
          <p>Agende serviços, acompanhe seus horários e tenha acesso às novidades da Renout pelo aplicativo.</p>
          <div className="store-links">
            <a href="https://apps.apple.com/pt/app/barbearia-renout-studio/id6479268404" target="_blank" rel="noreferrer"><small>Baixar na</small><strong>App Store</strong></a>
            <a href="https://play.google.com/store/apps/details?id=renout.app" target="_blank" rel="noreferrer"><small>Disponível no</small><strong>Google Play</strong></a>
          </div>
        </div>
        <div className="app-image"><img src={`${basePath}/images/corte-2.png`} alt="Profissional do Renout Studio durante atendimento" /></div>
      </section>

      <section className="visit section" id="contato">
        <div className="visit-photo"><img src={`${basePath}/images/ambiente.png`} alt="Ambiente do Renout Studio em Belo Horizonte" /></div>
        <div className="visit-copy">
          <p className="eyebrow">Visite o studio</p>
          <h2>Um espaço reservado para o seu momento.</h2>
          <div className="address"><p>Av. Cristiano Machado, 1648 — Sala 506</p><p>Cidade Nova · Belo Horizonte, MG</p></div>
          <a className="button button-dark" href={whatsapp} target="_blank" rel="noreferrer">Agendar agora <span>↗</span></a>
          <a className="underlined" href="https://www.google.com/maps/search/?api=1&query=Av.%20Cristiano%20Machado%2C%201648%20Belo%20Horizonte" target="_blank" rel="noreferrer">Abrir no mapa ↗</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img src={`${basePath}/images/logo-transparent.png`} alt="Renout Studio" /><p>Cortes com precisão.<br />Estilo com identidade.</p></div>
        <div><small>Navegue</small><a href="#experiencia">Experiência</a><a href="#servicos">Serviços</a><a href="#avaliacoes">Avaliações</a></div>
        <div><small>Conecte-se</small><a href="https://www.instagram.com/renoutstudio/" target="_blank" rel="noreferrer">Instagram ↗</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
        <div><small>Encontre</small><p>Av. Cristiano Machado, 1648<br />Sala 506 · Cidade Nova, BH</p></div>
        <p className="copyright">© {new Date().getFullYear()} Renout Studio</p>
      </footer>
      <a className="mobile-cta" href={whatsapp} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <span>↗</span></a>
    </main>
  );
}
