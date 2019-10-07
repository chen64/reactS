const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const reqLogin = require("../middlewares/reqLogin");

module.exports = app => {
  app.post("/api/stripe", reqLogin, async (req, res) => {
    const chargeUser = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for credits",
      source: req.body.id
    });

    req.user.credits += 15;
    const user = await req.user.save();
    res.send(user);
  });
};
