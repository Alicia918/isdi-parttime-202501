// Aquí puedes enviar los datos a un servidor o realizar otra acción
    // Ejemplo de envío a un servidor:
function CallServer(formData, callback) {   
    fetch('http://localhost:5000/serverBack', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Publicación exitosa del CallServer frontend :', data);
            callback(null, data); // Llama al callback con los datos
           // setFormData({ titulo: '', contenido: '' });
        })
        .catch((error) => {
            console.error('Error al publicar frontend:', error);
            callback(error); // Llama al callback con el error
        });
}
export default CallServer;

  
    