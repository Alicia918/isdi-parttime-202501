const useState = React.useState //Nos traemos el hook useState de react
//import * as ReactRouter from 'react-router-dom'; // Importa todo el paquete
//const useNavigate = ReactRouterDOM; // Extrae useNavigate de ReactRouter
const { useNavigate } = ReactRouterDOM;
//const viewPag = React.useState

const LandingPage = () => {
    const navigate = useNavigate();
    const [showPage, setShowPage] = useState(true);
    //const [view, setShowPag] = viewPag('./Register')
    
    const handleNavClick = () => {
       setShowPage(!showPage);
       //useNavigate('/RegisterPage')
       navigate('/RegisterPage');
       //setShowPag(!view)
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
