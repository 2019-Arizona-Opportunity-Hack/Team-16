const knex = require("../db/knex.js");

module.exports = {

    getVolunteers: (req, res) => {
        knex('users' )
            .where("isVolunteer", true)
            .then((result) => {
                res.json(result);
            })
    },

    getClients: (req, res) => {
        knex('users')
        .where("isClient", true)
        .then((result)=> {
            res.json(result);
        })
    },

    getDonors: (req, res) => {
        knex('users')
        .where("isDonor", true)
        .then((result)=> {
            res.json(result);
        })
    }


}