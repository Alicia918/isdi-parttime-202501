import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import Form from '../components/Form.jsx';
import FormRegister from '../components/FormRegister.jsx';




function Landing() {

    const navigate = useNavigate() // Hook para la navegación
    const [showForm, setShowForm] = useState(false); // Estado correcto
    const [showRegisterForm, setShowRegisterForm] = useState(false); // Estado correcto
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
       const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        if (formData.password === '' || formData.confirmPassword === '') {
            alert('Por favor, completa ambos campos de contraseña');
            navigate('/'); // Redirige al login si están vacías
        return;
        }
        if (formData.password !== formData.confirmPassword)  {
            alert('Las contraseñas no coinciden');
           navigate('/'); // Redirige al login después del registro
        return;
        }
       
        console.log('Datos enviados:', formData);
        navigate('/home'); // Redirige al login después del registro
    };

    const handleLoginRedirect = () => {
        setShowForm(true); // Cambia el estado para mostrar el formulario
         setShowRegisterForm(false); 
    }; 
    
    const handleRegisterRedirect = () => {
        setShowRegisterForm(true);
         setShowForm(false);
  
    };


    return (

    <div className="generalLandingContainer">   
        <header className ="imgBack"></header>
        <div className="lanContainer_2">
            <img src="precision_icon.png"
                 className="icon" 
                 onClick={handleLoginRedirect}
            />
            <div className="titleLanding">
                <h1>CALIBRE ZERO</h1>  
            </div>  
            {showForm && (
                <div >
                    <Form
                        onSubmit={handleSubmit}
                        formData={formData}
                        handleChange={handleChange}
                        onRegisterClick={handleRegisterRedirect}
                    />
                </div>
            )}
            {showRegisterForm && (
                <div>
                    <FormRegister
                        onSubmit={handleSubmit}
                        formData={formData}
                        handleChange={handleChange}
                        onRegisterClick={handleRegisterRedirect}
                    />
                </div>
            )}
            
        </div>
    </div>
    
  )
}

export default Landing;
