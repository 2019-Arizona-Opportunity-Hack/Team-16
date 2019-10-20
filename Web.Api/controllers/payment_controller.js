
module.exports = {
  stripe_charge: function(req, res) {
    const stripe = require('stripe')('sk_test_3KNveg5tCJaQPS1NcCSWohFg00WlCKYVhJ');

    // Token is created using Checkout or Elements!
    // Get the payment token ID submitted by the form:
    console.log(req);

    (async () => {
      try {
        const charge = await stripe.charges.create({
          amount: req.body.amount,
          currency: 'usd',
          description: 'Donation to You Matter Too',
          source: req.body.token,
        });
        res.send("1");
      } catch(e) {
        res.send("0");
      }
    })();
  }
}