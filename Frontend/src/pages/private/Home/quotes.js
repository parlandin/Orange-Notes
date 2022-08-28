const quotes = [
  {
    quote:
      "Acerte em tudo que puder acertar. Mas não se torture com seus erros.",
    author: "Paulo Coelho ",
  },
  {
    quote:
      "Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão. ",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "É melhor você tentar algo, vê-lo não funcionar e aprender com isso, do que não fazer nada",
    author: "Mark Zuckerberg",
  },
  {
    quote:
      "A possibilidade de realizarmos um sonho é o que torna a vida interessante.",
    author: "Paulo Coelho",
  },
  {
    quote:
      "A vida é uma grande universidade, mas pouco ensina a quem não sabe ser aluno. ",
    author: "Augusto Cury",
  },
  {
    quote:
      "Por medo de diminuir, deixamos de crescer. Por medo de chorar, deixamos de rir. ",
    author: "Paulo Coelho",
  },
  {
    quote: "A persistência é o caminho do êxito.",
    author: "Charles Chaplin",
  },
  {
    quote: "Quantas coisas perdemos por medo de perder. ",
    author: "Paulo Coelho",
  },
  {
    quote:
      "A alegria está na luta, na tentativa, no sofrimento envolvido e não na vitória propriamente dita. ",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Não se deixe intimidar pela opinião dos outros. Só a mediocridade é segura, por isso corra seus riscos e faça o que deseja. ",
    author: "Paulo Coelho",
  },
  {
    quote: "A coragem não é ausência do medo; é a persistência apesar do medo.",
    author: "Desconhecido",
  },
  {
    quote: "A persistência é o melhor caminho do êxito",
    author: "Charles Chaplin",
  },
  {
    quote: "O lucro do nosso estudo é tornarmo-nos melhores e mais sábios",
    author: "Michel de Montaigne",
  },
  {
    quote:
      "Todos os seus sonhos podem se tornar realidade se você tiver coragem para persegui-los",
    author: "Walt Disney",
  },
  {
    quote:
      "Professores podem abrir a porta, mas você precisa passar por ela por você mesmo ",
    author: "Provérbio Chinês",
  },
  {
    quote:
      "Não permita que aquilo que você não pode fazer interfira naquilo que você pode fazer ",
    author: "John Wooden",
  },
  {
    quote:
      "Nossa maior fraqueza é desistir. O caminho mais certo para o sucesso é sempre tentar apenas uma vez mais",
    author: "Thomas Edison",
  },
  {
    quote:
      "Nunca deixe nada em branco. Aquele que tentou e não conseguiu, é superior àquele que não tentou",
    author: "Autor desconhecido",
  },
  {
    quote: "Quanto mais difícil fica, mais próximo está o sucesso",
    author: "Chris Garrett",
  },
  {
    quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia",
    author: "Robert Collier",
  },
  {
    quote: "Investir em conhecimento rende sempre os melhores juros",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Quem estuda e não pratica o que aprendeu, é como o homem que lavra e não semeia",
    author: "Provérbio Árabe",
  },
  {
    quote:
      "Educação é o passaporte para o futuro, porque o amanhã pertence àqueles que se preparam para ele hoje",
    author: "Malcolm X",
  },
  {
    quote: "Lembre-se sempre: A única coisa que cai do céu é a chuva",
    author: "Desconhecido",
  },
  {
    quote: "As raízes dos estudos são amargas, mas seus frutos são doces.",
    author: "Aristóteles",
  },
  {
    quote:
      "O fracasso é uma ótima oportunidade para começar de novo de forma mais inteligente",
    author: "Henry Ford",
  },
  {
    quote: "A única forma de alcançar o impossível é pensar que é possível",
    author: "Lewis Carroll",
  },
  {
    quote:
      "Se quiser ser feliz, amarre-se a uma meta, não a pessoas ou a coisas.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Sua capacidade de se disciplinar para estabelecer metas claras e depois trabalhar para elas todos os dias garantirá mais o seu sucesso do que qualquer outro fator. ",
    author: "Brian Tracy",
  },
  {
    quote: "Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo.",
    author: "Winston Churchill",
  },
  {
    quote: "Se você acha que educação é cara, experimente a ignorância.",
    author: "Derek Bok",
  },
  {
    quote: "Grandes obras são executadas não pela força mas pela perseverança.",
    author: "Samuel Johnson",
  },
  {
    quote:
      "Eu falhei muitas e muitas vezes na vida. E é exatamente por isso que eu obtive sucesso.",
    author: "Michael Jordan",
  },
  {
    quote: "Seu futuro depende de muitas coisas, mas principalmente de você!",
    author: "Frank Tyger",
  },
  {
    quote:
      "Você precisa manter o foco em sua jornada para realizar grandes coisas",
    author: "Les Brown",
  },
  {
    quote:
      "Gênio é um por cento de inspiração e noventa e nove por cento de transpiração.",
    author: "Thomas Edison",
  },
  {
    quote: "Não importa o quão devagar você vá, desde que não pare.",
    author: "Confúcio",
  },
  {
    quote:
      "Para obter sucesso, comece onde você está, use o que você tem e faça o que você pode. ",
    author: "Arthur Ashe",
  },
  {
    quote:
      "Eu não falhei. Eu apenas descobri 10 mil maneiras que não funcionavam.",
    author: "Thomas Edison",
  },
  {
    quote:
      "O que é bonito sobre a aprendizagem é que ninguém pode tirá-la de você",
    author: "B.B. King",
  },
  {
    quote: "Aprenda com o ontem. Viva o hoje. Tenha esperança para o amanhã",
    author: "Albert Einstein",
  },
  {
    quote:
      "Viva como se fosse morrer amanhã. Aprenda como se fosse viver para sempre.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Posso ainda não ter chegado onde eu queria, mas estou mais perto do que ontem.",
    author: "Alexsandra Zulpo",
  },
  {
    quote:
      "Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo.",
    author: "Martin Luther King",
  },
  {
    quote:
      "Aquele que faz perguntas é um bobo por cinco minutos. Mas aquele que jamais questiona é um bobo para sempre",
    author: "Provérbio Chinês",
  },
];

export default quotes;
