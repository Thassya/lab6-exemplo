module.exports = function (app) {
  var handlers = require("../controllers/usuario.controllers");
  app.use('/usuario.html', handlers.listarUsuarioHtml);
  app.use('/cadastro-usuario.html', handlers.cadastroUsuarioHtml);
  app.use('/detalhes.html', handlers.detalhesUsuarioHtml);

  app.route('/usuario')
    .post(handlers.novoUsuario)
    .get(handlers.listarUsuario);
  app.route('/usuario/:usuarioId')
    .get(handlers.detalhes)
    .put(handlers.editaUsuario)
    .delete(handlers.removeUsuario);

  app.param('usuarioId', handlers.usuarioPorId);

}
