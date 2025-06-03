const express = require('express');
/*import { data } from './data/index.js';*/
const { data } = require('./data/index.js');

const cors = require('cors');
const app = express();
const json = express.json();


app.use(cors());

// Conectar a MongoDB
data.connect()
    .then(() => {
        console.log('Conexión a MongoDB establecida');

        // Ruta para manejar GET /
        app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
        });
            // Ruta para manejar SERVER /server
            app.post('/serverBack', json, (req, res) => { //ruta para manejar el servidor
            const { titulo, description } = req.body; // handle el manejador de la ruta
            console.log('Datos recibidos desde serverBack:', { titulo, description });
            res.status(201).json({ 
            message: 'Publicación creada con éxito de ServerBack',
            titulo,
            description,
        });
        });
        // Inicia el servidor
        app.listen(5000, () => {
            console.log('Servidor corriendo en http://localhost:5000/serverBack');
        });
    })
    // Manejo de errores de conexió
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });







