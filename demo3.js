function problem3() {

    var searchStr = prompt("enter a string")
    var letter = prompt("enter a letter")
    var result = []
    if (searchStr.includes(letter)) {
        for (let index = 0; index < searchStr.length; index++) {
            searchStr[index] === letter ? result.push(index) : "";

        }
        console.log(result);
    }
    else {
        console.log([]);
    }


}