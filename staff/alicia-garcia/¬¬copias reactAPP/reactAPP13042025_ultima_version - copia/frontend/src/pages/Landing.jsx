import React from 'react';
//import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
//import Register from './pages/Register';
//import Login from './pages/Login';
import './Landing.css';


function Landing() {

    const navigate = useNavigate() // Hook para la navegación
   
    const handleLoginRedirect = () => {
        navigate('/register');
    }; // Cambia la ruta según sea necesario
   
    return (

    <div className="generalLandingContainer">
           
        <header className ="imgBack"></header>

        <div className="lanContainer_2">
            <img className="icon" src="https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746" />
            <div className="titleLanding">
                <h1>YOGA TERAPIA</h1>
            </div>  
            <div>
                <button onClick={handleLoginRedirect} className='joinButton'>
                    COMENZAMOS
                </button>                  
            </div>
        </div>
        <div className="buttonHeader">  
            hola 
        </div>  
    </div>
    
  )
}

export default Landing;

/*   <Link to='/register'>Ir a Registro</Link> *

import './landing.css';
//const useState = React.useState //Nos traemos el hook useState de react
//import * as ReactRouter from 'react-router-dom'; // Importa todo el paquete
//const useNavigate = React.useNavigate; // Extrae useNavigate de ReactRouter

const Landing = () => {
   /*const [showPage, setShowPage] = useState(true);
    
    const handleNavClick = () => {
       setShowPage(!showPage);
       useNavigate('/LandingPage, /RegisterPage')
    }*

  return (
    <div className="generalLandingContainer">
        <header className ="imgBack"></header>

        <div className="lanContainer_2">
        <img className="icon" src="https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746" />
            <div className="titleLanding">
                <h>YOGA TERAPIA</h>
            </div>           
            <div>
                {showPage && <Btn
                    className={'joinButton'} 
                    onClick={handleNavClick}    
                    btnContent ={'COMENZAMOS'}
                    />                  
                }             
            </div>        
        </div>
    </div>
  )
}
export default Landing
*/