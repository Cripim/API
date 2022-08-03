export const usuarios = (app) => {
  app.get("/usuario/get", (req, res) => {
    // enviando uma resposta
    res.send(
      "Rota ativada com GET e recurso usuarios: valores de usuarios devem ser retornados"
    );
  });
  app.post("/usuario", (req, res) => {
    // enviando uma resposta
    res.send(
      "Rota POST de usuários ativada: usuário adicionado ao banco de dados!"
    );
  });
};
