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
//body.style.display = 'flex';
var body = document.body;
body.style.flexDirection = 'column';
body.style.alignItems = 'center'
body.style.gap = '2rem';


//Creamos el titulo y le damos estilos
var gameTitle = document.createElement('h1');
gameTitle.textContent = 'PIEDRA, PAPEL, TIJERAS';
gameTitle.style.textAlign = 'center';
gameTitle.style.color = 'blue';
gameTitle.style.fontFamily = 'Russo One';
gameTitle.style.marginBottom = '10rem';
//Añadimos el titulo al body
body.appendChild(gameTitle);

var generalContainer = document.createElement('div');
generalContainer.style.display = 'flex'
//generalContainer.style.border = 'solid'
//generalContainer.style.borderColor = 'green'
body.appendChild(generalContainer);

/*********************************/
/*  Función elige botón.   user  */
/*********************************/
var buttonContainer = document.createElement('div');

function generateChoiceButton(_choice) {
    //buttonContainer.style.border = 'solid'
    //buttonContainer.style.float = 'left'
    //buttonContainer.style.width = '50%'    

    var button = document.createElement('button');
    button.textContent = _choice;

    //Añadir estilos al botón 
    button.style.width = '10rem';
    button.style.display = 'flex';
    button.style.flexDirection = 'column';
    button.style.marginBottom = '2rem';
    button.style.marginLeft = '20rem';
    button.style.padding = '10px 20px';
    button.style.backgroundColor= 'blue';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.fontSize = '1.5rem';
    button.style.alignItems = 'center';
   
    
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
     
    generalContainer.appendChild(buttonContainer);
       
    
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
var rendePCContainer = document.createElement('div');

function rendePC(choice) {
   // rendePCContainer.style.width = '50%';
    //rendePCContainer.style.float = 'right';
    //rendePCContainer.style.border = 'solid';
    
    var rendePCTitle = document.createElement('h2');
    rendePCTitle.textContent = choice;
    rendePCTitle.style.display = 'flex';
    rendePCTitle.style.flexDirection = 'column';
    rendePCTitle.style.marginLeft = '15rem';
    rendePCTitle.style.marginBottom = '2rem';        
    rendePCTitle.style.padding = '40px 40px';
    rendePCTitle.style.backgroundColor= '#3498db';
    //gameTitle.style.color = 'blue';
    rendePCTitle.style.width = '10rem';
    rendePCTitle.style.fontSize = '2.0rem';
    rendePCTitle.style.alignItems = 'center'
    rendePCTitle.style.position = 'absolute';
        
    generalContainer.appendChild(rendePCContainer);
    
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
    buttonContainer.appendChild(rockimgUser)
    //alert(user);
   // alert(pc);
    rockimgUser.style.height = '12rem'

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
