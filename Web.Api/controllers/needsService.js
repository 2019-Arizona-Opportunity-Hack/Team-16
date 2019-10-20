const knex = require("../db/knex.js");

module.exports = {
  getAllByUser: function(req, res) {
    knex("userNeeds")
      .where("userId", req.params.user_id)
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  },

  create: function(req, res) {
    knex("userNeeds")
      .insert(
        {
          name: req.body.name,
          description: req.body.description,
          userId: req.params.user_id
        },
        "*"
      )
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  },

  delete: function(req, res) {
    knex("userNeeds")
      .delete()
      .where("user_id", req.params.user_id)
      .then(result => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
