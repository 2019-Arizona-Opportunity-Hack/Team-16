const knex = require("../db/knex.js");

module.exports = {
    getAll: function(req, res){
        knex("users")
        .then((result) => {
            console.log("hitting")
            console.log(result)
            res.json(result);
        });
    },

    create: function(req, res){
        knex("users")
        .insert(req.body)
        .returning('*')
        .then((result)=>{
            res.json(result)
        })

    },

    delete: function(req, res){

        knex("users")
        .delete()
        .where('id', req.params.id)
        .then((result)=>{ 
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(err)
        });
    }
}