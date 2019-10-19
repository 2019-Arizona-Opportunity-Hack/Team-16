// const stripe = require("../db/knex.js");

module.exports = {
  stripe: function(req, res) {
    console.log("stripe()\n\n\n\n\n");
    // const stripe = require('stripe')('sk_test_3KNveg5tCJaQPS1NcCSWohFg00WlCKYVhJ');
    // (async () => {
    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items: [{
    //       name: 'T-shirt',
    //       description: 'Comfortable cotton t-shirt',
    //       images: ['https://example.com/t-shirt.png'],
    //       amount: 500,
    //       currency: 'usd',
    //       quantity: 1,
    //     }],
    //     success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    //     cancel_url: 'https://example.com/cancel',
    //   });
    // })();


    res.send("stripe");
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