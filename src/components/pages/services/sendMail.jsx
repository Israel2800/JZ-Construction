const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user:"test.gmail.com",
        pass: "test",
    },
});

function sendMail(formData) {
    const mailOptions = {
        from: "test@test.com",
        to: formData.email,
        subject: "New Quote Request",
        html:`
            <p>Name: ${formData.name}</p>
            <p>Phone: ${formData.phone}</p>
            <p>Email: ${formData.email}</p>
            <p>Service: ${formData.service}</p>
            <p>Comments: ${formData.comments}</p>
        `,
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if(error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });

}