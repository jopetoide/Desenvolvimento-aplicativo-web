# DSA Quest — Revisão de JavaScript

Aplicativo web desenvolvido em React + Vite para revisar os conteúdos de JavaScript estudados em DSA durante 2026.

## Funcionalidades

- Quiz com perguntas de múltipla escolha e explicações.
- Questões separadas por assunto.
- Pontuação, percentual de acertos e revisão das respostas.
- Salvamento automático do progresso e do recorde usando `localStorage`.
- Interface responsiva para celular e computador.

## Executar localmente

```bash
npm install
npm run dev
```

## Publicar na Vercel

1. Acesse https://vercel.com/new e entre com sua conta.
2. Importe o repositório `jopetoide/dsa-dexter`.
3. Mantenha o preset **Vite** e os comandos padrão (`npm run build` e diretório `dist`).
4. Clique em **Deploy**.
5. Abra o endereço gerado em uma janela anônima e teste o quiz.

## Interface e acessibilidade

Paleta usada no tema escuro:
- Fundo: #101827
- Verde de destaque: #9CE6BF
- Roxo de apoio: #B5A5FF
- Laranja de apoio: #FFBD83

A interface usa componentes React, botões com rótulos claros, foco visível pelo teclado e layouts adaptados para telas pequenas.

## Revisão com GitHub Copilot

No VS Code, abra o projeto e peça ao agente especialista em React para revisar o código. Prompt sugerido:

> Revise este aplicativo React. Explique como os componentes se comunicam e como useState e useEffect são usados para controlar respostas e salvar o progresso no localStorage. Verifique possíveis erros e proponha melhorias sem alterar o funcionamento sem explicar.

## Tecnologias

React, JavaScript, Vite, CSS e localStorage.
