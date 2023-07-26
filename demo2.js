function problem2() {
    var nums = new Array(5)
    for (var i = 0; i < nums.length; i++) {

        nums[i] = parseInt(prompt("enter a number"))

    }
    console.log(nums.sort((x, y) => x - y))
    console.log(nums.sort((x, y) => y - x))

}