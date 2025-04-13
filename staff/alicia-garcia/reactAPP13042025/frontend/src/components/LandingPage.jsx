
const useState = React.useState //Nos traemos el hook useState de react
//import * as ReactRouter from 'react-router-dom'; // Importa todo el paquete
const useNavigate = React.useNavigate; // Extrae useNavigate de ReactRouter

const LandingPage = () => {
   const [showPage, setShowPage] = useState(true);
    
    const handleNavClick = () => {
       setShowPage(!showPage);
       useNavigate('/LandingPage, /RegisterPage')
    }

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
