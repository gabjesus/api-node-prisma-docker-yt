# Projeto de estudo NodeJS + Prisma + Docker

Baseado no tutorial do YouTube do canal [Startdevjs](https://www.youtube.com/@startdevjs), [neste tutorial](https://www.youtube.com/watch?v=gnq8ZY85UUM&list=PL_9cVrXdWFiU4C6SxjLEeD7eiK9RYbRJK&index=4).

# Techs

- NodeJS
- Prisma
- Docker Compose
- Sucrase
- Nodemon
- Express
- Dotenv
- bcrypt

# Execução

Para executar o projeto é necessário ter instalado algumas ferramentas:

- [Node](https://nodejs.org/en), foi utilizado a versão 20.11 para exemplo. Recomenda-se instalar utilizado o [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm).
- [Docker](https://www.docker.com/) para utilização do [Docker Compose](https://docs.docker.com/compose/).
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) ou [YARN](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable), foi utilizado como exemplo o npm.

## Comandos para execução

```
// Execução do docker-compose em background
docker compose up -d
```

```
// Instalação Prisma
npm install -D prisma
npm install @prisma/client
```

```
// Inicialização Prisma
npx prisma init
```

```
// Primeira migration
npx prisma migrate dev --name init
```

```
// Instalação express, cors e dotenv
npm install express cors dotenv
```

```
// Instalação nodemon para execução do projeto
npm install -D nodemon
```

```
// Instalação do sucrase para interpretação do ES6 para versões mais antigas
npm install -D sucrase
```
```
// Instalação de lib de criptografia bcrypt
npm install bcrypt
```
// Instalação de lib de validação de dados
npm install yup
```
