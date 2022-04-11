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

let result = calculator.add(100, 10);
console.log(result);
result = calculator.sub(100, 10);
console.log(result);
result = calculator.dev(100, 10);
console.log(result);
result = calculator.mul(100, 10);
console.log(result);
result = calculator.squ(2, 5);
console.log(result);
