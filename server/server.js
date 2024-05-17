// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name: subject, email, message } = req.body;

  // Configuração do transportador
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'luis.oliveirabr1@gmail.com',
      pass: 'L@gdimais1'
    }
  });

  const mailOptions = {
    from: email,
    to: 'luis.oliveirabr1@gmail.com',
    subject: `Contato de ${subject}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email enviado: ' + info.response);
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
