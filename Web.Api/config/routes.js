//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js");
const userService = require("../controllers/usersService");
const needsService = require("../controllers/needsService");

module.exports = function(app) {
  app.get("/", template.index);

  // Users routes
  app.get("/users", userService.getAll);

  app.post("/user", userService.create);

  app.delete("/user/:id", userService.delete);

  // Nees routes
  app.get("/needs/:user_id", needsService.getAllByUser);
  app.post("/needs/:user_id", needsService.create);
  app.delete("/needs/:user_id", needsService.delete);
};
