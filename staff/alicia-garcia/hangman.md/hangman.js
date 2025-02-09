
debugger
var ranWord = ['Jardin','Jazmin','Oceano','Piscina','Luciernaga'];
var word = getRandonWord(word);

var guessedWordArray = [] //almacenara el patrón de la palabra adivinada hasta ahora ([-,-,l,l,-] para hello)
var guessedWord = '' //almacena el patrón pero en un string -----
var lifes = 5;
var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

//Función palabra aleatoria.
function getRandonWord(ranWord) {
    var indexRandon = Math.floor(Math.random() * ranWord.length);
        return ranWord[indexRandon];    
}


for (var i = 0; i < word.length; i++) { //esto lo genera de inicio (solo guiones y espacios si hacen falta)
    if (word[i] === ' ') {
        guessedWordArray[guessedWordArray.length] = ' '
    } else {
        guessedWordArray[guessedWordArray.length] = '*'
    }
}

guessedWordToString(); //completa el guessedWord (string) solo con guiones
  

