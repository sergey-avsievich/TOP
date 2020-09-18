class Calculator {
  read() {
    this.a = +prompt("Введите значение переменной a");
    this.b = +prompt("Введите значение переменной b");
  }
  sum() {
    return this.a + this.b;
  }
  mult() {
    return this.a * this.b;
  }
}

let calc = new Calculator();
calc.read();

console.log("Sum", calc.sum());
console.log("Mul", calc.mult());
