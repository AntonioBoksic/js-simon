
// crea un array di elementi che si riferiscono ai 5 numeri
let elNumbers = document.querySelectorAll(".numero")
console.log(elNumbers)

// dopo 5000ms attiva funzione eliminateNumbers e poi askNumbers
setTimeout(eliminateNumbers,5000)

setTimeout(function() {
    eliminateNumbers() // runs first
    askNumbers() // runs second
  }, 5000)




//********************* FUNCTIONS
function eliminateNumbers() {
   
    for ( i = 0 ; i < elNumbers.length ; i++ ) {
        console.log(i)

        elNumbers[i].innerHTML = "?"
    }
    
}

function askNumbers () {

    for ( i = 0 ; i < elNumbers.length ; i++ ) {
        prompt("inserisci uno alla vota i numeri che hai visto")

    }

}
