import { Tarefa } from "../models/tarefa.js";
import { bdTarefa } from "../infra/bd.js";
export const tarefas = (app) => {
  app.get("/tarefa/get", (req, res) => {
    // enviando uma resposta
    res.send("Rota GET de tarefa ativada: tarefas retornadas!");
  });
  app.post("/tarefa/post", (req, res) => {
    const { titulo, descricacao, status, dataCriacao } = req.body;
    const NewTask = new Tarefa(titulo, descricacao, status, dataCriacao);
    bdTarefa.push(NewTask);
    res.send(bdTarefa);
  });
  app.get("/tarefa/:id", (req, res) => {
    for (let i = 0; i < bdTarefa.length; i++) {
      if (req.params.id == bdTarefa[i].id) {
        res.json(bdTarefa[i]);
      }
    }
  });
};
