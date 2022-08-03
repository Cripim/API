import { Tarefa } from "../models/tarefa.js";
import { bdTarefa } from "../infra/bd.js";
export const tarefas = (app) => {
  app.get("/tarefa/get", (req, res) => {
    // enviando uma resposta
    res.send("Rota GET de tarefa ativada: tarefas retornadas!");
  });
  app.post("/tarefa/post", (req, res) => {
    const { titulo, descricacao, status, dataCriacao } = request.body;
    const NewTask = new tarefas(titulo, descricacao, status, dataCriacao);
    bdTarefa.push(NewTask);
    response.send("Tarefa criado com sucesso");
  });
};
