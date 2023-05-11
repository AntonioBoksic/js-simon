
// crea un array di elementi che si riferiscono ai 5 numeri
let elGameNumbers = document.querySelectorAll(".numero")
console.log(elGameNumbers);

// crea un array dove pushare i valori degli elementi HTML
let gameNumbers = [];

for ( i = 0 ; i < elGameNumbers.length ; i++) {
    console.log(parseInt(elGameNumbers[i].innerHTML))
    gameNumbers.push(parseInt(elGameNumbers[i].innerHTML))
}
console.log(gameNumbers);

//crea un array con numeri scelti dall'utente
let userNumbers = [];

//creo una variabile dove inserire tentativi corretti
let points = 0;

//creo un array dove pushare dentro posizioni numeri indovinati
positionRightNumbers = [];

// dopo 5000ms attiva funzione eliminateNumbers e poi askNumbers
setTimeout(eliminateNumbers,5000)

setTimeout(function() {
    eliminateNumbers() // runs first
    askNumbers() // runs second
    checkPoints() //runs third
    givePositionRightNumbers() //runs fourth
}, 5000)

















//********************* FUNCTIONS

// sostituisci contenuto elementi con un "?"
function eliminateNumbers() {
   
    for ( i = 0 ; i < elGameNumbers.length ; i++ ) {
        console.log(i)

        elGameNumbers[i].innerHTML = "?"
    }
    
}

//chiedi n volte all utente di inserire un numero
function askNumbers () {

    for ( i = 0 ; i < elGameNumbers.length ; i++ ) {
       let userNumber = parseInt(prompt("inserisci uno alla vota i numeri che hai visto")) 
       userNumbers.push(userNumber)

    }

    console.log(userNumbers)

}

//aggiungi 1 a variabile esterna se elemento i di array x è uguale a elemento i di array y
function checkPoints() {
        for ( i = 0 ; i < gameNumbers.length; i++ ) {
       
            if (gameNumbers[i]=== userNumbers[i]) {
            points = points +1
        }
        
    }
    console.log(`il tuo punteggio è ${points}`)
}

//pusha valore i in un array ogni volta che il numero i dell utente corrisponde al numero i dei numeri del gioco
function givePositionRightNumbers() {
   
    for ( i = 0 ; i < gameNumbers.length; i++ ) {
       
        if (gameNumbers[i] === userNumbers[i]) {
        positionRightNumbers.push(i+1)
        }
    
    }
    console.log(positionRightNumbers)
    console.log(`hai indovinato i numeri in posizione: ${positionRightNumbers}`)
}

// crea numero random che vada da numMin a numMax
function RandomNumMinMax (numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin)
}








// crea un array di numeri random che vanno da min a max
function createNumRandomOrderArr (min, max) {

    // creiamo un array interno alla funzione
    const intArr = [];

    // ora dobbiamo popolarlo 
    // finchè la lungheza dell'array è minore al "max" selezionato
    while (intArr.length < max) {
        // crea numero random tra min e numero quadrati
        const nuovoNum = RandomNumMinMax(min, 100);
        // se il numero è presente nell'array non fare nulla
        if(intArr.includes(nuovoNum)){
        // se il numero NON è presente nell'array pushalo dentro 
        } else {
        intArr.push(nuovoNum);
        }
    }
    return intArr;
}


