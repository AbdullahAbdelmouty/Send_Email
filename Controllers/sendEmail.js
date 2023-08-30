const nodemailer = require("nodemailer");
const sendEmail = async(req,res)=>{
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'vito.emard73@ethereal.email',
            pass: 'n6gcCEy8EY4fPQZ21R'
        }
    });

    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    res.json(info)
}

module.exports =sendEmail