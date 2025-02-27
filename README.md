# Compass Pb Quality Assurance 
## Sobre mim
Olá, meu nome é Jean Victor de Azevedo Hefler, tenho 20 anos e estou cursando ciência da computação na Atitus (Passo Fundo), atualmente no 5° semestre do curso, gosto de teoria computacional, programação e física. Estou finalizando o programa de bolsas da **CompassUol**, no qual aprendi muito sobre a área de QA e sua importância.

## Sumário
- **[Introdução](#introdução)**
- **[Sobre a API](#sobre-a-api)**
- **[Cenários](#cenários)**
- **[Planejamento funcional](#planejamento-funcional)**

## Introdução
Esse repositório contém o projeto da sprint 8 do programa de bolsas de Quality Assurance da compass Uol, onde eu utilizei o conhecimento adquirido durante o programa de bolsas, para o desenvolvimento de testes de performance na API [Cinema](https://github.com/juniorschmitz/nestjs-cinema).

## Sobre a API
### Informações Gerais
- Nome: Cinema
- UrlBase: a definir

### Endpoints e Requests
ENDPOINT: `/movies`

- HTTP Request: `GET`
- URL: urlBase/movies
- Descrição: Busca dados dos filmes registrados
___
- HTTP Request: `POST`
- URL: urlBase/movies
- Descrição: Registra um novo filme
___
- HTTP Request: `GET`
- URL: urlBase/movies/{id}
- Descrição: Busca dados de um filme registrado
___
- HTTP Request: `PUT`
- URL: urlBase/movies
- Descrição: Atualiza os dados de um filme registrado
___
- HTTP Request: `DELETE`
- URL: urlBase/movies/{id}
- Descrição: Deleta o registro de um filme
___
ENDPOINT: `/tickets`
- HTTP Request: `GET`
- URL: urlBase/tickets
- Descrição: Busca dados dos tickets registrados
___
- HTTP Request: `POST`
- URL: urlBase/tickets
- Descrição: Registra um novo ticket
___
- HTTP Request: `GET`
- URL: urlBase/tickets/{id}
- Descrição: Busca dados de um ticket registrado
___
- HTTP Request: `PUT`
- URL: urlBase/tickets/{id}
- Descrição: Atualiza os dados de um ticket registrado
___
- HTTP Request: `DELETE`
- URL: urlBase/tickets/{id}
- Descrição: Deleta o registro de um tickets
___
## Cenários
Movies, cenários positivos e negativos
![](images/moviesScenarios.jpg)
Tickets, cenários positivos e negativos
![](images/ticketsScenarios.jpg)

## Planejamento funcional

### Introdução
seguindo sua documentação, serão conduzidos testes funcionais nas rotas movies e tickets da API Cinema, sendo eles, teste positivo, teste negativo e smoke test, com o objetivo de validar se as funcionalidades da API estão funcionando como esperado, para isso, será utilizado a ferramentas postman. 

### Itens a serem testados
- Movies: `/movies`
- Ticket: `/tickets`

### Cenários a serem testados
**Movies**
- Registrar um filme
- Atualizar um registro
- Buscar todos os registros
- Buscar um registo
- Deletar um registro

**Tickets**
- Registrar um ticket
- Atualizar um ticket
- Buscar todos os tickets
- Buscar um ticket
- Deletar um ticket

### Estratégia de testes
- Teste positivo -  Serão feitos testes positivos para garantir que as funcionalidades estão reagindo como esperado.

- Teste negativo - Serão feitos testes negativos com o objetivo de validar o tratamento de erro e analisar como a api reage a uma ação inesperada.