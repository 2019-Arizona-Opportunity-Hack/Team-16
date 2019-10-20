//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
const userService = require("../controllers/usersService");

module.exports = function(app){

  app.get('/', template.index);


  app.get("/users", userService.getAll );

  app.post("/user", userService.create);

  app.delete("/user/:id", userService.delete);

}