
import Register from '../pages/Register';
import './Form.css'; // Importa el archivo CSS para estilos
import { useLocation } from 'react-router-dom';

const Form = ({ onSubmit, formData, handleChange, onRegisterClick }) => {
const location = useLocation(); // Obtiene la ubicación actual para determinar si es login o registro

  return (
 
        <form className="flex flex-col items-center gap-6  text-base p-8 rounded-lg bg-white/90 rounded-lg border-2 border-gray-300 
                        shadow-lg w-[300px] z-10 mt-8 text-gray-800 text-base " 
        onSubmit={onSubmit}
        >
        <div>
            <label className='w-full p-1 rounded box-border'
            style={{ fontFamily: 'Montserrat' }}
                htmlFor="email">Email</label>
            <input className='p-2 w-full rounded text-base bg-gray-400 cursor-pointer'
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
            <label lassName='w-full p-2 rounded box-border'
            style={{ fontFamily: 'Montserrat' }}
             htmlFor="password">Contraseña</label>
            <input className='p-2 w-full rounded text-base bg-gray-400 cursor-pointer'
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
            className='text-white cursor-pointer text-base rounded-sm w-6/12 p-2 mt-2 flex flex-row gap-6 justify-center items-center box-border h-10 ' 
            style={{ background: '#e98111', fontFamily: 'Montserrat' }}
            type="submit"
            > Logueate
        </button>   
        <button 
            className='text-white cursor-pointer text-base rounded-sm w-6/12 p-2 mt-2 flex flex-row gap-6 justify-center items-center box-border h-10' 
            style={{ background: '#e98111', 
                     fontFamily: 'Montserrat'
            }}
            type="button"
            onClick={onRegisterClick}
            > Registrate
        </button>    
        </form>
    );  
};

export default Form;
