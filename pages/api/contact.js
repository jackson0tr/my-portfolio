import nodemailer from "nodemailer";

export default async function ContactAPI(req,res){
    const {name,email,message} = req.body;

    const user = process.env.USER; 

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    try{

         await transporter.sendMail({
            from: user,
            to: 'dev.mahmoudmohamed@gmail.com',
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `
        });

        console.log("Message sent");

        return res.status(200).json({message: "success"});
    }catch(error){
        res.status(500).json({
            message: "Could not send the email. Your message was not sent.",
            error
        })
    }
}