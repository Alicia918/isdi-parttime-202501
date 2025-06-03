import { registerUser } from '../logics.mjs'
import { createButton, createContainer, createForm, createTextContainer } from '../lib.mjs'
import navigate from '../navigate.mjs';
import header from '../components/header.mjs';



/***********************************************************/
/* PAGES 1 REGISTRAR crean las diferentes vistas de la app */
/***********************************************************/
const register = {
  
    mount: (body) => {
        console.info('register mounted')
        const registerContainer = createContainer(''); 
        registerContainer.id = 'register';

        header.mount(registerContainer, 'register')

        //var generRegContai =createContainer('');
        
        var regContai1 = createContainer('regContainer_1');
        var regContai2 = createContainer('regContainer_2');
        
        //generRegContai.style.border= 'solid 6px blue';
        // regContai1.style.border= 'solid 4px aqua';
        //regContai2.style.border = 'solid 2px yellow'

        var registerTitle = createTextContainer('p', 'INICIAR SESIÓN', '');
        registerTitle.className = 'regTitle';

        var regisContImg = document.createElement('img');//img 
        regisContImg.className = 'smallIcon';
        regisContImg.src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746';
        
        
        //div img de fondo opaca
        var backImg = document.createElement('div') //img 
        backImg.className = 'imgBackRegis';

        var objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true };
        var objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '**********', inputId: 'password', isRequired: true }
        var objectConfirmPassword = { label: 'Confirm password', inputType: 'password', inputPlaceholder: '**********', inputId: 'confirmation-password', isRequired: true }
        var registerForm = createForm([objectEmail, objectPassword, objectConfirmPassword], 'Registrate', registerUser) //usamos una función que nos permite registrar el usuario y cambiar de vista
        var registerForm = createForm([objectEmail, objectPassword, objectConfirmPassword], 'Registrate', registerUser) //usamos una función que nos permite registrar el usuario y cambiar de vista
        registerForm.className = 'form'
        
        var toLoginButton = createButton('Ir a Login', '', function () { navigate('register', 'login') })
        regisContImg.addEventListener('click', function () { navigate('register','landing') }); 

        toLoginButton.className = 'logButton'
    
        regContai1.appendChild(regisContImg) 
        regContai1.appendChild(backImg)
        regContai2.appendChild(registerTitle)
        regContai2.appendChild(registerForm)
        regContai2.appendChild(toLoginButton)

        registerContainer.append(regContai2, regContai1)   

        body.appendChild(registerContainer)

    },
    dismount: () => {
        console.info('register dismounted')
        const register = document.getElementById('register');
        register.remove()
    },
    update: (body) => {
        register.dismount();
        register.mount(body);
    }

}

export default register
