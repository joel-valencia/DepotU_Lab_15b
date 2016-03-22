class Die {
    value: number;
    id: number;
    constructor(parameters) {
        this.roll();
    }
    roll() {
        this.value = Math.ceil(Math.random() * 6);
    }
}

let allDice: Array<Die> = [];

function addDie() {
    allDice.push(new Die(null));
    allDice[allDice.length - 1].id = allDice.length - 1;
    let element:HTMLDivElement = document.createElement("div");
    element.className = "die";
    element.id = String(allDice[allDice.length - 1].id);
    element.innerText = String(allDice[allDice.length - 1].value)
    document.getElementById('container').appendChild(element);
}

function rollAllDice() {
    for (let i in allDice) {
        allDice[i].roll();
        document.getElementById(i).innerText = String(allDice[i].value);
    }
}