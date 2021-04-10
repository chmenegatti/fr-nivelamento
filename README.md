<h1 align="center">
Teste de Nivelamento - BackEnd
</h1>

<p align="center">Repositório de BackEnd do teste de Nivelamento</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<hr />

## Features

Este backend conta com as tecnologias abaixo:

- 💹 **Node Js** — Frameword baseado em JavaScript
- 📄 **PostgreSQL** — Banco de dados Relacional
- TS **TypeScript** — Superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem

## 01. Início

1. Crie uma pasta chamada nivelamento e acesse a pasta. `mkdir nivelamento && nivelamento` (Linux/Mac) ou `md nivelamento` e `cd nivelamento` (Windows)<br/>
2. Clone este repositório usando `git clone https://github.com/chmenegatti/fr-nivelamento.git server`<br/>
3. Acesse a pasta: `cd server`<br />
3. Digite `yarn` para instalar as dependências<br />

## 02. Criando o container do banco de Dados
1. Com o docker instalado (siga instruções do desenvolvedor) crie o contaner seguindo o comando abaixo
2. `docker run --name interview -e POSTGRES_USER=seu_usuario -e POSTGRES_PASSWORD=sua_senha -p 5432:5432 -d postgres
3. Aguarde a criação do container.

### 03. Configurando o BackEnd

1. Vá para a pasta: `cd server`
2. Abra o arquivo ormconfig.json
3. Coloque o username e password que usou na criação do container.
4. Crie o bando de dados `interview`com o comando: `yarn typeorm query "CREATE DATABASE interview`.
5. Com o DBeaver instalado, crie a conexão com Container e acesse o banco criado.
6. Se tudo estiver ok, inicie o servidor com o comando `yarn dev:server`;

### 04. Criando o tipos para os usuários.

1. Abra o Insomnia
2. Em preferências - DATA - Clique em Import Data - From File e abra o arquivo `Insomnia_2021-04-09.json`
3. As rotas do insomnia serão criads.
4. Na Pasta Tipos - Clique na Rota Create
5. No corpo da requisição digite Administrador no tipo e clique em send
6. Faça o mesmo para Comum.
7. Na Pasta Categories Create - Crie algumas categorias de produtos.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
