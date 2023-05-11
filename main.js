
// crea un array di elementi che si riferiscono ai 5 numeri
let elGameNumbers = document.querySelectorAll(".numero")
console.log(elGameNumbers)

//crea un array con numeri scelti dall'utente
let UserNumbers = []

// dopo 5000ms attiva funzione eliminateNumbers e poi askNumbers
setTimeout(eliminateNumbers,5000)

setTimeout(function() {
    eliminateNumbers() // runs first
    askNumbers() // runs second
  }, 5000)




//********************* FUNCTIONS
function eliminateNumbers() {
   
    for ( i = 0 ; i < elGameNumbers.length ; i++ ) {
        console.log(i)

        elGameNumbers[i].innerHTML = "?"
    }
    
}

function askNumbers () {

    for ( i = 0 ; i < elGameNumbers.length ; i++ ) {
       let userNumber = prompt("inserisci uno alla vota i numeri che hai visto")
       UserNumbers.push(userNumber)

    }

    console.log(UserNumbers)

}
