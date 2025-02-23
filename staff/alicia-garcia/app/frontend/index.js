var body = document.body;


/**********************/
/* Renderizar landing */
/**********************/
function renderLanding() {
   var landingContainer = createContainer('');
   // landingContainer.style.border = 'solid 2px blue';
    landingContainer.style.height = '100vh';
  

    var backImage = document.createElement('div') //img 
       backImage.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/04/07/01/02/yoga-1313110_1280.jpg")';
    backImage.style.backgroundSize = 'cover';
    backImage.style.backgroundPosition = 'center';
    backImage.style.position = 'relative';
    backImage.style.opacity = '0.3';  // Hacer la imagen de fondo más transparente
    backImage.style.height = '100vh';
    //backImage.style.border = 'solid 2px yellow';


    var iconoImg = document.createElement('img') //img 
    iconoImg.src='https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746';
    iconoImg.style.height = '15rem';
    iconoImg.style.position = 'absolute';
    iconoImg.style.top = '30%'; // Colocar el icono en el centro vertical de la imagen
    iconoImg.style.left = '50%'; // Colocar el icono en el centro horizontal de la imagen
    iconoImg.style.transform = 'translate(-50%, -50%)'; // Ajustar el icono para que esté perfectamente centrado
      

    var landingTitle = createTextContainer('h1', 'YOGA TERAPIA', 'title');
    landingTitle.style.color = '#224F60';
    landingTitle.style.fontSize = '1.5rem';
    landingTitle.style.fontFamily = 'Russo One';
    landingTitle.style.position = 'absolute';
    landingTitle.style.top = '50%'; // Colocar el icono en el centro vertical de la imagen
    landingTitle.style.left = '50%'; // Colocar el icono en el centro horizontal de la imagen
    landingTitle.style.transform = 'translate(-50%, -50%)'; // Ajustar el icono para que esté perfectamente centrado
  

    var joinButton = createButton('COMENZAMOS!', '', function () { navigateToRegister(landingContainer) })
    joinButton.style.margin = '7rem';
    joinButton.style.color = 'white';
    joinButton.style.background = '#a93f55';
    joinButton.style.height = '40px';
    joinButton.style.fontFamily = 'Russo One';
    joinButton.style.fontSize = '1rem';
    joinButton.style.position = 'absolute';
    joinButton.style.top = '50%'; // Colocar el icono en el centro vertical de la imagen
    joinButton.style.left = '43%'; // Colocar el icono en el centro horizontal de la imagen
    joinButton.style.transform = 'translate(-50%, -50%)'; // Ajustar el icono para que esté perfectamente centrado


    landingContainer.appendChild(backImage);
    landingContainer.appendChild(iconoImg);
    landingContainer.appendChild(landingTitle);
    landingContainer.appendChild(joinButton);
    
    body.appendChild(landingContainer);
}

/*******************************************************/
/* Crear un contenedor (un div con estilos definidos)  */
/*******************************************************/
function createContainer(style) {
    var container = document.createElement('div');
    container.className = style;
    return container
}


/*********************************************/
/* Crear un elemento html que contiene texto */
/*********************************************/
function createTextContainer(tag, text, style) {
    var element = document.createElement(tag);
    element.textContent = text;
    element.className = style;
    return element
}

/******************************************************************/
/* Función para añadir multiples hijos a el elemento padre que    */
/* es el primero que pasamos hecha por nosotros para ver más fors */
/******************************************************************/
function appendChildren() {
    var parent = arguments[0]
    for (var i = 1; i < arguments.length; i++) {
        parent.appendChild(arguments[i])    //TODO --> investigar como calcular el rendimiento
    }
    return parent
}


/******************************************************************/
/* Crear un botón y le pasa en el parametro "callback" que es     */
/* la función que se ejecuta al hacer click                       */
/******************************************************************/
function createButton(text, style, callback) {
    var button = document.createElement('button');
    button.className = style;
    button.textContent = text;
    button.addEventListener('click', callback) //Se activa la función que hemos pasado como parametro al hacer click
    return button
}


/******************************************************************/
/* Renderiza la vista del register y limpia la vista anterior     */
/******************************************************************/
function navigateToRegister(previousView) {
    var registerContainer = createContainer('');
    
    registerContainer.style.background = '#f3f7f0';
   // registerContainer.style.border = 'solid 2px yellow';
    registerContainer.style.height = '100vh';

    var regisContImg = document.createElement('img') //img 
    regisContImg.style.display = 'flex';
    regisContImg.style.justifyContent = 'flex-start';
    regisContImg.style.alignItems = 'flex-start'; 
    //regisContImg.style.margin = '4rem'
    regisContImg.src='https://cdn-icons-png.freepik.com/512/11818/11818739.png?ga=GA1.1.1811276553.1739812746';
    regisContImg.style.height = '5rem';
    //regisContImg.style.border = 'solid 2px green';
    regisContImg.style.marginBottom = '15rem';
    //regisContImg.style.position = 'absoluta'; 
    //regisContImg.style.top = '3rem'; // Distancia desde la parte superior
    //regisContImg.style.left = '3rem'; // Distancia desde la izquierda
 
   

    var registerTitle = createTextContainer('h1', 'Registrar', '');
    //registerTitle.style.border = 'solid 2px blue';
    registerTitle.style.display = 'flex'; 
    registerTitle.style.flexDirection = 'column';  // Para apilar el icono y el título verticalmente
    registerTitle.style.alignItems = 'center'; // Centrar los elementos horizontalmente
    registerTitle.style.justifyContent = 'center'; 

    var registerButton = createButton('Registrar', '', function () { console.log('click') })
    registerButton.style.display = 'flex'; 
    registerButton.style.flexDirection = 'column';  // Para apilar el icono y el título verticalmente
    registerButton.style.alignItems = 'center'; // Centrar los elementos horizontalmente
    registerButton.style.justifyContent = 'center'; 
    
    var toLoginButton = createButton('Ir a login', '', function () { navigateToLogin(registerView) })
    toLoginButton.style.display = 'flex'; 
    toLoginButton.style.flexDirection = 'column';  // Para apilar el icono y el título verticalmente
    toLoginButton.style.alignItems = 'center'; // Centrar los elementos horizontalmente
    toLoginButton.style.justifyContent = 'center'; 
    var registerView = appendChildren(registerContainer, regisContImg,  registerTitle, registerButton, toLoginButton, );


    body.replaceChild(registerView, previousView)
}

/***********************************************************/
/* Renderiza la vista del login y limpia la vista anterior */
/***********************************************************/
function navigateToLogin(previousView) {
    var loginContainer = createContainer('');
    var loginTitle = createTextContainer('h1', 'Login', '');
    var loginButton = createButton('Login', '', function () { console.log('click') })
    var toRegisterButton = createButton('Go to register', '', function () { navigateToRegister(loginView) })

    var loginView = appendChildren(loginContainer, loginTitle, loginButton, toRegisterButton)
    body.replaceChild(loginView, previousView)
}


renderLanding()