
const nodemailer = require("nodemailer");

module.exports = {
    welcomeEmail: (user)=> {
        const userName = `${user.firstName[0].toUpperCase()}${user.firstName.slice(1)} ${user.lastName[0].toUpperCase()}${user.lastName.slice(1)}`
        const output = `
        <p>${userName},</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan sit amet nulla facilisi morbi tempus iaculis. Leo duis ut diam quam nulla porttitor massa id neque. Montes nascetur ridiculus mus mauris vitae ultricies. Et netus et malesuada fames ac turpis egestas. Dui accumsan sit amet nulla facilisi. At varius vel pharetra vel turpis nunc. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Massa massa ultricies mi quis hendrerit dolor magna eget. Malesuada nunc vel risus commodo. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Sociis natoque penatibus et magnis dis parturient montes nascetur. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Ultricies lacus sed turpis tincidunt id aliquet. Sit amet nisl purus in mollis nunc sed id semper. Eu scelerisque felis imperdiet proin fermentum leo. Morbi tristique senectus et netus et malesuada fames. Orci porta non pulvinar neque laoreet suspendisse interdum.</p>
        <p>Thank you,<br>Zuri's Circle</p>
        <p>(602) 555-8715<br>connect@zuriscircle.com</p>
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
    
    }
}