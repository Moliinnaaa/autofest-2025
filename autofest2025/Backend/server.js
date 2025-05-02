const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('/var/www/autofest2025'));

// Formulario de contacto
app.post('/contacto', (req, res) => {
    const { nombre, correo, mensaje } = req.body;
    const data = { nombre, correo, mensaje, timestamp: new Date() };
    fs.appendFileSync('contactos.json', JSON.stringify(data) + '\n');
    res.send('¡Mensaje enviado con éxito! Gracias por contactarnos.');
});

// Formulario de entradas
app.post('/entradas', (req, res) => {
    const { name, email, ticket_type, quantity } = req.body;
    const data = { name, email, ticket_type, quantity, timestamp: new Date() };
    fs.appendFileSync('entradas.json', JSON.stringify(data) + '\n');
    res.send('¡Compra simulada con éxito! Gracias por tu interés.');
});

// Formulario de participar
app.post('/participar', (req, res) => {
    const { name, email, vehicle, category } = req.body;
    const data = { name, email, vehicle, category, timestamp: new Date() };
    fs.appendFileSync('participantes.json', JSON.stringify(data) + '\n');
    res.send('¡Inscripción simulada con éxito! Nos pondremos en contacto contigo.');
});

app.listen(3000, () => {
    console.log('Servidor backend corriendo en puerto 3000');
});

