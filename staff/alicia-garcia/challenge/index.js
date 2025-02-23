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

var choices = ['PIEDRA', 'PAPEL', 'TIJERAS'];
var choice = ' ';
var user = '';
var pc = ''; 
var life = 0;


//Estilos del body
var body = document.body;
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.backgroundColor= '#DAEBEC'; 
   

//Creamos el titulo y le damos estilos
var gameTitle = document.createElement('h1');
    gameTitle.textContent = 'PIEDRA, PAPEL, TIJERAS';
    gameTitle.style.textAlign = 'center';
    gameTitle.style.color = '#FCAA67';
    gameTitle.style.fontFamily = 'Russo One';
    gameTitle.style.marginBottom = '4rem';

//Añadimos el titulo al body
body.appendChild(gameTitle);

//contenedor general
var generalContainer = document.createElement('div');
    generalContainer.style.display = 'flex';
    generalContainer.style.justifyContent = 'space-between'; // Distribuye los elementos con espacio entre ellos
    generalContainer.style.border = 'solid 2px yellow'; // Borde verde
    
    body.appendChild(generalContainer);

//contenedor user
var userContainer = document.createElement('div');
    userContainer.style.display = 'flex';
    userContainer.style.flexDirection = 'column';
    userContainer.style.padding = '3rem';
    userContainer.style.gap = '1rem';
    userContainer.style.flexDirection = 'column';

    generalContainer.appendChild(userContainer);

//contenedor pc
var PCContainer = document.createElement('div');
    PCContainer.style.display = 'flex';
    PCContainer.style.flexDirection = 'column';
    PCContainer.style.gap = '1rem';
    PCContainer.style.padding = '3rem';

    generalContainer.appendChild(PCContainer);

//contenedor boton user
var buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';;
    buttonContainer.style.padding = '3rem';
    
    userContainer.appendChild(buttonContainer);

//contenedor boton pc
var buttonContainerPc = document.createElement('div');
    buttonContainerPc.style.display = 'flex';
    buttonContainerPc.style.padding = '3rem';

    PCContainer.appendChild(buttonContainerPc);

//contenedor img user
var userImge = document.createElement('div');
    userImge.style.display = 'flex';
    userImge.style.padding = 'column';
    userImge.style.padding = '5rem';
    userImge.style.border = 'solid 1px #CBEEF3';

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
    button.style.backgroundColor= '#FCAA67';
    button.style.color = 'white';
    button.style.fontSize = '1.5rem';
    button.style.textAlign = 'center';
    button.style.borderRadius = '10px';
    button.style.height = '50px'; //Damos un altura determinada al botón//  
    button.style.fontFamily = 'Russo One';
       
    button.addEventListener('click', function () {
      
            if (life < 3) {
                getRandonWord();
                life ++
                win(button);
            
            } else {
                
                alert('Game Over')   
            }
             
        }
    )
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
    rendePCButton.style.backgroundColor= '#8499B1'; 
    rendePCButton.style.color = 'white';
    rendePCButton.style.fontSize = '1.5rem';     
    rendePCButton.style.textAlign = 'center';
    rendePCButton.style.borderRadius ='10px'
    rendePCButton.height = '50px'; //Damos un altura determinada al botón//
    rendePCButton.style.fontFamily = 'Russo One';
    
    buttonContainerPc.appendChild(rendePCButton);  

}

/*********************************/
/*  Funcion Victoria.            */
/*********************************/
function win(button) { 
    var user = button.textContent;
    var pc = choice;
    var contadorWinUser = 0; 

    if (life <= 3) {
             
        if (
            (user === 'PIEDRA' && pc === 'TIJERAS') ||
            (user === 'TIJERAS' && pc === 'PAPEL') ||
            (user === 'PAPEL' && pc === 'PIEDRA')
        ) {
            contadorWinUser++;
            imageUser(user);  
            alert('Ganaste!');
            
            // Verificar si el usuario ha ganado 2 veces
           if (contadorWinUser >= 2) {
              alert('¡Has ganado esta ronda!');
              contadorWinUser = 0;  // Reiniciar el contador si deseas empezar de nuevo
            } 
        } else if (user === pc) {

            alert('¡Empate!');
        } else {
            imagePC(pc);  // Opcional: Puedes mostrar la imagen del computador también
            alert('¡Perdiste!');
        }
    }
}

    

/*********************************/
/*  Funcion img user.            */
/*********************************/

function imageUser(user) {

    var rockimgUser = document.createElement('img') //img 
    var ganador = 0;

    rockimgUser.style.display = 'flex';
    rockimgUser.style.height = '8rem';
    userImge.appendChild(rockimgUser);
            

        if (user === 'PIEDRA') {
        
            rockimgUser.src = 'https://cdn-icons-png.freepik.com/256/5773/5773204.png?ga=GA1.1.1811276553.1739812746&semt=ais_hybrid'   
    
        } else if (user === 'PAPEL') {
    
            rockimgUser.src = 'https://cdn-icons-png.freepik.com/512/6558/6558599.png?ga=GA1.1.1011703110.1740307321'
    
        } else {
    
            rockimgUser.src = 'https://cdn-icons-png.freepik.com/512/12007/12007510.png?ga=GA1.1.1011703110.1740307321' 
        }     
  
}


/*********************************/
/*  Funcion img pc.              */
/*********************************/
function imagePC(pc) {
    var rockimgPc = document.createElement('img') //img 
    rockimgPc.style.display = 'flex';
    rockimgPc.style.height = '8rem';

    pcImge.appendChild(rockimgPc) 

    if (pc === 'PIEDRA') {              
       
        rockimgPc.src = 'https://cdn-icons-png.freepik.com/256/5773/5773204.png?ga=GA1.1.1811276553.1739812746&semt=ais_hybrid'
  
    } else if (pc === 'PAPEL') {

        rockimgPc.src = 'https://cdn-icons-png.freepik.com/512/6558/6558599.png?ga=GA1.1.1011703110.1740307321' 

    } else {

        rockimgPc.src = 'https://cdn-icons-png.freepik.com/512/12007/12007510.png?ga=GA1.1.1011703110.1740307321' 

    }
}


