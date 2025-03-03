var body = document.body;
var currentView;


/**********************/
/* Renderizar landing */
/**********************/
//debugger
function renderLanding () {

    var generalLandingContainer =createContainer('');
    //contendor landing 
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
    
}

function renderHomePage() {
    var homePage = createHomePage();
    body.appendChild(homePage)
}


/*PAGES REGISTRAR crean las diferentes vistas de la app*/

function createRegisterPage() {
    var registerContainer = createContainer('regContainer_2');
    var registerTitle = createTextContainer('h1', 'Register', '');
    var objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true };
    var objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '*******', inputId: 'password', isRequired: true }
    var objectConfirmPassword = { label: 'Confirm password', inputType: 'password', inputPlaceholder: '*******', inputId: 'confirmation-password', isRequired: true }
  
    var regisContImg = document.createElement('img');//img 
    regisContImg.className = 'smallIcon';
    regisContImg.src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746';
    
    var registerForm = createForm([objectEmail, objectPassword, objectConfirmPassword], 'Registrate', registerUser) //usamos una función que nos permite registrar el usuario y cambiar de vista
    var toLoginButton = createButton('Ir a Login', '', function () { navigateToLogin(view) })
    var view = appendChildren(registerContainer,registerTitle,regisContImg, registerForm, toLoginButton)

    return view

}

/*NAVIGATES: cambian de una vista a otra*/

/*Crea la nueva vista del register y limpia la vista anterior**/
function navigateToRegister(previousView) {
    var registerView = createRegisterPage()
    currentView = registerView

    body.replaceChild(registerView, previousView)
}



/*PAGES HOME crean las diferentes vistas de la app*/
function createHomePage() {
    var homeContainer = createContainer('')
    var loggedUserId = JSON.parse(sessionStorage.getItem('id')); //comprobar si se ha guardado el id de un usuario loggeado

    var userLogged = data.findUserById(loggedUserId)

    if (!userLogged) { //en caso de que no haya un id de usuario loggeado, en lugar de crear la vista de home, creamos la de register
        alert('inicia sesión o create una cuenta primero')
        return createRegisterPage();
    }

    var loggedUserUsername = userLogged.username //nos traemos el nombre de usuario para dar un mensaje de bienvenida personalizado
    var welcomeText = createTextContainer('h1', `Welcome, ${loggedUserUsername}`, '')

    var logoutButton = createButton('Logout', '', function () { sessionStorage.removeItem('id'); navigateToLogin(homeContainer) })


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


/*PAGES LOGIN crean las diferentes vistas de la app*/
function createLoginPage() {
    var loginContainer = createContainer('loginForm')
    var loginTitle = createTextContainer('h1', 'Login', '');
    var objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true }
    var objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '*******', inputId: 'password', isRequired: true }
    var loginForm = createForm([objectEmail, objectPassword], 'Login', loginUser)
    var toRegisterButton = createButton('Ir a Registrate', '', function () { navigateToRegister(loginContainer) })
    appendChildren(loginContainer, loginTitle, loginForm, toRegisterButton)
    return loginContainer
}


/*NAVIGATES: cambian de una vista a otra*/

/*Renderiza la vista del login y limpia la vista anterior*/
function navigateToLogin(previousView) {
    var loginContainer = createLoginPage();

    currentView = loginContainer

    body.replaceChild(loginContainer, previousView)
}

//renderLanding()














/******************************************************************/
/* Renderiza la vista del register y limpia la vista anterior     */
/******************************************************************/
/*function navigateToRegister(previousView) {
   // var regisContainer = createContainer('regContainer_2');

    var regisContImg = document.createElement('img');//img 
        regisContImg.className = 'smallIcon';
        regisContImg.src = 'https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746';
    
        var registerView = createRegisterPage();
        currentView = registerView
    /*var registerTitle = createTextContainer('h1', 'Registrarse', '');
        registerTitle.className = 'regTitle';
        

    /*var registerButton = createButton('Registrar', '', function () { console.log('click') })
        registerButton.className = 'regButton';
      
    var toLoginButton = createButton('Ir a login', '', function () { navigateToLogin(registerView) })
    /*    toLoginButton.style.display = 'flex'; 
        toLoginButton.style.flexDirection = 'column';  // Para apilar el icono y el título verticalmente
        toLoginButton.style.alignItems = 'center'; // Centrar los elementos horizontalmente
        toLoginButton.style.justifyContent = 'center'; 

    var regisView = appendChildren(regisContainer, regisContImg, registerView);// registerTitle, registerButton, toLoginButton, );


    body.replaceChild(regisView, previousView)
}*/

/***********************************************************/
/* Renderiza la vista del login y limpia la vista anterior */
/***********************************************************/
/*function navigateToLogin(previousView) {
    var loginContainer = createContainer('loginForm');
    var loginTitle = createTextContainer('h1', 'Login', '');  
    var objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true }
    var objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '*******', inputId: 'password', isRequired: true }
    var loginForm = createForm([objectEmail, objectPassword], 'Login', loginUser)

    //var loginButton = createButton('Login', '', function () { console.log('click') })
    var toRegisterButton = createButton('Go to register', '', function () { navigateToRegister(loginContainer) })

    loginContainer.appendChild(loginContainer, loginTitle, loginForm, toRegisterButton)
    
    body.replaceChild(loginView, previousView)
   
    return loginContainer


    var loginView = appendChildren(loginContainer, loginTitle, loginButton, toRegisterButton)

}*/

