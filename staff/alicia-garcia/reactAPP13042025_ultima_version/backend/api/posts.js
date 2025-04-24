const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


// Ruta para manejar GET /
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});
// Ruta para manejar POST /api/posts
app.post('/api/posts.js', (req, res) => {
    const { titulo, contenido } = req.body;
    console.log('Datos recibidos:', { titulo, contenido });
    res.status(201).json({ message: 'Publicación creada con éxito' });
});
// Inicia el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});