const knex = require("../db/knex.js");
const nodemailer = require("nodemailer");

module.exports = {
  welcomeEmail: (user) => {
    // knex("usersTable")
    //   .where("email", req.body.email)
    //   .then(user => {
    //     if (user[0]) {
    const output = `
      <p>Welcome</p>
      <h3>${user.firstName}</h3>
       <hr>
      `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "email.is.not.real123@gmail.com",
        pass: "asdfghjkl123!" // generated ethereal password
      }
    });
    // setup email data with unicode symbols
    let mailOptions = {
      from: `${user.firstName} ` + " 👻 <email.is.not.real123@gmail.com>", // sender address
      to: `${user.email}`, // list of receivers
      subject: "Welcome", // Subject line
      html: output // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      return true
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    // } else {
    //   res.send("Email Doens't Exist.");
    // }
  }
};