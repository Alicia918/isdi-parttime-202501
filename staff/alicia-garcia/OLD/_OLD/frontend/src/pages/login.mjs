import { loginUser } from '../logics.mjs'
import { createButton, createContainer, createForm, createTextContainer } from '../lib.mjs'
import navigate from '../navigate.mjs'
import header from '../components/header.mjs'


/*******************************************************/
/* PAGES 2 LOGIN crean las diferentes vistas de la app */
/*******************************************************/
    
const login = {

    mount: (body) => {
        console.info('login mounted')
        const loginContainer = createContainer('regContainer_2')
        loginContainer.id = 'login'
        header.mount(loginContainer, 'login')
        

        const regisContImg = document.createElement('img');//img 
        regisContImg.className = 'smallIcon';
        regisContImg.src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746';
        regisContImg.addEventListener('click', function() { navigate ('login','landing') }); 


        const loginTitle = createTextContainer('p', 'LOGIN', '');
        loginTitle.className = 'regTitle';
        const objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true }
        const objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '*******', inputId: 'password', isRequired: true }
        
        const objctRemember = { label: 'Recordarme', inputType: 'checkbox', inputId: 'rememberMe', value:"lsRememberMe",isRequired: false}//('Remember me','checkbox');

        const loginForm = createForm([objectEmail, objectPassword, objctRemember], 'Login', loginUser)
        const toRegisterButton = createButton('Ir a Registrate', '', function () { navigate('login', 'register') })
        toRegisterButton.className = 'logButton'

       /* const toRegisterContainer = createContainer('login__register')
        toRegisterContainer.append(toRegisterText, toRegisterButton)*/


        
        loginContainer.append(regisContImg,loginTitle, loginForm, toRegisterButton)
        body.appendChild(loginContainer)

    },
    dismount: () => {
        console.info('login dismounted')
        const login = document.getElementById('login');
        login.remove()
    },
    update: (body) => {
        login.dismount();
        login.mount(body);
    }

    /*appendChildren(loginContainer,regisContImg, loginTitle, loginForm, toRegisterButton)
    return loginContainer*/
}

export default login
