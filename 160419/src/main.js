//primera funcion transformar de dolares a pesos
// de MXN a gasolina

function dolaresAPesos(dolares) {

    return mxnAGasolina(dolares * 18.88);
}


function mxnAGasolina(pesos) {

    return pesos / 20.72;
}

console.log(dolaresAPesos(5) + ' Litros de Gasolina');

/* ********************************************************* */
//Voltear la entradas de las palabras

function reverseWord(word) {
    return word.split('').reverse().join('');
}

/* *************************************** */

/*  */
//Codigo que hace la primera letra en Mayuscula con metodos
function capitaLetter(word) {
    return word.split(' ').map(function(element){
        var wordArray = element.split('')
        wordArray[0] = wordArray[0].toUpperCase();
        return wordArray.join('')
    }).join(' ')
}
