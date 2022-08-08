import express from "express";

const app = express();
app.use(express.json());
import { usuarios } from "./controllers/usuario.js";
import { tarefas } from "./controllers/tarefa.js";

usuarios(app);
tarefas(app);

app.listen(3000, () => {
  console.log("Exemplo sendo executada na porta");
});
