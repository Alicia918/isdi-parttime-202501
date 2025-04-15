import './register.css';
/***********************************************************/
/* PAGES 1 REGISTRAR crean las diferentes vistas de la app */
/***********************************************************/

const Register = () => {
    return (
         <div className= "generalRegisterContainer">

              <div className="regContainer_1">
                   <img className="smallIcon" src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746'></img>
                   <img className="imgBackRegis"></img>

              </div>

              <div className="regContainer_2">
                   <div className = "regTitle">
                        <p>INICIAR SESIÓN</p>
                        <button className="logButton">Ir a Login</button>
                   </div>
              </div>

         </div>     
    )
}
export default Register;	
 
/*import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';  // Importa el componente LandingPage
import RegisterPage from './RegisterPage';  // Importa el componente Register
const RegisterPage = () => {
    
  return (

    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/RegisterPage" element={<RegisterPage />} /> {/src/components/RegisterPage.jsx}
    </Routes>
  </Router>

   )
}*/
