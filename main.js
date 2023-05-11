let elNumbers = document.querySelectorAll(".numero")
console.log(elNumbers)

setTimeout(eliminateNumbers,5000)






//********************* FUNCTIONS
function eliminateNumbers() {
   
    for ( i = 0 ; i < elNumbers.length ; i++ ) {
        console.log(i)

        elNumbers[i].innerHTML = "?"
    }
    
}
