const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  dev: function (a, b) {
    return a / b;
  },
  mul: function (a, b) {
    return a * b;
  },
  squ: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.add(2, 3);
const subResult = calculator.sub(plusResult, 10);
const devResult = calculator.dev(10, subResult);
const mulResult = calculator.mul(devResult, plusResult);
const squResult = calculator.squ(mulResult, subResult);

const result = [plusResult, subResult, devResult, mulResult, squResult];

for (i = 0; i < result.length; i++) {
  console.log(result[i]);
}

let age = prompt("How old are you?");

console.log(age);
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);

age = parseInt(prompt("How old are you?"));

console.log(age);
