"use client"

import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import axios from 'axios';
import * as nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Парсинг JSON и URL-encoded данных
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Настройки для отправки почты
const transporter = nodemailer.createTransport(smtpTransport({
  service: 'SMTP',
  host: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
}));

// Ручка для отправки сообщения
app.post('/send-email', (req, res) => {
  const { email, name, message, captcha } = req.body;

  // Проверка капчи
  axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}`)
    .then(response => {
      if (response.data.success) {
        // Конфигурация письма
        const mailOptions = {
          from: email,
          to: process.env.MAIL_TO,
          subject: 'Новое сообщение с сайта',
          text: `От: ${name}\nEmail: ${email}\n\n${message}`
        };

        // Отправка письма
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Ошибка при отправке письма' });
          } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true, message: 'Сообщение успешно отправлено' });
          }
        });
      } else {
        res.status(400).json({ success: false, message: 'Ошибка проверки капчи' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ success: false, message: 'Ошибка проверки капчи' });
    });
});

// Слушаем порт
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
