const express = require('express');
/*import { data } from './data/index.js';*/
const {data}  = require('./data/index.js');

const cors = require('cors');
const app = express();
const json = express.json();


app.use(cors());
app.use(json);
app.post('/serverBack', json, (req, res) => { //ruta para manejar el servidor
            const { cita, description } = req.body; // handle el manejador de la ruta
            console.log('Datos recibidos desde serverBack:', { cita, description });
            res.status(201).json({ 
            message: 'Publicación creada con éxito',
            cita,
            description,
            });
        });

// Conectar a MongoDB
data.connect()
    .then(() => {
        console.log('Conexión a MongoDB establecida');



         app.listen(5000, () => {
            console.log('Servidor corriendo en http://localhost:5000/serverBack');
            });
        })

        // Manejo de errores de conexió
            .catch((error) => {
            console.error('Error al conectar a MongoDB:', error);
        });


        /* Ruta para manejar GET 
        app.get('/', (req, res) => {
            const { cita, descripcion } = req.body;
            console.log('Datos recibidos:', { cita, descripcion });
   
        });*/

        /* Ruta para manejar SERVER /server
        const postsCollection = data.posts;
        return postsCollection.insertOne({ cita, descripcion })
        .then((result) => {
            res.status(201).json({
                message: 'Publicación creada con éxito en el servidor const postsCollection',
                cita,
                descripcion,
                id: result.insertedId,
            });*/
      

            /*
        });*/

   







