const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  sub: function (a, b) {
    console.log(a - b);
  },
  dev: function (a, b) {
    console.log(a / b);
  },
  mul: function (a, b) {
    console.log(a * b);
  },
  squ: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(100, 10);
calculator.sub(100, 10);
calculator.dev(100, 10);
calculator.mul(100, 10);
calculator.squ(2, 5);
