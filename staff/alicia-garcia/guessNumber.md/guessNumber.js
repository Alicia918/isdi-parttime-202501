// 1/2 intento 

function guessNumber() { 

    var number = 4; 
    var guess = prompt('en qué número crees que estoy pensando?'); 
	
	while (number === 4) {
	
		if (number.toString() === Number(guess)) { 
									
			alert('Enhorabuena!') 

		}else { 			
	
			alert('Buuuh! Perdedor!') 

		} 
		
		var guess = prompt('en qué número crees que estoy pensando?'); 
	
		number++;	
	}  

} 

var isGameOn = confirm('Quieres jugar a un juego?') 

if (isGameOn) { 

    guessNumber() 

} else { 

    alert('pues vete') 

	
} 

// 2/2 intentgo sale infinito

function guessNumber() { 

    var numberCorrecto = Math.floor(Math.random()*10 +1); 
    var number;
	var contador = 0;

    var guess = prompt('en qué número crees que estoy pensando?'); 
	
	while (number !== numberCorrecto) {
		console.log('1');

		if (number < numberCorrecto) {
            console.log('2');

			alert('Caliente, valor más pequeño que 5 de diferencia!') 

		} else {

			alert('frio, valor más de 5 de diferencia!') 	
			
        }
		
        contador++;
        var guess = prompt('en qué número crees que estoy pensando?'); 	
	}		 												
} 

var isGameOn = confirm('Quieres jugar a un juego?') 

if (isGameOn) { 

    guessNumber() 

} else { 

    alert('pues vete') 

} 
