// interface IDie {
//     value: number
// }
var Die = (function () {
    function Die(parameters) {
        this.roll();
    }
    Die.prototype.roll = function () {
        this.value = Math.ceil(Math.random() * 6);
    };
    return Die;
}());
var allDice = [];
function addDie() {
    allDice.push(new Die(null));
    allDice[allDice.length - 1].id = allDice.length - 1;
    //console.log(allDice);
    var element = document.createElement("div");
    element.className = "die";
    element.id = String(allDice[allDice.length - 1].id);
    element.innerText = String(allDice[allDice.length - 1].value);
    document.getElementById('container').appendChild(element);
}
