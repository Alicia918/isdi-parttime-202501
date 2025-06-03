const express = require('express');

const cors = require('cors');
const app = express();
const json = express.json();

app.use(cors());



// Ruta para manejar GET /
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});
// Ruta para manejar SERVER /api/server

app.post('/api/server', json, (req, res) => { //ruta para manejar el servidor
    const { titulo, contenido } = req.body; // handle el manejador de la ruta
    console.log('Datos recibidos:', { titulo, contenido });
    res.status(201).json({ 
        message: 'Publicación creada con éxito',
        titulo,
        contenido,
    });
});
// Inicia el servidor
app.listen(4000, () => {
    console.log('Servidor corriendo en http://localhost:4000');
});