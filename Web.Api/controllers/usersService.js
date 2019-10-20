const knex = require("../db/knex.js");

module.exports = {

    getAll: (req, res) => {
        knex("users")
            .then((result) => {
                res.json(result);
            });
    },

    get: (req, res) => {
        knex('users')
            .where('id', req.params.id)
            .then((result) => {
                res.json(result);
            });
    },

    create: (req, res) => {
        knex("users")
            .insert(req.body)
            .returning('*')
            .then((result)=>{
                res.json(result)
            })
    },

    delete: (req, res) => {
        knex("users")
            .delete()
            .where('id', req.params.id)
            .then((result)=>{ 
                res.sendStatus(200);
            })
            .catch(err => {
                console.log(err)
            });
    },

    update: (req, res) => {
        knex('users')
            .update(req.body)
            .where('id', req.params.id)
            .returning('*')
            .then((result) => {
                res.json(result); 
            });
            
    }
}