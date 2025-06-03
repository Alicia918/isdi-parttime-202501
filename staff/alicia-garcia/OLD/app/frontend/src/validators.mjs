/*validar 
titulo del post que sea un stream y longitud max
 descrip strig mx length
img:url str,emieza por https://,.png .jpg, 
email str, formato especifico ---@----.---
contraseña contraseña valide la longitud, un str, length concreto, que contenga un num, simbolo
user que se a string, lenght
*/
import { FormatError } from "./errors.mjs"

const validator = {
    email: (email) => {
        if (typeof email !== 'string') {
            throw new TypeError('Email no es unca cadena de texto')
        }
        if (email.length === 0) {
            throw new RangeError('Email vacío')
        }
        const emailRegex = /^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$/  //formato mail ---@---.--
        if (emailRegex.test(email) === false) {
            throw new FormatError('Email formato no valido')
        }
    },
    password: (password) => {
        if (typeof password !== 'string') {
            throw new TypeError('Email no es una cadena de texto')
        }
        if (password.length === 0) {
            throw new RangeError('Contraseña vacía')
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&!@=*^ñ?¿¡/#ªº¬])[A-Za-z\d$&!@=*^ñ?¿¡/#ªº¬]{8,}$/ //minimo una mayuscula, minuscula, numero, caracter especial y 8 de length
        if (!passwordRegex.test(password)) {
            throw new FormatError('Contraseña no valida')
        }
    },
    username: (username) => {
        if (typeof username !== 'string') {
            throw new TypeError('Nombre de usuario no es una cadena de texto')
        }
        if (username.length === 0 || username.length > 20) {
            throw new RangeError('Nombre de usuario es un número, carácter no valido')
        }
      
    },
    id: (id) => {
        if (typeof id !== 'number') {
            throw new TypeError('ID no es un número')
        }
    },
    text: (text, maxLength, minLength, explain) => {
        if (typeof text !== 'string') {
            throw new TypeError(`${explain} no es un texto`)
        }
        if (text.length > maxLength || text.length < minLength) {
            throw new RangeError(`${explain} numeros de carácteres no validos`)
        }
    },
    imgUrl: (imgUrl) => {
        if (typeof imgUrl !== 'string') {
            throw new TypeError('Imagen URL no es una cadena de texto')
        }
        const imgRegex = /^(https?:\/\/).*\.(png|jpg|jpeg)$/
        if (!imgRegex.test(imgUrl)) {
            throw new FormatError('Imagen URL formato no valido')
        }

    }
}

export default validator