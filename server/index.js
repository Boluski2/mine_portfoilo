import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use(bodyParser.json());


app.post('/send-email', async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ status: 'failed', response: 'Method not allowed' });
    }

    const { name, email, phone, subject, message } = req.body; // ✅ Include `phone`

    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({ status: 'failed', response: 'All fields are required' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ status: 'failed', response: 'Invalid email format.' });
    }

    try {
        const transporter = nodemailer.createTransport({
          host: process.env.MAIL_HOST,  // ✅ Ensure this is set in `.env`
          port: process.env.MAIL_PORT || 587,
          secure: process.env.MAIL_PORT == 465, // ✅ Secure only if using port 465
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.MAIL_USER,
          to: process.env.MAIL_USER,
          subject: `Portfoilo massage from ${name}: ${subject}`,
          html: `
          <div style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
            <h2 style="color: #4CAF50;">New Form Submission</h2>
            <p style="color: #555;">Someone just submitted a form on your Portfolio:</p>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
              <h3 style="color: #333;"><strong>Name:</strong> ${name}</h3>
              <h3 style="color: #333;"><strong>Email:</strong> ${email}</h3>
              <h3 style="color: #333;"><strong>Phone:</strong> ${phone}</h3>
              <h3 style="color: #333;"><strong>Subject:</strong> ${subject}</h3>
              <h3 style="color: #333;"><strong>Message:</strong> ${message}</h3>
            </div>
          </div>
        `
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ status: 'success', response: 'Message sent successfully' });

    } catch (error) { // ✅ Fix `catch` block
        return res.status(500).json({ status: 'failed', response: `Mailer Error: ${error.message}` });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
