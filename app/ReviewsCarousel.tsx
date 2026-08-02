"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Felipe Junqueira",
    date: "8 meses atrás",
    text: "Não conheço uma barbearia melhor. O Guilherme é extremamente educado, gente boa e cuidadoso com a qualidade do trabalho, o ambiente é sempre calmo e excepcional. Você não se sente em uma linha de montagem de cabelo e barba kkkkkk Vale muito!",
  },
  {
    name: "Aline Paula",
    date: "um ano atrás",
    text: "O barbeiro Guilherme é um profissional incrível! Ele corta o cabelo do meu sobrinho com um carinho e uma paciência que fazem toda a diferença. Sempre cuidadoso e atencioso, ele transforma o momento do corte em uma experiência tranquila e agradável para a criança. Além disso, o ambiente é climatizado e muito aconchegante, tornando tudo ainda mais confortável. Meu sobrinho adora ir cortar o cabelo e sai sempre feliz! Recomendo de coração o Guilherme para quem busca um atendimento especial, cheio de dedicação e profissionalismo.",
  },
  {
    name: "Guilherme Oberdá",
    date: "11 meses atrás",
    text: "Deixou de ser apenas barbeiro e se tornou um grande amigo. Corto com o Guilherme desde o começo da carreira e sua qualidade, cuidado, atenção e responsabilidade são enormes. Possui técnicas de corte excelentes.",
  },
  {
    name: "Tiago Daré",
    date: "um ano atrás",
    text: "O estúdio do Guilherme tem uma proposta muito intimista. É muito limpo e organizado e o atendimento do Guilherme sensacional. Ele se preocupa sempre com o cliente, apresenta dicas de tendências e novidades no mundo da moda masculina. E o mais importante: o papo é super agradável e alternado. Recomendo demais para os cavaleiros de plantão!",
  },
  {
    name: "Felipe Barros",
    date: "um ano atrás",
    text: "Sou cliente desde antes da abertura da barbearia por acompanhar o incrível e diferenciado trabalho do Renout. Nunca tive problema de horário, de ter que esperar um minuto sequer, o que pra mim é muito importante pela correria de todos os dias.",
  },
  {
    name: "Tiago David",
    date: "2 anos atrás",
    text: "Atendimento impecável! Um profissional à frente de tudo, sempre com ideias e metodologias novas, um conhecimento ímpar! Sabe entender o cliente, sempre propondo algo novo, mas deixando a escolha do cliente soberana em tudo! Além de um carisma sem igual, um respeito muito grande com o cliente! Estrutura física mega aconchegante, super bem localizada, no coração do Bairro Cidade Nova. SUPER INDICO!",
  },
  {
    name: "William Moreira",
    date: "2 anos atrás",
    text: "Atendimento totalmente fora da curva, passa longe do barbeiro que faz um corte e só quer receber. Dá pra sentir que o Guilherme realmente se preocupa na visão que você vai passar para o mundo e refinar isso. A maneira como você é visto impacta no trabalho, nos relacionamentos e em todas as esferas. Ter alguém que busca sua satisfação e sucesso não tem preço. Recomendo sempre.",
  },
  {
    name: "Renato Diniz",
    date: "um ano atrás",
    text: "Atendimento de excelência, um profissional impecável que sempre dá ótimas sugestões de corte analisando o formato do nosso rosto, super pontual e um ótimo lugar de atendimento.",
  },
];

export function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % reviews.length), 8000);
    return () => window.clearInterval(timer);
  }, []);

  const previous = () => setCurrent((value) => (value - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((value) => (value + 1) % reviews.length);
  const review = reviews[current];

  return (
    <div className="review-stage" aria-live="polite">
      <div className="review-stars" aria-label="Cinco estrelas">★★★★★</div>
      <blockquote>“{review.text}”</blockquote>
      <div className="review-meta">
        <strong>{review.name}</strong>
        <span>{review.date} · Google Reviews</span>
      </div>
      <div className="review-controls">
        <button type="button" onClick={previous} aria-label="Avaliação anterior">←</button>
        <span>{String(current + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
        <button type="button" onClick={next} aria-label="Próxima avaliação">→</button>
      </div>
      <div className="review-progress" aria-hidden="true"><span key={current} /></div>
    </div>
  );
}
