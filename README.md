<div align="center">
  <img src="https://img.shields.io/badge/status-completed-brightgreen" />
</div>
<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-287340" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?&logo=Prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/json%20web%20tokens%20|%20JWT-1b1c1a?&logo=json-web-tokens&logoColor=pink" />
</div>

# ng-backend

🧱 Backend do NG.CASH (desafio técnico)

## Rodando localmente ▶

> Nesse projeto é usado apenas o Yarn como gerenciador de pacotes. Veja o website oficial do Yarn [aqui](https://yarnpkg.com/).

Clone o projeto

```bash
  git clone https://github.com/allbertuu/ng-backend
```

Entre no diretório do projeto

```bash
  cd ng-backend
```

Instale as dependências

```bash
  yarn install
```

Rode o migrate do Prisma ORM

> Importante avisar que antes deve ser criado um arquivo `.env`, com uma chave `DATABASE_URL`, de valor contendo o Connection URL do seu banco de dados PostgreSQL.

```bash
  yarn migrate
```

Se desejar, rode o Studio do Prisma ORM

```bash
  yarn studio
```

> Irá rodar na porta `5555` do `localhost`

Rode o servidor

> Antes de iniciar o server, verifique/adicione se no arquivo `.env` há uma chave `SECRET_TOKEN`, de valor contendo um HASH para ser usado na geração do Token JWT.

```bash
  yarn dev
```

Rodar testes (Jest) (**ATUALIZAÇÃO FUTURA**)

```bash
  yarn test
```

## Stack utilizada ⚙

-   TypeScript (para tipagem estática no JS)
-   Bcrypt (para "hashar" a password no DB)
-   CORS
-   Insomnia (para testes na API)
-   Bearer Token (para autorizações)
-   Token JWT (para autenticações)
-   Prisma ORM (para criação e manipulação no DB - PostgreSQL)
-   express-async-errors (para lidar com erros no Backend - criei um módulo personalizado para erros)
-   jwt-decode (para decode do Token JWT)
-   CI/CD no GitHub Actions para formatação do código automatizado (Prettier)

## Regras de negócio para estruturação dos _endpoints_ 📑

<details>
<summary>Clique para expandir</summary>

- [x] Qualquer pessoa deverá poder fazer parte da NG. Para isso, basta realizar o cadastro informando _username_ e _password_.  
- [x] Deve-se garantir que cada _username_ seja único e composto por, pelo menos, 3 caracteres.  
- [x] Deve-se garantir que a _password_ seja composta por pelo menos 8 caracteres, um número e uma letra maiúscula. Lembre-se que ela deverá ser _hashada_ ao ser armazenada no banco.  
- [x] Durante o processo de cadastro de um novo usuário, sua respectiva conta deverá ser criada automaticamente na tabela **Accounts** com um _balance_ de R$ 100,00. É importante ressaltar que caso ocorra algum problema e o usuário não seja criado, a tabela **Accounts** não deverá ser afetada.  
- [x] Todo usuário deverá conseguir logar na aplicação informando _username_ e _password._ Caso o login seja bem-sucedido, um token JWT (com 24h de validade) deverá ser fornecido.  
- [x] Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar seu próprio _balance_ atual. Um usuário A não pode visualizar o _balance_ de um usuário B, por exemplo.  
- [x] Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de realizar um _cash-out_ informando o _username_ do usuário que sofrerá o _cash-in_), caso apresente _balance_ suficiente para isso. Atente-se ao fato de que um usuário não deverá ter a possibilidade de realizar uma transferência para si mesmo.  
- [x] Toda nova transação bem-sucedida deverá ser registrada na tabela **Transactions**. Em casos de falhas transacionais, a tabela **Transactions** não deverá ser afetada.  
- [x] Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar as transações financeiras (_cash-out_ e _cash-in_) que participou. Caso o usuário não tenha participado de uma determinada transação, ele nunca poderá ter acesso à ela.  
- [-] Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de filtrar as transações financeiras que participou por:  
  - [-] Data de realização da transação e/ou  
    - [-] Transações de _cash-out;_  
    - [-] Transações de _cash-in._  
  
</details>

## Arquitetura 🧱

<details>
<summary>Clique para expandir</summary>

-   Tabela **Users:**
    -   id —> _PK_
    -   username (o @ do usuário)
    -   password (_hasheada_)
    -   accountId —> _FK_ Accounts[id]
-   Tabela **Accounts:**
    -   id —> _PK_
    -   balance
-   Tabela **Transactions:** - id —> _PK_ - debitedAccountId —> _FK_ Accounts[id] - creditedAccountId —> _FK_ Accounts[id] - value - createdAt
</details>

## Relacionados 🔗

Segue alguns projetos relacionados

[NG Frontend](https://github.com/allbertuu/ng-frontend)

## Documentação da API 🧱

Instale o Insomnia e importe esse [arquivo JSON](https://drive.google.com/file/d/1HF9fhqjjoLlfzcN-CLRS6xqYem5OuBYW/view?usp=sharing) com a coleção NG Backend.

**Importante:** lembre de gerar um Token JWT em uma sessão de Login (rota /session), e alterar o `AuthorizationToken` no Sub Environment, para então fazer as requisições à API devidamente autenticado (Token dura 24h).

## Aprendizados 📚

Nesse desafio, enfrentei muitos obstáculos e dificuldades. Nunca tinha me desafiado a construir algo tão grande e com conhecimentos tão abrangentes e interdisciplinares. Fiz um Backend completo, robusto. Pode até não ser a coisa mais íncrivel, mas certamente pra mim foi.  
Claro que, nunca flertei com a desistência, ainda mais quando sei do meu potencial de sucesso, e muito menos seria agora.  
Em 8 dias aprendi desenvolvendo esse APP sozinho, o que jamais aprendi até aqui (11/22). Aprendi a continuar mesmo em uma situação difícil e arrojada, e melhorei ainda mais meu mindset do que **realmente** é um desenvolvedor. Deixo para você descobrir também, mas saiba que ser proativo e curioso já te deixa bemmm a frente.

## Feedback 💬

Se você tiver algum feedback, me manda uma mensagem no [LinkedIn](https://www.linkedin.com/in/albertov-albuquerque/) 😉
