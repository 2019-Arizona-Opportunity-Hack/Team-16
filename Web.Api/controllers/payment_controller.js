const knex = require("../db/knex.js");

module.exports = {
  stripe: function(req, res) {
    console.log("" + req.body.name);
    const stripe = require('stripe')('sk_test_3KNveg5tCJaQPS1NcCSWohFg00WlCKYVhJ');
    (async () => {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          // name: 'T-shirt',
          // description: 'Comfortable cotton t-shirt',
          // images: ['https://example.com/t-shirt.png'],
          // amount: 500,
          // currency: 'usd',
          // quantity: 1,
          name: req.body.name,
          description: req.body.description,
          amount: req.body.amount,
          currency: req.body.currency,
          quantity: req.body.quantity,
        }],
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
      });
      // res.json(session);
      console.log(""+ session.id);
    })();
    // res.

    // console.log("" + session.id);
    res.send();

    // stripe.redirectToCheckout({
    //     // Make the id field from the Checkout Session creation API response
    //     // available to this file, so you can provide it as parameter here
    //     // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
    //     sessionId: '{{CHECKOUT_SESSION_ID}}'
    //   }).then(function (result) {
    //     // If `redirectToCheckout` fails due to a browser or network
    //     // error, display the localized error message to your customer
    //     // using `result.error.message`.
    //   });

  }
}