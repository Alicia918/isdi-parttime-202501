/*
    var img = document.createElement('img')

    img.src = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'

    button.appendChild(img)
*/

// Crear una función que, pasada la elección hecha por el jugador ejecuta
// una decisión hecha al azar por el CPU
// luego de estas dos decisiones, se comparan y se elige quien gana
// cuando se sabe quien ha ganado, se le avisa de ello al usuario
//que se renderize feedback de lo que ha elegido el usuario y lo que ha
//elegido al azar por parte del cpu

var choices = ['rock', 'paper', 'scissors'];
var choice = ' ';
var user = '';
var pc = ''; 
var life = 0;

//Estilos del body
var body = document.body;
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
   // body.style.border = 'solid 2px green';
    body.style.backgroundColor= '#FCFFF5'; 
   

//Creamos el titulo y le damos estilos
var gameTitle = document.createElement('h1');
    gameTitle.textContent = 'PIEDRA, PAPEL, TIJERAS';
    gameTitle.style.textAlign = 'center';
    gameTitle.style.color = 'orange';
    gameTitle.style.fontFamily = 'Russo One';
    gameTitle.style.marginBottom = '4rem';

//Añadimos el titulo al body
body.appendChild(gameTitle);

//contenedor general
var generalContainer = document.createElement('div');
    generalContainer.style.display = 'flex';
    generalContainer.style.justifyContent = 'space-around'; // Distribuye los elementos con espacio entre ellos
    //generalContainer.style.border = 'solid 2px yellow'; // Borde verde
    generalContainer.style.padding = '2rem'; // Espacio interno en el contenedor
    
body.appendChild(generalContainer);

//contenedor user
var userContainer = document.createElement('div');
    userContainer.style.display = 'flex';
    userContainer.style.flexDirection = 'column';
   // userContainer.style.border = 'solid 2px green';
    userContainer.style.padding = '3rem';
    userContainer.style.gap = '1rem';

    generalContainer.appendChild(userContainer);

//contenedor pc
var PCContainer = document.createElement('div');
    PCContainer.style.display = 'flex';
    PCContainer.style.flexDirection = 'column';
    PCContainer.style.gap = '1rem';
    //PCContainer.style.border = 'solid 2px blue';
    PCContainer.style.padding = '3rem';

    generalContainer.appendChild(PCContainer);

//contenedor boton user
var buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
   // buttonContainer.style.border = 'solid 2px pink';
    buttonContainer.style.padding = '5rem';

    userContainer.appendChild(buttonContainer);

//contenedor boton pc
var buttonContainerPc = document.createElement('div');
    buttonContainerPc.style.display = 'flex';
    buttonContainerPc.style.padding = '5rem';

    PCContainer.appendChild(buttonContainerPc);

//contenedor img user
var userImge = document.createElement('div');
    userImge.style.display = 'flex';
    userImge.style.padding = 'column';
    userImge.style.padding = '5rem';
    userContainer.appendChild(userImge);

//contenedor pc img
var pcImge = document.createElement('div');
    pcImge.style.display = 'flex';
    pcImge.style.padding = 'column';
    pcImge.style.padding = '5rem';

    PCContainer.appendChild(pcImge);



/*********************************/
/*  Función elige botón.   user  */
/*********************************/

function generateChoiceButton(_choice) {
    var button = document.createElement('button');
    button.textContent = _choice;

    //Añadir estilos al botón todo lo que hay dentro del botón
    button.style.width = '10rem';
    button.style.display = 'flex';
    button.style.justifyContent = 'space-around';
    button.style.marginLeft = '2rem';
    button.style.padding = '10px';
    button.style.backgroundColor= '#51C9C2';
    button.style.color = 'white';
    button.style.fontSize = '1.5rem';
    button.style.textAlign = 'center';
    button.style.borderRadius = '10px';
    button.style.height = '50px'; //Damos un altura determinada al botón//  
       
    //cursor: pointer;
    button.addEventListener('click', function () {
        console.log(_choice)
        if (life < 3) {
            getRandonWord();
            life ++
            win(button);
        } else {

            alert('Game Over')
        }
    })
    buttonContainer.appendChild(button)
       
}

for (var i = 0; i < choices.length; i++) {
    generateChoiceButton(choices[i])
}


/*********************************/
/* Función palabra aleatoria. PC */
/*********************************/

function getRandonWord() { 
   
    var indexRandon = Math.floor(Math.random() * choices.length);
    choice = choices[indexRandon];
    rendePC(choice);    
    return choices[indexRandon];   
        
}

/*********************************/
/*  Función render  PC boton     */
/*********************************/


function rendePC(choice) {
    
    var rendePCButton = document.createElement('button');
    rendePCButton.textContent = choice;
    rendePCButton.style.display = 'flex';
    rendePCButton.style.width = '10rem';
    rendePCButton.style.justifyContent = 'space-around';
    rendePCButton.style.marginLeft = '2rem';
    rendePCButton.style.padding = '10px';
    rendePCButton.style.backgroundColor= '#EEE9CF'; 
    rendePCButton.style.color = 'white';
    rendePCButton.style.fontSize = '1.5rem';     
    rendePCButton.style.textAlign = 'center';
    rendePCButton.style.borderRadius ='10px'
    rendePCButton.height = '50px'; //Damos un altura determinada al botón//  */
    
    buttonContainerPc.appendChild(rendePCButton);  



}


/*********************************/
/*  Funcion Victoria.            */
/*********************************/

function win(button) { 
    user = button.textContent
    pc = choice
//debugger
    if (life <= 3) {
             
        if (user === pc ) {
            
            alert ('Deuce');

        } else if ((user === 'rock' && pc === 'scissors' ) || (user === 'scissors' && pc === 'paper' ) || (user === 'paper' && pc === 'rock' )) {
            
            imageUser(user);
            alert('user win');
            
        } else {

            imagePC(pc);
            alert('PC win');
        }
        
    } 
}

/*********************************/
/*  Funcion img user.            */
/*********************************/

function imageUser(user) {

    var rockimgUser = document.createElement('img') //img 

    rockimgUser.style.display = 'flex';
    rockimgUser.style.height = '8rem';
   // rockimgUser.style.marginTop = '1rem';
    userImge.appendChild(rockimgUser);

    if (user === 'rock') {
        
        rockimgUser.src = 'https://cdn-icons-png.freepik.com/256/5773/5773204.png?ga=GA1.1.1811276553.1739812746&semt=ais_hybrid'   

    } else if (user === 'paper') {

        rockimgUser.src = 'https://cdn-icons-png.freepik.com/512/13321/13321142.png?ga=GA1.1.1811276553.1739812746'

    } else {

        rockimgUser.src = 'https://th.bing.com/th/id/OIP.dVlpnjKJKfVe1SkC3AJbLwHaHa?pid=ImgDet&w=159&h=159&c=7'
    }
 
}

/*********************************/
/*  Funcion img pc.              */
/*********************************/

function imagePC(pc) {
    var rockimgPc = document.createElement('img') //img 
    rockimgPc.style.display = 'flex';
    //rockimgUser.style.justifyContent = 'space-around';
    //rockimgPc.style.marginTop = '5rem';
    rockimgPc.style.height = '8rem';

    pcImge.appendChild(rockimgPc) 

    if (pc === 'rock') {              
       
        rockimgPc.src = 'https://cdn-icons-png.freepik.com/256/5773/5773204.png?ga=GA1.1.1811276553.1739812746&semt=ais_hybrid'
  
    } else if (pc === 'paper') {

        rockimgPc.src = 'https://cdn-icons-png.freepik.com/512/13321/13321142.png?ga=GA1.1.1811276553.1739812746'

    } else {

        rockimgPc.src = 'https://th.bing.com/th/id/OIP.dVlpnjKJKfVe1SkC3AJbLwHaHa?pid=ImgDet&w=159&h=159&c=7'

    }
}
