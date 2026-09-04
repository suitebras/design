# Suitebras — Design System

Fonte única de cor, tipografia, geometria e componentes para todos os produtos
digitais da Suitebras — do site institucional ao painel do cliente.

A documentação completa é uma página estática: [`index.html`](index.html).

**Base:** preset shadcn `b3ax5kgCLA` · style `sera` · baseColor `zinc` ·
Public Sans / Geist / Geist Mono · ícones Phosphor · modo claro · pt-BR.

## Estrutura

```
index.html                    documentação navegável do design system
css/
  suitebras.css               ← ponto de entrada: só @imports
  tokens/colors.css           cores da marca, rampa zinc, gradientes, estados
  tokens/typography.css       @font-face + escala tipográfica
  tokens/spacing.css          grade de 4px, raios e larguras de layout
  tokens/elevation.css        sombras e anel de foco
  base.css                    defaults dos elementos HTML
  components.css              botões, formulários, tabelas, overlays…
  icons/phosphor.css          fonte de ícones Phosphor (regular)
  icons/phosphor-fill.css     fonte de ícones Phosphor (fill)
  docs.css                    estilos só desta página — não faz parte do sistema
assets/
  fonts/                      fontes auto-hospedadas (.woff2)
  logo/                       logo e monograma, positivo e negativo (.svg)
js/docs.js                    scroll-spy da navegação lateral
```

## Uso em um projeto

```html
<link rel="stylesheet" href="css/suitebras.css">
<!-- só se for usar os ícones -->
<link rel="stylesheet" href="css/icons/phosphor.css">
<link rel="stylesheet" href="css/icons/phosphor-fill.css">
```

`css/suitebras.css` importa os tokens, a base e os componentes na ordem correta —
é o único arquivo que o consumidor precisa linkar. `css/docs.css` estiliza apenas
esta página de documentação e não deve ser copiado para outros projetos.

Para um projeto shadcn/ui + Tailwind v4, a seção **Código-fonte** da página traz o
`globals.css` pronto para substituir o `:root` gerado pelo `shadcn init`, além de
um brief para colar em agentes de código.

## Rodando localmente

```bash
python3 -m http.server 8000   # depois abra http://localhost:8000
```

Um servidor é necessário: abrir o arquivo direto por `file://` bloqueia o
carregamento das fontes em alguns navegadores.

## Notas

- As fontes são auto-hospedadas em `assets/fonts/` — nenhuma requisição ao Google
  Fonts em tempo de execução. Só o formato `.woff2` é distribuído (suportado por
  todos os navegadores atuais); os fallbacks legados `.woff`/`.ttf`/`.svg` dos
  ícones Phosphor foram omitidos porque somavam ~7,6 MB.
- A página foi gerada no Claude Design e desempacotada aqui em arquivos separados.
  O selo "Made with Claude Design" é o último `<div>` de `index.html` e pode ser
  removido sem afetar mais nada.
