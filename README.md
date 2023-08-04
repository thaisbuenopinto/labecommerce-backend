<h1>Labecommerce-backend</h1>
API que contém a explicação de funcionamento de banco de dados de um ecommerce, projeto integrante do curso desenvolvedor web full stack da Labenu.

<h1>Índice:</h1>
<em>Rodando o projeto</em><br>
<em>Layout</em><br>
<em>Requisições</em><br>
<em>Exemplo de Requisições</em><br>

<em>Tecnologias Utilizadas</em><br>
<em>Documentação</em><br>

<h1>Rodando o projeto</h1><br>

<strong> Copie o link a baixo </strong><br>

https://github.com/thaisbuenopinto/labecommerce-backend<br>

<strong> Abra seu terminal e digite o seguinte comando</strong><br>

git clone (cole a url aqui)<br>

<strong> Acesse o diretorio</strong><br>

cd labecommerce-backend<br>

<strong> Instale as dependências</strong><br>

npm install<br>

<strong> Executando o Projeto</strong><br>

Digite "npm run dev" para obter a confirmação de que o servidor esta rodando: Servidor rodando na porta 3003 <br>

<h1>Layout</h1>
Estrututa dos arquivos<br>
![image](https://github.com/thaisbuenopinto/labecommerce-backend/assets/114695238/b47167ba-0969-480e-a661-6cfafc741e71)


Requisições<br>
Requisições (paths):<br>
REQUISIÇÔES DE USUARIOS:<br>
/users<br>
REQUISIÇÔES DE PRODUTOS:<br>
/produtos<br>
REQUISIÇÔES DE COMPRAS:<br>
/purchases<br>

Exemplo de requisições<br>
GET ALL USERS :<br>
Requisição responsavel por: Buscar tudos os usuários.<br>
path: /users<br>
CREATE USER :<br>
Requisição responsavel por: Criar um novo usuário.<br>
path: /users<br>
EDIT USER BY ID :<br>
Requisição responsavel por: Editar usuário por ID.<br>
path: /users/:id<br>
DELETE USER BY ID :<br>
Requisição responsavel por: Deletar um usuário por ID.<br>
path: /users/:id<br>
GET ALL PRODUCTS :<br>
Requisição responsavel por: Buscar tudos os produtos<br>
path: /products<br>
GET PRODUCTS BY QUERY :<br>
Requisição responsavel por: Buscar produtos por determinada informação de busca<br>
path: /products?name=<br>
CREATE PRODUCT :<br>
Requisição responsavel por: Criar um novo produto.<br>
path: /products<br>
EDIT PRODUCT BY ID :<br>
Requisição responsavel por: Editar produto por ID.<br>
path: /products/:id<br>
DELETE PRODUCT BY ID :<br>
Requisição responsavel por: Deletar um produto por ID.<br>
path: /products/:id<br>
GET ALL PURCHASES :<br>
Requisição responsavel por: Buscar tudas as compras.<br>
path: /purchases<br>
GET PURCHASE BY ID :<br>
Requisição responsavel por: Buscar compra por ID.<br>
path: /purchases/:id<br>
CREATE PURCHASE :<br>
Requisição responsavel por: Criar uma nova compra.<br>
path: /purchases<br>
DELETE PURCHASE BY ID :<br>
Requisição responsavel por: Deletar uma compra por ID.<br>
path: /purchases/:id<br>





# Tecnologias utilizadas

<strong>Node.js</strong><br>
<strong>TypeScript</strong><br>
<strong>Express</strong><br>
<strong>SQL</strong><br>
<strong>SQLITE</strong><br>
<strong>Knex.js</strong><br>
<strong>Documentação API postman</strong><br>
