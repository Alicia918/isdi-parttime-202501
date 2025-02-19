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
life = 0;

//Estilos del body
var body = document.body;
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    //body.style.alignItems = 'center'
    //body.style.gap = '2rem';
    body.style.border = 'solid 2px green';


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
    generalContainer.style.border = 'solid 2px yellow'; // Borde verde
    generalContainer.style.padding = '2rem'; // Espacio interno en el contenedor
    
body.appendChild(generalContainer);

//contenedor boton
var buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.border = 'solid 2px red';
    buttonContainer.style.padding = '3rem';

    generalContainer.appendChild(buttonContainer);

//contenedor pc
var rendePCContainer = document.createElement('div');
    rendePCContainer.style.display = 'flex';
    rendePCContainer.style.border = 'solid 2px blue';
    rendePCContainer.style.padding = '3rem';


    generalContainer.appendChild(rendePCContainer);

/*
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
    button.style.backgroundColor= 'orange';
    button.style.color = 'white';
    button.style.fontSize = '1.5rem';
    button.style.textAlign = 'center';
    button.style.borderRadius = '10px';
    button.style.height = '50px'; //Damos un altura determinada al botón//  
       
    //cursor: pointer;
    button.addEventListener('click', function () {
        console.log(_choice)
        getRandonWord();
        win(button);
        //rockimgUser.src = '';
        // rockimgPC.src = '';
        life ++
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
/*  Función render  PC           */
/*********************************/


function rendePC(choice) {
    
    var rendePCTitle = document.createElement('button');
    rendePCTitle.textContent = choice;
    rendePCTitle.style.display = 'flex';
    rendePCTitle.style.justifyContent = 'space-around';
    rendePCTitle.style.width = '10rem';
    rendePCTitle.style.marginLeft = '2rem';
    rendePCTitle.style.fontSize = '1.5rem';     
    rendePCTitle.style.padding = '10px';
    rendePCTitle.style.backgroundColor= 'blue';
    rendePCTitle.style.fontSize = '1.5rem';
    rendePCTitle.style.textAlign = 'center';
    rendePCTitle.style.borderRadius = '10px';
    rendePCTitle.height = '50px'; //Damos un altura determinada al botón//  */
    
    rendePCContainer.appendChild(rendePCTitle);  
    
}


/*********************************/
/*  Funcion Victoria.            */
/*********************************/

function win(button) { 
    user = button.textContent
    pc = choice

    if (life < 3) {
             
        if (user === pc ) {
            
            alert ('Deuce');

        } else if ((user === 'rock' && pc === 'scissors' ) || (user === 'scissors' && pc === 'paper' ) || (user === 'paper' && pc === 'rock' )) {
            
            imageUser(user);
            alert('user win');
            
        } else {

            imagePC(pc);
            alert('PC win');
        }
        
    } else {

        alert('Game Over')
    }
}

/*********************************/
/*  Funcion img user.            */
/*********************************/

function imageUser(user) {

    var rockimgUser = document.createElement('img') //img 

    rendePCTitle.style.display = 'flex';
    //rendePCTitle.style.justifyContent = 'space-around';
    rockimgUser.style.height = '1rem';
    rockimgUser.style.marginTop = '1rem';
    generalContainer.appendChild(rockimgUser);

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
    rendePCContainer.appendChild(rockimgPc) 
    rockimgPc.style.height = '12rem'  
   // rockimgPc.style.marginTop = '15rem';

    if (pc === 'rock') {              
       
        rockimgPc.src = 'https://cdn-icons-png.freepik.com/256/5773/5773204.png?ga=GA1.1.1811276553.1739812746&semt=ais_hybrid'
  
    } else if (pc === 'paper') {

        rockimgPc.src = 'https://cdn-icons-png.freepik.com/512/13321/13321142.png?ga=GA1.1.1811276553.1739812746'

    } else {

        rockimgPc.src = 'https://th.bing.com/th/id/OIP.dVlpnjKJKfVe1SkC3AJbLwHaHa?pid=ImgDet&w=159&h=159&c=7'

    }
}
