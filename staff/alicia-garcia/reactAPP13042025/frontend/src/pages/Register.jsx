// Este componente es una página de registro que incluye un botón para redirigir a la página de inicio de sesión.
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import styles from './Register.module.css';


const Register = () => {
     const navigate = useNavigate() // Hook para la navegación
     const handleLoginRedirect = () => {
          navigate('/login');
     }; // Cambia la ruta según sea necesario

     return (
          <div className= {styles.generalRegisterContainer}>

              <div className={styles.regContainer_1}>
                   <img className={styles.smallIcon} src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746'
                   alt='small Icon'
                   ></img>
                   <img className={styles.imgBackRegis}alt="Background"/>
              </div>

              <div className={styles.regContainer_2}>
                   <div className = {styles.regTitle}>
                        <p>INICIAR SESIÓN</p>
                        <button className={styles.logButton} onClick={handleLoginRedirect}>
                         Ir a Login
                        </button>
                   </div>
              </div>
          </div>     
    )
}
export default Register;	
 
