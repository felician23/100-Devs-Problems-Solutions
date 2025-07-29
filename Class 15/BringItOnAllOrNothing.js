let myLeg = true
alert(myLeg);

let myArm = "Red"
myArm = "Blue";

function takesInfour(a, b, c, d) {
    return (a + b + c) / d
}

takesInfour(5,5,5,3)

function takesinTwo(a,b){
    console.log( a**b )
} 

takesinTwo(12,3)

function takesInBool(bool,string){
    if(bool) {
        alert(string)
    }
    else{
        console.log(string)
    }
}

function takesInANum(a) {
    for(let i = 1; i <= a; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        }
        else if (i % 3 === 0) {
            console.log("fizz")
        }
        else if (i % 5 === 0) {
            console.log("buzz")
        }
        else{
            console.log(i)
        }
    }
}