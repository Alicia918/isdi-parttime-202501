import React from 'react';
import './Form.css'; // Importa el archivo CSS para estilos
import { useState } from 'react'; // Importa useState desde react para manejar el estado
import { useNavigate, useLocation } from 'react-router-dom'; // Importa useNavigate y useLocation desde react-router-dom

const Form = ({ onSubmit, formData, handleChange }) => {
  const navigate = useNavigate();
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
      <div>
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
    
      <button 
        className='form_buttonLog' 
        type="submit"
     
         > {location.pathname === '/login' ? 'Logueate' : 'Registrate'}
      </button>      
    </form>
  );
};

export default Form;



/*

  <button 
      className='form_button' 
      type="button"
      onClick={() => {
        if (location.pathname === '/login') {
          navigate('/post');
          
        } else if (location.pathname === '/register') {
          navigate('/login');
          
        }
      }}
      > {location.pathname === '/login' ? 'Logueate' : 'Registrate'}</button> 

  
    
        {context === 'login' ? 'Ir a Registrarse' : 'Ir a Login'}
      </button>
import { useEffect } from 'react'
import React from 'react';
import './Form.css'

const Form = ({ inputsArray, onSubmitCallback, submitButtonText, onChangeCallback }) => { //inputsArray = [{label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email'}, {label: 'Password....}]

    const handleInputChange = (event) => {
        event.preventDefault()

        if (onChangeCallback) {
            let img;
            if (!event.target.files) return onChangeCallback(event.target.value, false)

            img = event.target.files[0];

            const image = new FileReader();
            image.onloadend = () => {
                const base64 = image.result;
                onChangeCallback(base64, true);
            };
            image.readAsDataURL(img)
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target; // --> elemento form html al que le hemos dado submit
        const formData = {}; // {email: esto, password: esto-otro}

        //iterar todos los inputs que he generado en el formulario, de esos inputs quiero acceder al valor que ha escrito el usuario
        for (let i = 0; i < inputsArray.length; i++) {
            const fieldName = inputsArray[i].inputId;
            let value;
            if (inputsArray[i].inputType === 'checkbox') {
                value = form[inputsArray[i].inputId].checked
            } else if (inputsArray[i].inputType === 'file') {
                value = form[inputsArray[i].inputId].files[0]
            } else {
                value = form[inputsArray[i].inputId].value
            }

            formData[fieldName] = value; //formData = {'email': 'patata@mail.com'}
        }

        try {
            onSubmitCallback(formData)
            form.reset()
        } catch (error) {
            console.error(error)
            if (error.name === 'FormatError' || error.name === 'RangeError' || error.name === 'TypeError') {
                alert('incorrect inputs, check your form data again')
            }
        }
    }

    return <form className="form" onSubmit={handleSubmit} >
        {
            inputsArray.map((inputElement, index) => {
                if (inputElement.inputType === 'checkbox') {
                    return <fieldset key={index}>
                        <input className="form__input-checkbox" type={inputElement.inputType} id={inputElement.inputId} required={inputElement.isRequired} value={inputElement.value} />
                        <label htmlFor={inputElement.inputId}>{inputElement.label}</label>
                    </fieldset>
                } else if (inputElement.inputType === 'text-area') {
                    return <div className="form__input" key={index}>
                        <label htmlFor={inputElement.inputId}>{inputElement.label}</label>
                        <textarea className="form__input-text" id={inputElement.inputId} required={inputElement.isRequired} placeholder={inputElement.inputPlaceholder} />
                    </div>
                } else if (inputElement.inputType === 'url' || inputElement.inputType === 'file') {
                    return <div className="form__input" key={index} >
                        <label htmlFor={inputElement.inputId}>{inputElement.label}</label>
                        <input onChange={(event) => handleInputChange(event)} className="form__input-text" id={inputElement.inputId} required={inputElement.isRequired} type={inputElement.inputType} placeholder={inputElement.inputPlaceholder} />
                    </div>
                } else {
                    return <div className="form__input" key={index} >
                        <label htmlFor={inputElement.inputId}>{inputElement.label}</label>
                        <input className="form__input-text" id={inputElement.inputId} required={inputElement.isRequired} type={inputElement.inputType} placeholder={inputElement.inputPlaceholder} />
                    </div>
                }
            })
        }
        <input className="form__submit-button" type="submit" value={submitButtonText} />
    </form>
}

export default Form

/*import React from 'react'
import { createForm } from '../components/Form'
import { registerUser } from '../logic/users'
import { useNavigate } from 'react-router-dom' // Importa useNavigate desde react-router-dom
import './Register.css'
import { useState } from 'react' // Importa useState desde react para manejar el estado

var objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true };
var objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '**********', inputId: 'password', isRequired: true }
var objectConfirmPassword = { label: 'Confirm password', inputType: 'password', inputPlaceholder: '**********', inputId: 'confirmation-password', isRequired: true }

var registerForm = createForm([objectEmail, objectPassword, objectConfirmPassword], 'Registrate', registerUser) //usamos una función que nos permite registrar el usuario y cambiar de vista
var registerForm = createForm([objectEmail, objectPassword, objectConfirmPassword], 'Registrate', registerUser) //usamos una función que nos permite registrar el usuario y cambiar de vista
registerForm.className = 'form'


const Form = ({ inputs, onsSubmitCallback, submitText, className }) => {
    const onSubmitForm = (event) => {
        event.preventDefault()
        const form = event.target
        const formData = {}
        inputs.forEach(input => {
            const inputName = input.id;
            const inputValue = form[input.id].value
            formData[inputName] = inputValue
        })

        onsSubmitCallback(formData)
    }

    return <form className={className} onSubmit={onSubmitForm}>
        {inputs.map((input, index) => {
            return <input className={input.className} key={index} id={input.id} type={input.type} placeholder={input.placeholder} />
        })}
        <input type="submit" value={submitText} />
    </form>
}
*/