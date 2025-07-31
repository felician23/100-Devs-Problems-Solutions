let myArr = ["Athos", "Porthos", "Aramais"];

for(let i = 0; i < myArr.length; i++) {
    console.log(myArr[i])
}

myArr.push("D'Artagnan")
myArr.splice(2,1)

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
for(i = 0; i < values.length; i++) {
    sum += values[i]
}

console.log(sum)

const value1 = [3, 11, 7, 2, 9, 10];
let max = 0;
for(i = 0; i < value1.length; i++) {
    if(values[i] > max) {
        max = values1[i]
    }
}

console.log(max)

