// 1
let myFav = "Burger"
myFav = "Taco"
alert(myFav);

// 2
let myTwo = "well"
alert(myTwo.charAt(1))

// 3
function takesInThree(a,b,c) {
    alert( (a / b * c).toFixed(2)) 
}

alert(takesInThree(3,3,3))

// 4
function takesInOne(a) {
    console.log(Math.cbrt(a))
}
 // 5
function takesInMonth(month) {
    let thisMonth = month.toLowerCase()
    if(thisMonth === "June" || thisMonth === "July" || thisMonth === "August") {
        alert("YAY")
    }
    else {
        alert("Booo")
    }
}

// 6
function takesInANum(a) {
    for(let i = 1; i < a; i++) {
        if(i % 5 !== 0) {
            console.log(i)
        }
    }
}

