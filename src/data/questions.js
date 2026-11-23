export const questions = [
  {
    id: 1,
    category: "Fundamentos",
    level: "Básico",
    question: "Qual palavra-chave é mais adequada para declarar uma variável cujo valor poderá mudar?",
    code: null,
    options: ["const", "let", "static", "final"],
    answer: 1,
    explanation: "Use let quando precisar reatribuir o valor de uma variável. const é indicada quando a variável não será reatribuída."
  },
  {
    id: 2,
    category: "Fundamentos",
    level: "Básico",
    question: "Qual será o tipo retornado por typeof 42?",
    code: "typeof 42",
    options: ['"number"', '"string"', '"boolean"', '"undefined"'],
    answer: 0,
    explanation: "O operador typeof identifica o tipo de um valor. Como 42 é um número, o resultado é a string \"number\"."
  },
  {
    id: 3,
    category: "Fundamentos",
    level: "Básico",
    question: "Qual é a principal diferença entre let e const?",
    code: null,
    options: [
      "let guarda apenas textos e const apenas números",
      "const pode ser redeclarada em qualquer lugar",
      "let permite reatribuição; const não permite reatribuir a variável",
      "Não existe diferença"
    ],
    answer: 2,
    explanation: "let permite atribuir outro valor à variável. Com const, a referência não pode ser reatribuída depois da declaração."
  },
  {
    id: 4,
    category: "Operadores",
    level: "Básico",
    question: "Qual será o resultado da expressão 10 % 3?",
    code: "10 % 3",
    options: ["3", "1", "0", "0,3"],
    answer: 1,
    explanation: "O operador % retorna o resto da divisão. Como 10 dividido por 3 deixa resto 1, esse é o resultado."
  },
  {
    id: 5,
    category: "Condicionais",
    level: "Básico",
    question: "Qual estrutura é usada para executar um bloco somente quando uma condição é verdadeira?",
    code: null,
    options: ["for", "if", "function", "return"],
    answer: 1,
    explanation: "A estrutura if testa uma condição. Se ela for verdadeira, o bloco associado é executado."
  },
  {
    id: 6,
    category: "Condicionais",
    level: "Intermediário",
    question: "O que será exibido no console?",
    code: "const idade = 16;\\nif (idade >= 18) {\\n  console.log('Maior');\\n} else {\\n  console.log('Menor');\\n}",
    options: ['"Maior"', '"Menor"', '"16"', "Nada"],
    answer: 1,
    explanation: "Como 16 não é maior ou igual a 18, a condição é falsa e o bloco else é executado."
  },
  {
    id: 7,
    category: "Repetição",
    level: "Básico",
    question: "Qual estrutura é normalmente usada quando sabemos quantas repetições queremos realizar?",
    code: null,
    options: ["if", "switch", "for", "try"],
    answer: 2,
    explanation: "O for reúne inicialização, condição e atualização, sendo bastante útil quando o número de repetições é conhecido."
  },
  {
    id: 8,
    category: "Repetição",
    level: "Intermediário",
    question: "Quantas vezes a mensagem será exibida?",
    code: "for (let i = 0; i < 4; i++) {\\n  console.log('Olá');\\n}",
    options: ["3 vezes", "4 vezes", "5 vezes", "Infinitas vezes"],
    answer: 1,
    explanation: "A variável começa em 0 e o laço continua enquanto i < 4. Os valores são 0, 1, 2 e 3: quatro repetições."
  },
  {
    id: 9,
    category: "Funções",
    level: "Básico",
    question: "Qual palavra-chave devolve um valor de dentro de uma função?",
    code: null,
    options: ["break", "console", "return", "const"],
    answer: 2,
    explanation: "return encerra a execução da função e devolve o valor indicado para quem chamou a função."
  },
  {
    id: 10,
    category: "Funções",
    level: "Intermediário",
    question: "O que será retornado pela função soma(4, 3)?",
    code: "function soma(a, b) {\\n  return a + b;\\n}\\n\\nsoma(4, 3);",
    options: ["43", "1", "7", "undefined"],
    answer: 2,
    explanation: "Os argumentos 4 e 3 são recebidos pelos parâmetros a e b. A função retorna a soma: 7."
  },
  {
    id: 11,
    category: "Arrays",
    level: "Básico",
    question: "Qual é o índice do primeiro elemento de um array em JavaScript?",
    code: null,
    options: ["0", "1", "-1", "Depende do tamanho"],
    answer: 0,
    explanation: "Os arrays começam no índice 0. Portanto, o primeiro item fica em lista[0]."
  },
  {
    id: 12,
    category: "Arrays",
    level: "Intermediário",
    question: "Qual método adiciona um elemento ao final de um array?",
    code: "const frutas = ['maçã', 'uva'];",
    options: ["pop()", "shift()", "push()", "slice()"],
    answer: 2,
    explanation: "push() adiciona um ou mais elementos ao final do array e retorna o novo tamanho."
  },
  {
    id: 13,
    category: "Objetos",
    level: "Intermediário",
    question: "Como acessar a propriedade nome deste objeto?",
    code: "const aluno = { nome: 'Ana', idade: 16 };",
    options: ["aluno->nome", "aluno.nome", "aluno[nome]", "aluno:nome"],
    answer: 1,
    explanation: "A notação com ponto, aluno.nome, acessa a propriedade nome. Também seria possível usar aluno['nome']."
  },
  {
    id: 14,
    category: "DOM e eventos",
    level: "Intermediário",
    question: "Qual método registra uma função para responder a um evento, como um clique?",
    code: null,
    options: ["querySelector()", "addEventListener()", "getElementById()", "innerHTML()"],
    answer: 1,
    explanation: "addEventListener associa uma função a um evento. Por exemplo, um botão pode executar uma função quando recebe um clique."
  },
  {
    id: 15,
    category: "React",
    level: "Intermediário",
    question: "Para que serve o hook useState em um componente React?",
    code: null,
    options: [
      "Para criar arquivos CSS",
      "Para guardar um estado e atualizar a interface quando ele muda",
      "Para instalar bibliotecas",
      "Para navegar entre páginas automaticamente"
    ],
    answer: 1,
    explanation: "useState cria uma variável de estado e uma função para atualizá-la. Quando o estado muda, o React renderiza novamente o componente."
  },
  {
    id: 16,
    category: "React",
    level: "Avançado",
    question: "Quando o useEffect com uma lista de dependências vazia é executado?",
    code: "useEffect(() => {\\n  console.log('Iniciou');\\n}, []);",
    options: [
      "A cada clique em qualquer botão",
      "Somente quando uma variável global muda",
      "Após a primeira montagem do componente",
      "Antes de o componente ser criado"
    ],
    answer: 2,
    explanation: "Com uma lista de dependências vazia, o efeito é executado após a montagem do componente. Em desenvolvimento, o Strict Mode pode repetir o ciclo para ajudar a identificar problemas."
  }
];

export const categories = [
  "Todas",
  ...new Set(questions.map((question) => question.category))
];
