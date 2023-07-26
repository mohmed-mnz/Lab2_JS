function problem4() {

    var number = parseInt(prompt("enter a string"))

    if (number % 5 == 0 && number % 3 == 0) {

        console.log("FiZZ BUZZ")
    }
    else if (number % 5 == 0) {
        console.log("BUZZ")

    } else if (number % 3 == 0) {
        console.log("FIZZ")

    } else {
        console.log("none")
    }


}