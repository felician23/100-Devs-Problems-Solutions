let musketeers = ["Athos", "Porthos", "Aramais"];

for(let i = 0; i < musketeers.length; i++) {
    console.log(i)
};

musketeers.push("D'Artagnan")

musketeers.forEach(item => {
    console.log(item)
});

musketeers.slice(2,1)

for(const item of musketeers) {
    console.log(item)
};

const values = [3, 11, 7, 2, 9, 10]

let sum = 0;
values.forEach(item => {
    sum += item
});

console.log(sum);

const values1 = [3, 11, 7, 2, 9, 10];

let max = values1[0];
values1.forEach(item => {
    if(values1[item] > max) {
        max = values1[item];
    }
});

let myArr = [];
let words = "";

while(words !== "stop") {
    words = prompt("Enter a word or stop to quit:")
    if (words !== "stop") {
        myArr.push(words)
    }
}

console.log("You have entered the following words:")
words.forEach(item => {
    console.log(item);
});