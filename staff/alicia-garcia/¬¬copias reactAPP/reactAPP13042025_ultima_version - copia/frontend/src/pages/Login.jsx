// Login.jsx
import React, { useState } from 'react';
import styles from './login.module.css';
import Form from '../components/Form'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const navigate = useNavigate() // Hook para la navegación
    const handleLoginRedirect = () => {
        navigate('/register');
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

        if (formData.password === '' || formData.confirmPassword === '') {
            alert('Por favor, completa ambos campos de contraseña');
            //navigate('/login'); // Redirige al login si están vacías
        return;
        }
        if (formData.password !== formData.confirmPassword)  {
            alert('Las contraseñas no coinciden');
           // navigate('/login'); // Redirige al login después del registro
        return;
        }
       
        console.log('Datos enviados:', formData);
        navigate('/home'); // Redirige al login después del registro
    };
return (
    <div className= {styles.generalLoginContainer}>
        <div className={styles.regContainerLog}>
            <img className={styles.smallIconLog} src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746'
            alt='small Icon'
            onClick={() => navigate('/')}
            ></img>
            <img className={styles.imgBackRegisLog}alt="Background"/>
        </div>
        <div className={styles.regContainerLog2}>
            <div className = {styles.regTitleLog}>
                <p>Login</p>
            </div>
            <Form
                onSubmit={handleSubmit}
                formData={formData}
                handleChange={handleChange}
            />
            <button className={styles.logButtonLog} 
            onClick={() => navigate('/register')}
            >
                Ir a Registrarse
            </button>
        </div>
        
    </div>
    );
};

export default Login
/*
const Login = ({ setRefreshHeader }) => {
    const objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true }
    const objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '·········', inputId: 'password', isRequired: true }
    const objectRemember = { label: 'Remember me', inputType: 'checkbox', inputValue: 'remember', inputId: 'remember', isRequired: false }
    const navigate = useNavigate()

    const onLoginUser = (formData) => {
        try {
            logics.users.loginUser(formData)
            setRefreshHeader(Date.now())
            navigate('/')
        } catch (error) {
            alert('something went wrong, check your credentials')
            console.error(error)
        }
    }

    return <div className="main-container">
        <h1>Login</h1>
        <Form inputsArray={[objectEmail, objectPassword, objectRemember]} submitButtonText={'Login'} onSubmitCallback={onLoginUser} />
        <div className="login__register">
            <span className="login__register--text">Are you new here?</span>
            <span className="login__register--button">
                <Link to="/register">Registrateeeeee!</Link>
            </span>
        </div>
    </div>
}










*/
