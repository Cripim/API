import { bd } from "../infra/sqlite-db.js";

export const usuarios = (app) => {
  app.get("/usuario", (req, res) => {
    bd.all("SELECT * FROM USUARIO", (error, rows) => {
      if (error) {
        console.log(error.message);
      } else {
        res.json(rows);
      }
    });
  });
  // app.post("/usuario", (req, res) => {
  // enviando uma resposta
  //  res.send(
  //   "Rota POST de usuários ativada: usuário adicionado ao banco de dados!"
  //  );
  // });
};
