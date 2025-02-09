function guessNumber() { 

    var numAdivinar = Math.floor(Math.random()*10 +1); 
	var contador = 0;
    
	var guess = prompt('1 en qué número crees que estoy pensando?'); 
	
	debugger
	while (guess !== numAdivinar.toString()) {

		contador++
		if (contador < 3) {
			if (guess === numAdivinar -5) {
			
				alert('2 Caliente, valor más pequeño que 5 de diferencia!') 
				
			} else {
				
				alert('3 frio, valor más de 5 de diferencia!') 	
		    			
            }
		
		    var guess = prompt('4 en qué número crees que estoy pensando?'); 
		}
	}

	if (guess === numAdivinar.toString()) {
                
		alert('5 Has ganado!')
                
	}
}

    
var isGameOn = confirm('Quieres jugar a un juego?') 

if (isGameOn) { 

    guessNumber() 

} else { 

    alert('pues vete') 

} 
