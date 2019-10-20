const knex = require("../db/knex.js");

module.exports = {
  stripe_get_id: function(req, res) {
    console.log("" + req.body.name);
    var sessionJSON;
    var id;
    const stripe = require('stripe')('sk_test_3KNveg5tCJaQPS1NcCSWohFg00WlCKYVhJ');
    (async () => {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          name: req.body.name,
          description: req.body.description,
          amount: req.body.amount,
          currency: req.body.currency,
          quantity: req.body.quantity,
        }],
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
      });
      id = session.id;
      console.log(session);
      res.send(id);
    })();
  }
}