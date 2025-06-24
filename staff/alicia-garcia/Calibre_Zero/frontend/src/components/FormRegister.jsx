import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Importa el archivo CSS para estilos
import { useLocation } from 'react-router-dom';

const FormRegister = ({setShowRegisterForm, setShowForm}) => {
    const location = useLocation(); // Obtiene la ubicación actual para determinar si es login o registro

    const navigate = useNavigate(); // Hook para la navegación
    const handleLoginRedirect = () => {
        navigate('/login');
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
        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
        return;
    }
    console.log('Datos enviados:', formData); //añadir promesas hacer llambada al backend a la parte de registro
    setShowRegisterForm(false); 
    setShowForm(true); 
  };
    return (
 
        <form className="flex flex-col items-center gap-6  text-base p-8 rounded-lg bg-white/90 rounded-lg border-2 border-gray-300 
                        shadow-lg w-[300px] z-10 mt-8 text-gray-800 text-base" 
        
        onSubmit={handleSubmit}>
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
            <label className='w-full rounded box-border' 
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
         <div>
            <label className='w-full rounded box-border' 
             style={{ fontFamily: 'Montserrat' }}
             htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input className='p-2 w-full rounded text-base bg-gray-400 cursor-pointer'
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            />
        </div> 
      
        <button 
            className='bg-orange-600 text-white cursor-pointer text-base rounded-sm w-6/12 p-2 mt-2 flex flex-row gap-6 justify-center items-center box-border h-10' 
            style={{ background: '#e98111', fontFamily: 'Montserrat' }}
            type="submit"
            > Registrate
        </button>    
        </form>
    );  
};

export default FormRegister;
