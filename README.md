# Descrição

Projeto criado utilizando o Cypress para a automação de testes End-to-End. Enjoy!

## Pré-requisitos

É necessário ter instalado previamente na máquina o Node.js e o npm para executar esse projeto.

> Eu utilizei as versões `v20.5.0` e `9.8.0` do Node.js e npm, respectivamente. E sugiro que use a mesma ou versão posterior.

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/cahcgm/desafioAvenue.git
```

### 2. Instale as dependências

Execute no seu terminal `npm install` para instalar as dependências do projeto.

### 3. Execute os testes

Você pode executar o projeto no modo 'headless' ou no modo interativo usando os comandos abaixo no seu terminal:

#### Modo Headless

Execute no seu terminal `npx cypress run` para executar todos os testes dessa suíte. Para executar isoladamente os testes de api ou de ui, execute utilizando as tags conforme abaixo:

`npx cypress run --env grepTags=@api`
`npx cypress run --env grepTags=@ui`

#### Modo Interativo

Execute no seu terminal `npx cypress open` para abrir o Cypress no modo interativo e executar os testes dessa suíte. 
___

Esse projeto foi criado por [Carolina Martins](https://github.com/cahcgm).