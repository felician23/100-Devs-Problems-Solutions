function takesInArr(a) {
    if(a[0] < a[a.length - 1]) {
        alert("Hi")
    }
    else if(a[0] > a[a.length - 1]) {
        alert("Bye")
    } 
    else {
        alert("We close in na hour")
    }
}

takesInArr([3,4,5,3])