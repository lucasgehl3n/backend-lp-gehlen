import nodemailer from 'nodemailer';
export default class SendMailController {
  constructor() {
    this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });
  }

  async sendMail(req, res) {
    try {
      const { mail, subject, message, phone } = req.body;
      await this.transporter.sendMail({
        from: mail,
        to: process.env.EMAIL,
        subject: 'LANDING PAGE CONTACT: ' + subject,
        text: message + '\n\n' + 'FROM: ' + mail + '\n' + 'PHONE: ' + phone
      });
      res.status(200).send('Mail sent successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}