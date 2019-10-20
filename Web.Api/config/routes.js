//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js");
const userService = require("../controllers/usersService");
const needsService = require("../controllers/needsService");

module.exports = function(app) {
  app.get("/", template.index);

  app.get('/', template.index);

  //user routes
  app.get("/users", userService.getAll);

  app.get("/user/:id", userService.get);
  // Users routes
  app.get("/users", userService.getAll);

  app.post("/user", userService.create);

  app.put("/user/:id", userService.update);

  app.delete("/user/:id", userService.delete);

  // Nees routes
  app.get("/needs/:user_id", needsService.getAllByUser);
  app.post("/needs/:user_id", needsService.create);
  app.delete("/needs/:user_id", needsService.delete);
};
