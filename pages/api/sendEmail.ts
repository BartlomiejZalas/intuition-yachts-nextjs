import { NextApiRequest, NextApiResponse } from 'next';

const nodemailer = require('nodemailer');

const sendEmail = async (name: string, email: string, subject: string, message: string) => {

  const transporter = nodemailer.createTransport({
    host: 's71.linuxpl.com',
    port: 465,
    secure: true, 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  await transporter.sendMail({
    from: `Intuition Yachts Studio <${process.env.EMAIL_USER}>`, 
    replyTo: `${name} <${email}>`,
    to: 'bartekzalas@gmail.com', // TODO change it to marta@intuition-yachts.com
    subject: subject, 
    text: `${message} \n\n ${name} (${email})`,
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  if (
    req.method === 'POST' &&
    req.body.name &&
    req.body.email &&
    req.body.subject &&
    req.body.message
  ) {
    try {
      await sendEmail(name, email, subject, message);
      res.status(200).send('Message sent.');
    } catch (e) {
      console.error(e);
      res.status(500).send('Error while sending email: ' + e);
    }
  } else {
    res.status(400).end();
  }
};
