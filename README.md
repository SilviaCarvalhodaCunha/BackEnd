# Nome do Projeto - Agenda de Contatos

## Descrição

Este projeto é uma aplicação de backend que simula uma agenda de contatos. Ele permite o registro de clientes e seus respectivos contatos. A aplicação utiliza TypeScript, Express e TypeORM para a criação de rotas e interação com o banco de dados PostgreSQL.

## Instalação

1. Clone o repositório para o seu computador

2. Instale as dependências do projeto:

```shell
npm install
```

3. Crie um arquivo `.env` na raiz do projeto como no `.env.example` substituindo os dados

4. Crie um banco de dados PostgreSQL com o memso nome declarado no arquivo `.env`

5. Execute as migrações para criar as tabelas no banco de dados:

```shell
npm run typeorm migration:generate ./src/migrations/CreateTables -- -d ./src/data-source.ts
```

```shell
npm run typeorm migration:run -- -d ./src/data-source.ts
```

## Uso

Para iniciar o servidor da aplicação, utilize o seguinte comando:

```shell
npm run dev
```

O servidor será executado na porta 3000.

## Rotas

### Cliente

1.  **Registrar um novo cliente**

    - Método: POST
    - URL: http://localhost:3000/client
    - Body (JSON):

      ```json
      {
        "name": "Nome do Cliente",
        "email": "cliente@email.com",
        "password": "senha123",
        "telephone": "(XX) XXXXX-XXXX"
      }
      ```

    - Retorno (JSON):

      ```json
      {
        "id": 1,
        "name": "Nome do Cliente",
        "email": "cliente@email.com",
        "telephone": "(XX) XXXXX-XXXX",
        "dateRegistration": "2023-07-30"
      }
      ```

2.  **Realizando Login**

    - Método: POST
    - URL: http://localhost:3000/login
    - Body (JSON):

      ```json
      {
        "email": "cliente@exemplo.com",
        "password": "senha123"
      }
      ```

    - Retorno (JSON):

      ```json
      {        
        "token": "tokendeautorização", 
      }
      ```

3.  **Listar informações do cliente autenticado**

    - Método: GET
    - URL: http://localhost:3000/client
    - Header:

      ```plaintext
      Authorization: Bearer SEU_TOKEN_DE_AUTORIZACAO
      ```

    - Retorno (JSON):

      ```json
      {
        "id": 1,
        "name": "Nome do Cliente",
        "email": "cliente@email.com",
        "telephone": "(XX) XXXXX-XXXX",
        "dateRegistration": "2023-07-30"
      }
      ```

4.  **Atualizar informações do cliente autenticado**

    - Método: PATCH
    - URL: http://localhost:3000/client/:id
    - Header:

      ```plaintext
      Authorization: Bearer SEU_TOKEN_DE_AUTORIZACAO
      ```

    - Body (JSON):

      ```json
      {
        "name": "Novo Nome",
        "telephone": "(XX) XXXXX-XXXX"
      }
      ```

    - Retorno (JSON):

      ```json
      {
        "id": 1,
        "name": "Novo Nome",
        "email": "cliente@email.com",
        "telephone": "(XX) XXXXX-XXXX",
        "dateRegistration": "2023-07-30"
      }
      ```

5.  **Excluir cliente autenticado**

    - Método: DELETE
    - URL: http://localhost:3000/client/:id
    - Header:

      ```plaintext
      Authorization: Bearer SEU_TOKEN_DE_AUTORIZACAO
      ```

    - Retorno: Status 204 No Content

### Contato

1. **Registrar um novo contato para o cliente autenticado**

   - Método: POST
   - URL: http://localhost:3000/contact
   - Header:

     ```plaintext
     Authorization: Bearer SEU_TOKEN_DE_AUTORIZACAO
     ```

   - Body (JSON):

     ```json
     {
       "name": "Nome do Contato",
       "email": "contato@email.com",
       "telephone": "(YY) YYYYY-YYYY"
     }
     ```

   - Retorno (JSON):

     ```json
     {
       "id": 1,
       "name": "Nome do Contato",
       "email": "contato@email.com",
       "telephone": "(YY) YYYYY-YYYY",
       "dateRegistration": "2023-07-30"
     }
     ```

2. **Listar contatos do cliente autenticado**

   - Método: GET
   - URL: http://localhost:3000/contact
   - Header:

     ```plaintext
     Authorization: Bearer SEU_TOKEN_DE_AUTORIZACAO
     ```

   - Retorno (JSON):

     ```json
     [
       {
         "id": 1,
         "name": "Nome do Contato 1",
         "email": "contato1@email.com",
         "telephone": "(YY) YYYYY-YYYY",
         "dateRegistration": "2023-07-30T00:00:00.000Z"
       },
       {
         "id": 2,
         "name": "Nome do Contato 2",
         "email": "contato2@email.com",
         "telephone": "(ZZ) ZZZZZ-ZZZZ",
         "dateRegistration": "2023-07-30T00:00:00.000Z"
       }
     ]
     ```

3. **Atualizar informações do contato do cliente autenticado**

   - Método: PATCH
   - URL: http://localhost:3000/contact/:id
   - Header:

     ```plaintext
     Authorization: Bearer SEU_TOKEN_DE_AUTORIZACAO
     ```

   - Body (JSON):

     ```json
     {
       "name": "Novo Nome do Contato",
       "telephone": "(ZZ) ZZZZZ-ZZZZ"
     }
     ```

   - Retorno (JSON):

     ```json
     {
       "id": 1,
       "name": "Novo Nome do Contato",
     ```

4. **Excluir um contato do cliente autenticado**

   - Método: DELETE
   - URL: http://localhost:3000/contact/:id
   - Header:

     ```plaintext
     Authorization: Bearer SEU_TOKEN_DE_AUTORIZACAO
     ```

   - Retorno: Status 204 No Content

## Autor

Silvia Carvalho - [silviacarvalhodacunha@gmail.com](mailto:silviacarvalhodacunha@gmail.com)
