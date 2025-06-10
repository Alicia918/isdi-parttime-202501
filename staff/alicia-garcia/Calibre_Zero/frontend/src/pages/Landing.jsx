import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import Form from '../components/Form.jsx';




function Landing() {

    const navigate = useNavigate() // Hook para la navegación
    const [showForm, setShowForm] = useState(false); // Estado correcto
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
       const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleLoginRedirect = () => {
        setShowForm(true); // Cambia el estado para mostrar el formulario
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
                        />
                    </div>
                )}
        </div>
    </div>
    
  )
}

export default Landing;
