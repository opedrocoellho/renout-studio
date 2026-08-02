# Renout Studio

Site institucional da **Renout Studio**, barbearia localizada no bairro Cidade Nova, em Belo Horizonte.

O projeto foi desenvolvido para apresentar a marca, os serviços e a experiência do studio, além de facilitar o agendamento pelo WhatsApp.

## Site publicado

[renout-studio-bh.cibelebarbosa8821.chatgpt.site](https://renout-studio-bh.cibelebarbosa8821.chatgpt.site)

## Principais recursos

- Apresentação visual da Renout Studio
- Carrossel de imagens no banner principal
- Serviços e preços
- Destaque interativo das fotos dos serviços
- Carrossel com avaliações reais do Google
- Links para o aplicativo da Renout na App Store e no Google Play
- Agendamento direto pelo WhatsApp
- Endereço e acesso à localização no Google Maps
- Layout responsivo para computadores, tablets e celulares

## Tecnologias

- React
- TypeScript
- vinext
- Vite
- CSS responsivo
- Cloudflare Workers / Sites

## Como executar localmente

É necessário ter o Node.js `22.13.0` ou mais recente instalado.

```bash
npm install
npm run dev
```

O endereço local será exibido no terminal, normalmente em `http://localhost:3000`.

## Gerar a versão de produção

```bash
npm run build
```

## Estrutura principal

```text
app/
  page.tsx              Página principal
  ReviewsCarousel.tsx   Carrossel de avaliações
  globals.css           Identidade visual e responsividade
  layout.tsx            Metadados e estrutura global

public/
  images/                Logo e fotografias da Renout Studio
  og-v3.png              Imagem usada no compartilhamento do site
```

## Contato da Renout Studio

- Instagram: [@renoutstudio](https://www.instagram.com/renoutstudio/)
- WhatsApp: [(31) 97223-1112](https://wa.me/5531972231112)
- Endereço: Av. Cristiano Machado, 1648, Sala 506 — Cidade Nova, Belo Horizonte, MG
