<h1>Labecommerce-backend</h1>
API que contém a explicação de funcionamento de banco de dados de um ecommerce, projeto integrante do curso desenvolvedor web full stack da Labenu.

<h1>Índice:</h1>
<em>Layout</em><br>
<em>Requisições</em><br>
<em>Exemplo de Requisições</em><br>
<em>Como rodar este projeto</em><br>
<em>Tecnologias Utilizadas</em><br>
<em>Documentação</em><br>

Layout
Estrututa dos arquivos
Layout

Requisições
Requisições (paths):
REQUISIÇÔES DE USUARIOS:
/users
REQUISIÇÔES DE PRODUTOS:
/produtos
REQUISIÇÔES DE COMPRAS:
/purchases

Exemplo de requisições
GET ALL USERS :
Requisição responsavel por: Buscar tudos os usuários.
path: /users
CREATE USER :
Requisição responsavel por: Criar um novo usuário.
path: /users
EDIT USER BY ID :
Requisição responsavel por: Editar usuário por ID.
path: /users/:id
DELETE USER BY ID :
Requisição responsavel por: Deletar um usuário por ID.
path: /users/:id
GET ALL PRODUCTS :
Requisição responsavel por: Buscar tudos os produtos
path: /products
GET PRODUCTS BY QUERY :
Requisição responsavel por: Buscar produtos por determinada informação de busca
path: /products?name=
CREATE PRODUCT :
Requisição responsavel por: Criar um novo produto.
path: /products
EDIT PRODUCT BY ID :
Requisição responsavel por: Editar produto por ID.
path: /products/:id
DELETE PRODUCT BY ID :
Requisição responsavel por: Deletar um produto por ID.
path: /products/:id
GET ALL PURCHASES :
Requisição responsavel por: Buscar tudas as compras.
path: /purchases
GET PURCHASE BY ID :
Requisição responsavel por: Buscar compra por ID.
path: /purchases/:id
CREATE PURCHASE :
Requisição responsavel por: Criar uma nova compra.
path: /purchases
DELETE PURCHASE BY ID :
Requisição responsavel por: Deletar uma compra por ID.
path: /purchases/:id
Como rodar este projeto
# Copie o link a baixo

https://github.com/Rlopesn/Labecommerce-backend.git

# Abra seu terminal e digite o seguinte comando

git clone (cole a url aqui)

# verifique se esto diretorio correto ou acesse ou acesse o diretorio

cd labecommerce-backend

# Instale as dependências

npm install

# Executando o Projeto

npm run start

deverá aparecer a confirmação: Servidor rodando na porta 3003

Tecnologias utilizadas
Node.js
TypeScript
Express
SQL
SQLITE
Knex.js
Documentação postman
Documentação API postman
