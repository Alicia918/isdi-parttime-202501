import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './App.css';

function App() {
  return (
    <div className="generalLandingContainer">
        <header className ="imgBack"></header>

        <div className="lanContainer_2">
        <img className="icon" src="https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746" />
            <div className="titleLanding">
                <h>YOGA TERAPIA</h>
            </div>  
            <div>
                <button onClick={() => alert('¡Hola!')} className='joinButton'>COMENZAMOS</button>
            </div>          
            
        </div>
    </div>
  )
}

export default App;




/*

export default App;
/*<div>

    {showPage && <Btn
        className={'joinButton'} 
        onClick={handleNavClick}    
        btnContent ={'COMENZAMOS'}
        />                  
    }             
</div>  */