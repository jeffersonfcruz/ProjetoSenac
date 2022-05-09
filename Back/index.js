/* 
Estrutura de backend, em que iremos selecionar, cadastrar, atualizar e
deletar dados sobre os produtos, ou seja, criaremos um crud
CRUD
C -> Create: Quando cria-se dados no banco
R -> Read: Quando lemos dados no banco
U -> Update: Quando atualizamos dados no banco
D -> Delete: Quando apagamos dados no banco
Vamos mudar os verbos: GET, POST, PUT, DELETE, onde:
GET -> Read
POST -> Create
PUT -> Update
DELETE -> Delete
*/

//Importação do módulo express
const express = require("express");

//Importação do módulo do Mongoose
const mongoose = require("mongoose");

//Importação do módulo do Cors
const cors = require("cors");

//Criação do app referente ao express
const app = express();

//Preparar o servidor para receber json
app.use(express.json());

//Uso do cors para desbloqueio de acesso
app.use(cors());

const urldb =
  "mongodb+srv://jefferson:Pipoca98513@jefferson.bea7u.mongodb.net/clientes?retryWrites=true&w=majority";
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

/*Definição do esquema de dados da tabela Schema*/
const tabelaCliente = mongoose.Schema({
  name: { type: String, require },
  tel: { type: String, require },
  email: { type: String, require },
  end: { type: String, require },
});

const Produto = mongoose.model("tbCliente", tabelaCliente);

//Definição de uma rota padrão
const default_rote = "/api/cliente";

//Rota para listar os produtos com endpoint listar
app.get(`${default_rote}/listar`, (req, res) => {
  Produto.find()
    .then((dados) => {
      res.status(200).send({ output: dados });
    })

    .catch((erro) =>
      res
        .status(500)
        .send({ output: `Erro interno ao processar a consulta -> ${erro}` })
    );
});

//Rota para cadastrar os produtos com endpoint cadastrar
app.post(`${default_rote}/cadastrar`, (req, res) => {
  const pro = new Produto(req.body);
  pro
    .save()
    .then((dados) => {
      res
        .status(201)
        .send({ output: "Dados cadastrados com sucesso", payload: dados });
    })
    .catch((erro) => console.error(`Erro ao tentar cadastrar ${erro}`));
});

//Rota para atualizar os produtos com endpoint atualizar
//Passagem de argumentos pela url com o id do produto
app.put(`${default_rote}/atualizar/:id`, (req, res) => {
  Produto.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (erro, dados) => {
      if (erro) {
        return res.status(500).send({ output: `Não atualizou -> ${erro}` });
      }
      res.status(200).send({ output: "Dados atualizados com sucesso!" });
    }
  );
});

//Rota para apagar produto com endpoint deletar
app.delete(`${default_rote}/apagar/:id`, (req, res) => {
  Produto.findByIdAndDelete(req.params.id, (erro, dados) => {
    if (erro) {
      return res
        .status(500)
        .send({ output: `Erro ao tentar apagar -> ${erro}` });
    }
    res.status(204).send({ output: `Apagado!` });
  });
});

app.listen(5000, () =>
  console.log("Servidor on-line em: http://localhost:5000")
);