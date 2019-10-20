//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
const userService = require("../controllers/usersService");

module.exports = function(app){

  app.get('/', template.index);

  //user routes
  app.get("/users", userService.getAll);

  app.get("/user/:id", userService.get);

  app.post("/user", userService.create);

  app.put("/user/:id", userService.update);

  app.delete("/user/:id", userService.delete);

}