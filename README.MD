# Orange notes

### o orange notes chegou para centalizar todas suas ferramentas de estudos em um único lugar, faça anotações, salve o link de cursos, use pomodoro time para se concentra em suas tarefas e mais...

<br>

# Visão geral

- [Funcionalidades](#link1)
- [Demostração](#link2)
- [Instalação](#link3)
- [Tecnologias utilizadaas](#link4)
- [Links](#link5)

<br>

<a id="link1"></a>

## Funcionalidades

### Rotas publicas

- Crianção de conta
- Login

### Rotas Privadas

- Página home com menu e suas ultimas anotações
  - Página de listagem de anotações
  - Página de detalhes de anotação
  - Página para atualizar anotações
  - Modal para excluir anotação
- Página para Guarda link de seus cursos
  - modal para criar, editar e excluir link
  - Card clicável para ir direto para o curso
- Página com pomodoro time com ajuste de tempo
  - Modal para configurar
- Página de detalhes da conta e botão para deletar conta
- Contador de dias consecutivos que volta a 1 se ficar 24 Offline

<a id="link2"></a>

## Demostrações

### Login e registro

<img src="https://github.com/Gu-Parlandim/Orange-Notes/blob/f023cb116d2b4aaaf99e59cbcf9e52a274a2e820/exemples/login.gif" alt="gif"  align="center">

### Anotações

<img src="https://github.com/Gu-Parlandim/Orange-Notes/blob/f90157e2b493dfab5997bb763ba53431f3a1473b/exemples/notes.gif" alt="gif"  align="center">

### Link de Cursos

<img src="https://github.com/Gu-Parlandim/Orange-Notes/blob/f90157e2b493dfab5997bb763ba53431f3a1473b/exemples/courses.gif" alt="gif"  align="center">

### Pomodoro

<img src="https://github.com/Gu-Parlandim/Orange-Notes/blob/b297e3865bdd8006255c6640d71554e96e59167d/exemples/pomodoro.png" alt="gif"  align="center">

<br>

<a id="link3"></a>

## Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do `Nodejs`
- Além de ter o `PostgreSQL` instalado na sua márquina

## Instalando

Para instalar, siga estas etapas:

```
npm install
```

ou

```
yarn add
```

## Usando

Para usar, siga estas etapas:

```
npm run dev
```

Cientifique-se de verificar as variaveis de ambiente

```
USER = postgres user
HOST = postgres host
DATABASE = postgres host
PASSWORD = "postgres pass"
DBPORT = postgres port (padrão: 5432)
SECRET_JWT = "hash para geranção do seu token"
```

<a id="link4"></a>

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

### Front-end

- [Vitejs](https://vitejs.dev/)
- [React](https://pt-br.reactjs.org/)
- [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)

- [React Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://axios-http.com/ptbr/)
- [styled-components](https://styled-components.com/)
- [yup](https://www.npmjs.com/package/yup)

### Backend

- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [yup](https://www.npmjs.com/package/yup)
- [cors](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://expressjs.com/pt-br/)
- [jsonwebtoken](https://jwt.io/)
- [pg](https://node-postgres.com/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

<a id="link5"></a>
[Frontend deploy](https://orangemynotes.netlify.app/)

[Backend deploy](https://orangemynotes.herokuapp.com/)
