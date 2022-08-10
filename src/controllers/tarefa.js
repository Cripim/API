//import { Tarefa } from "../models/tarefa.js";

import { bd } from "../infra/sqlite-db.js";
export const tarefas = (app) => {
  // app.get("/tarefa/get", (req, res) => {
  // enviando uma resposta
  //  res.send("Rota GET de tarefa ativada: tarefas retornadas!");
  // });
  app.post("/tarefa/post", (req, res) => {
    const { titulo, descricacao, status, dataCriacao } = req.body;
  });
  //app.get("/tarefa/:id", (req, res) => {
  //  for (let i = 0; i < bdTarefa.length; i++) {
  //   if (req.params.id == bdTarefa[i].id) {
  //    res.json(bdTarefa[i]);
  //  }
  //  }
  // });

  bd.run(
    `INSERT INTO TAREFAS(TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)
    VALUES (?,?,?,?,?)`,
    [titulo, desc, status, datacreate, id_usuario],
    (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        res.send("tarefa criada com sucesso!");
      }
    }
  );
};
