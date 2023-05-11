//********************* FUNCTIONS
let elNumbers = document.querySelectorAll(".numero")
console.log(elNumbers)

function eliminateNumbers() {
   
    for ( i = 0 ; i < elNumbers.length ; i++ ) {
        console.log(i)

        elNumbers[i].innerHTML = "?"
    }
    
}

eliminateNumbers()