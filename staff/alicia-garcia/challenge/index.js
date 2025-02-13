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
var body = document.body;
var user;
var pc;

//Creamos el titulo y le damos estilos
var gameTitle = document.createElement('h1');
gameTitle.textContent = 'EL JUEGO DEL CALAMAR';
gameTitle.style.textAlign = 'center';
//Añadimos el titulo al body
body.appendChild(gameTitle);


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

    var rendePCTitle = document.createElement('div');
    rendePCTitle.style.display = 'flex';
    rendePCTitle.style.flexWrap = 'wrap';
    rendePCTitle = document.createElement('h2');
    rendePCTitle.textContent = choice;
    rendePCTitle.style.textAlign = 'center';
    //Añadimos el titulo jugadorpc
    body.appendChild(rendePCTitle);      
}

       
/*********************************/
/*  Función elige botón.   user  */
/*********************************/
function generateChoiceButton(_choice) {
    var button = document.createElement('button');
    button.textContent = _choice;
    /*Añadir estilos al botón */

    button.addEventListener('click', function () {
        console.log(_choice)
        getRandonWord();
    })
    body.appendChild(button);
    
}

for (var i = 0; i < choices.length; i++) {
    generateChoiceButton(choices[i])
}

/*********************************/
/*  if Victoria .                */
/*********************************/
  //En caso de que se haya perdido/ganado: añadir mensaje de derrota/victoria
  if (user === 'rock' && pc === 'scissors' ) {
     alert('user win');
} else { //En caso de que ninguna de las dos anteriores añadiriamos el formulario
    alert('user losser');
}



