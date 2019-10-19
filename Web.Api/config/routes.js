//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
const payment_controller = require("../controllers/payment_controller.js")

module.exports = function(app){
  app.get('/', template.index);
  app.get('/charge', payment_controller.charge);
}