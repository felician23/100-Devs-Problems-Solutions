let myArr = ["scream", "back to the future", "life", "Spongebob", "Scream 2", "Halloween"];

for(let i = 0; i < myArr.length; i++) {
    document.querySelector(h2).innerText += myArr[i]
}

let myArr2 = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < myArr2.length; i++) {
    myArr2[i] += 3
}

let sum = 0 

for(let i = 0; i < myArr2.length; i++) {
    sum += myArr2[i]
}

console.log(sum/myArr2.length)

