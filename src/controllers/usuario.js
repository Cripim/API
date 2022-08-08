import { bdUsuario } from "../infra/bd.js";

export const usuarios = (app) => {
  app.get("/usuario/:email", (req, res) => {
    for (let i = 0; i < bdUsuario.length; i++) {
      if (req.params.email == bdUsuario[i].email) {
        res.json(bdUsuario[i]);
      }
    }
  });
  app.post("/usuario", (req, res) => {
    // enviando uma resposta
    res.send(
      "Rota POST de usuários ativada: usuário adicionado ao banco de dados!"
    );
  });
};
