const player = {
  name: "gg",
  sayHello: function (name) {
    console.log("hello! my name is " + name);
  },
};

function plus(firstNumber, secondNumber) {
  result = firstNumber + secondNumber;
  console.log(result);
}

function divide(a, b) {
  result = a / b;
  console.log(result);
}

plus(8, 90);
divide(100, 10);
console.log(player.name);

player.sayHello("gg");
