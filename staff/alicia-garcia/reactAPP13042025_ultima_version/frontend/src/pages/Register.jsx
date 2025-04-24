// Este componente es una página de registro que incluye un botón para redirigir a la página de inicio de sesión.
import React, { useState } from 'react';
import styles from './Register.module.css';
import Form from '../components/Form'; 
import { useNavigate } from 'react-router-dom';



const Register = () => {
    
    const navigate = useNavigate() // Hook para la navegación
    const handleLoginRedirect = () => {
        navigate('/login');
     }; // Cambia la ruta según sea necesario

    // Estado para manejar los datos del formulario
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Manejar cambios en los inputs
    const handleChange = (e) => {
    const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            navigate('/register'); // Redirige al login después del registro
        return;
    }
    console.log('Datos enviados:', formData);
    navigate('/login'); // Redirige al login después del registro
  };

    return (
        <div className= {styles.generalRegisterContainer}>

            <div className={styles.regContainer_1}>
                <img className={styles.smallIcon} src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746'
                alt='small Icon'
                onClick={() => navigate('/')}
                ></img>
                <img className={styles.imgBackRegis}alt="Background"/>
            </div>

            <div className={styles.regContainer_2}>
                <div className = {styles.regTitle}>
                    <p>INICIAR SESIÓN</p>
                </div>
                <Form
                    onSubmit={handleSubmit}
                    formData={formData}
                    handleChange={handleChange}
                />
                <button className={styles.logButton} 
                onClick={() => navigate('/login')}
                >
                    ¿Tienes cuenta? Ir a Login
                </button>
            </div>
            <div className={styles.buttonSession}>
                <button onClick={() => alert('Hola!')}></button>
            </div>
        </div>          
    );
};
export default Register;	
 
/*const Register = ({ setRefreshHeader }) => {
    const objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true };
    const objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '·········', inputId: 'password', isRequired: true }
    const objectConfirmPassword = { label: 'Confirm password', inputType: 'password', inputPlaceholder: '·········', inputId: 'confirmation-password', isRequired: true }
    const navigate = useNavigate()

    const onRegisterUser = (formData) => {
        try {
            logics.users.registerUser(formData)
            setRefreshHeader(Date.now())
            navigate('/')
        } catch (error) {
            alert('check your form data, something went wrong')
            console.error(error)
        }

    } */