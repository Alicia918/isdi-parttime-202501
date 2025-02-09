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
