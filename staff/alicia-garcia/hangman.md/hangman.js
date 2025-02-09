
debugger
var ranWord = ['Jardin','Jazmin','Oceano','Piscina','Luciernaga'];
var word = getRandonWord(word);
var guessedWordArray = [] //almacenara el patrón de la palabra adivinada hasta ahora ([-,-,l,l,-] para hello)
var guessedWord = '' //almacena el patrón pero en un string -----
var lifes = 5;
var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


/*********************************/
/*  Función palabra aleatoria.   */
/*********************************/
function getRandonWord(ranWord) { 
    var indexRandon = Math.floor(Math.random() * ranWord.length);
        return ranWord[indexRandon];    
}

/****************************************/
/* Función para pasar el array a string */
/****************************************/
function guessedWordToString() { //función para pasar el array a string
    guessedWord = ''
    for (var i = 0; i < guessedWordArray.length; i++) {
        guessedWord += guessedWordArray[i]
    }
}

/****************************************/
/* Función valida letras                */
/****************************************/
function validateInputLetter(letter) {
    if (letter.length !== 1 || letter === ' ') { //compruebo que la letra es solo un caracter
        alert('make sure you put a single letter')
        return;
    }
    
    for (var i = 0; i < alphabet.length; i++) { /*iterar abecedario para comprobar que el caracter es una letra, y pasarlo a minuscula si hace falta*/
        if (letter === alphabet[i] || letter === alphabetUpper[i]) { //comparo la misma posición en alfabeto en minusculas y en mayusculas y si hay una coincidencia, me salgo de la función devolviendo la letra en minuscula
            return alphabet[i]
        }
    }
    return;
}

/****************************************/
/* Función valida letras                */
/****************************************/
function checkLetterIncluded(letter) { //actualiza guessedWord si la letra esta en word y si no resta una vida
    var isLetterInWord = false //partimos de la idea de que la letra no esta en la palabra a adivinar
    for (var i = 0; i < word.length; i++) { //iteramos la palabra para ver si contiene la letra 
        if (letter === word[i]) {
            isLetterInWord = true //cambiamos la variable que partia de la idea de que la letra no esta, porque sí que esta
            guessedWordArray[i] = letter
        }
    }
    if (isLetterInWord === false) { //en caso de que la letra no este, resta una vida
        lifes--
    }
}


/**************************************************************************************************************/

getRandonWord(ranWord)

for (var i = 0; i < word.length; i++) { //esto lo genera de inicio (solo guiones y espacios si hacen falta)
    if (word[i] === ' ') {
        guessedWordArray[guessedWordArray.length] = ' '
    } else {
        guessedWordArray[guessedWordArray.length] = '*'
    }
}

guessedWordToString(); //completa el guessedWord (string) solo con guiones
  
/*comienza el juego*/
alert('Welcome to the Hangman game, try to guess the word!') 

while (guessedWord !== word && lifes !== 0) {
    var guessedLetter = prompt(`This is all you know about the word so far: \n   ${guessedWord} \nYou have ${lifes} lifes`)
    if (guessedLetter === null) {
        lifes = 0 //para cancelar la condicion del while si quiero salirme
        alert('ok, bye')
    } else {
        var validatedLetter = validateInputLetter(guessedLetter)
        if (validatedLetter !== undefined) {
            checkLetterIncluded(validatedLetter) //guessedWordArray se actualiza si la letra esta dentro
            guessedWordToString() //actualizar el string para asegurarme de que si he completado la palabra no vuelvo a entrar en el bucle
        }
    }

}

if (lifes === 0) {
    alert('oooh! you loser, better luck next time')
}

if (guessedWord === word) {
    alert(`congrats, you win! The word was: ${word}`)
}











