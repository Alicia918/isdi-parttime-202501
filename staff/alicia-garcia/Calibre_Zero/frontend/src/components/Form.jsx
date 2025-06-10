
import Register from '../pages/Register';
import './Form.css'; // Importa el archivo CSS para estilos
import { useLocation } from 'react-router-dom';

const Form = ({ onSubmit, formData, handleChange }) => {
const location = useLocation(); // Obtiene la ubicación actual para determinar si es login o registro

  return (
 
        <form className="form" onSubmit={onSubmit}>
        <div>
            <label className='form_label' htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Introduce tu email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor="password">Contraseña</label>
            <input
            type="password"
            id="password"
            name="password"
            placeholder="Introduce tu contraseña"
            value={formData.password}
            onChange={handleChange}
            required
            />
        </div>
        
      
        <button 
            className='form_buttonLog' 
            type="submit"
            > Logueate
        </button>   
        <button 
            className='form_buttonLog' 
            type="submit"
            onClick={() => navigate('/register')}
            > Registrate
        </button>    
        </form>
    );  
};

export default Form;

/*  <div>
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            />
        </div> 
        
        {location.pathname === '/' ? 'Logueate' : 'Registrate'}
        
        
        */