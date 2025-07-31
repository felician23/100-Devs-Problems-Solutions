const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

const Aurora = {
    name: "Aurora",
    health: 150,
    strength: 35,
    xp: 0
};

Aurora.health -= 20;
Aurora.strength += 10;
Aurora.xp += 15;


console.log(Aurora.describe())

const dog = {
    name: "Fang",
    species: "Boardhound",
    size: 75,

    bark() {
        return "Grrr! Grrr!"
    }
}

console.log(`${dog.name} ${dog.species} `)