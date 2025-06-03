// parametros : array
// devuelve el elemento eliminado del array y undefines si el array está vacio.
// elimina el última valor del array
// es como el push elmina el último del array original - lo modifica
// si habla del this están hablando del array original

// array control -- aplicaremos metodo pop navido de js
// arry de test -- aplicaremos el metodo que hemos hecho nosotros
// element control -- almacena lo que devuelve el pop navito de js
// element de test -- almacena l que devuelve mi pop

var controlArray = ['hola', 'que', 'tal','?'];
var testArray = ['hola', 'que', 'tal','?'];
var controlElement;
var testElement;

controlArray.pop();

var lengthToTest = controlArray.length > testArray.length ? controlArray.length : testArray.length

/*if (controlArray.length > testArray.length) {

    lengthToTest = controlArray.length
} else {
    lengthToTest = testArray.length
}*/
for (var i =0; i < controlArray.length; i++) {
    console.assert(testArray[i] === controlArray[i], 'index ${i} is diferent in both arrays. ${testArray[i]} !== ${controlArray[i]}' )
}