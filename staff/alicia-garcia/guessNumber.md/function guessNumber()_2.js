function guessNumber() { 

    let numAdivinar = Math.floor(Math.random()*10 +1); 
	let contador = 0;
    
	let guess = prompt('1 en qué número crees que estoy pensando?'); 
	
	debugger
	while (guess !== numAdivinar.toString()) {
        
		contador++
		if (contador < 3) {

		} if (guess === numAdivinar.toString() -5) {
			
			alert('2 Caliente, valor más pequeño que 5 de diferencia!') 
				 
		} else {

			alert('3 frio, valor más de 5 de diferencia!') 	  
		    			
        } 
				
	    let guess = prompt('4 en qué número crees que estoy pensando?'); 	
		
    	continue;
    }


	if (guess === numAdivinar.toString()) {
                
		 alert('5 Has ganado!')
                
	}
}

    
let isGameOn = confirm('Quieres jugar a un juego?') 

if (isGameOn) { 

    guessNumber() 

} else { 

    alert('pues vete') 

} 
