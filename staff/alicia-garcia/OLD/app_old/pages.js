var body = document.body;
var currentView;


/**********************/
/* Renderizar landing */
/**********************/
//debugger
function renderLanding () {

    var generalLandingContainer =createContainer('');//contendor landing 

    var landingContainer = createContainer('lanContainer_1');
       
    var landingContainer2 = createContainer('lanContainer_2');
   
    //div img de fondo opaca
    var backImage = document.createElement('div') //img 
        backImage.className = 'imgBack';
    
    //img icono principal
    var iconoImg = document.createElement('img') //img 
       iconoImg.className = 'icon';
       iconoImg.src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746';

    // titulo principal
    var landingTitle = createTextContainer('h1', 'YOGA TERAPIA', 'titleLanding');
        
    //botón de inicio app llama vista siguiente
    var joinButton = createButton('COMENZAMOS!', 'joinButton', function () { navigateToRegister(generalLandingContainer) })
   

    
    landingContainer.appendChild(iconoImg);
    landingContainer2.appendChild(landingTitle);
    landingContainer2.appendChild(joinButton);
    generalLandingContainer.append(backImage,landingContainer,landingContainer2)
    //currentView = generalLandingContainer;
    body.appendChild(generalLandingContainer);
   // return generalLandingContainer;
    
}

function renderHomePage() {
    var homePage = createHomePage();
    body.appendChild(homePage)
}



function navigateToLanding(previousView) {
    previousView.remove()
    var generalLandingContainer = renderLanding();

    currentView = generalLandingContainer

    //body.replaceChild(generalLandingContainer, previousView)
}   

/***********************************************************/
/* PAGES 1 REGISTRAR crean las diferentes vistas de la app */
/***********************************************************
function createRegisterPage() {
  
    var generRegContai =createContainer('');
    
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
    
    var toLoginButton = createButton('Ir a Login', '', function () { navigateToLogin(generRegContai) })
    regisContImg.addEventListener('click', function() { navigateToLanding (generRegContai) }); 

    toLoginButton.className = 'logButton'
 
    regContai1.appendChild(regisContImg) 
    regContai1.appendChild(backImg)
    regContai2.appendChild(registerTitle)
    regContai2.appendChild(registerForm)
    regContai2.appendChild(toLoginButton)

    generRegContai.append(regContai2, regContai1)

    body.appendChild(generRegContai)

    return generRegContai

}

/*NAVIGATES: cambian de una vista a otra*

/*Crea la nueva vista del register y limpia la vista anterior
function navigateToRegister(previousView) {
    var registerView = createRegisterPage()
    currentView = registerView

    body.replaceChild(registerView, previousView)
}

*/
/****************************************************/
/* PAGES HOME crean las diferentes vistas de la app */
/****************************************************/
function createHomePage() {
    var homeContainer = createContainer('')
    var loggedUserId;
    if (localStorage.id) {
        loggedUserId = JSON.parse(localStorage.getItem('id')); //comprobar si se ha guardado el id de un usuario loggeado
    } else {
        loggedUserId = JSON.parse(sessionStorage.getItem('id')); //comprobar si se ha guardado el id de un usuario loggeado
    }
    
    var userLogged = data.findUserById(loggedUserId)

    if (!userLogged) { //en caso de que no haya un id de usuario loggeado, en lugar de crear la vista de home, creamos la de register
        alert('inicia sesión o create una cuenta primero')
        return createRegisterPage();
    }

    var loggedUserUsername = userLogged.username //nos traemos el nombre de usuario para dar un mensaje de bienvenida personalizado
    var welcomeText = createTextContainer('h1', `Welcome, ${loggedUserUsername}`, '')

    var logoutButton = createButton('Logout', '', function () {
        if (sessionStorage.id) {
            sessionStorage.removeItem('id')
        }
        if (localStorage.id) {
            localStorage.removeItem('id')
        }
        
        navigateToLogin(homeContainer)
     })

//***llamar aquí la nueva función de los post */


    appendChildren(homeContainer, welcomeText, logoutButton);
    return homeContainer
}

/*NAVIGATES: cambian de una vista a otra*/
/*Crea la vista de home y limpia la vista anterior */
function navigateToHome(previousView) {
    var homeView = createHomePage() //en caso de que no haya usuario loggeado, esta función devuelve createRegisterPage()
    currentView = homeView

    body.replaceChild(homeView, previousView)
}

/*******************************************************/
/* PAGES 2 LOGIN crean las diferentes vistas de la app */
/*******************************************************
function createLoginPage() {
    var loginContainer = createContainer('regContainer_2')
    
    var regisContImg = document.createElement('img');//img 
    regisContImg.className = 'smallIcon';
    regisContImg.src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746';
    regisContImg.addEventListener('click', function() { navigateToLanding (loginContainer) }); 


    var loginTitle = createTextContainer('h1', 'Login', '');
    var objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true }
    var objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '*******', inputId: 'password', isRequired: true }
    
    var objctRemember = { label: 'Recordarme', inputType: 'checkbox', inputId: 'rememberMe', value:"lsRememberMe",isRequired: false}//('Remember me','checkbox');

    var loginForm = createForm([objectEmail, objectPassword, objctRemember], 'Login', loginUser)
    var toRegisterButton = createButton('Ir a Registrate', '', function () { navigateToRegister(loginContainer) })
    
    appendChildren(loginContainer,regisContImg, loginTitle, loginForm, toRegisterButton)
    return loginContainer
}


/*NAVIGATES: cambian de una vista a otra*/

/*Renderiza la vista del login y limpia la vista anterior*
function navigateToLogin(previousView) {
    var loginContainer = createLoginPage();

    currentView = loginContainer

    body.replaceChild(loginContainer, previousView)
}
*/
