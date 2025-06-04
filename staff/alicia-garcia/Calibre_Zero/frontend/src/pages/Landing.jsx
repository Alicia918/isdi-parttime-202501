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
           
            <img src="precision_icon.png" className="icon"/>
            <div className="titleLanding">
                <h1>CALIBRE ZERO</h1>
            </div>  
            
            <div>
                <button onClick={handleLoginRedirect} className='joinButton'>
                    
                </button>                  
            </div>
        </div>
  
    </div>
    
  )
}

export default Landing;
