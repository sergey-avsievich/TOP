class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }

  push(data) {
    let size = ++this.size;
    size <= 100
      ? (this.storage[size] = data)
      : console.log("Ошибка, больше 100 элементов в стэке быть не может");
  }

  pop() {
    let size = this.size,
      deletedData;

    if (size) {
      deletedData = this.storage[size];

      delete this.storage[size];
      this.size--;

      return deletedData;
    } else {
      console.log("error");
    }
  }

  back() {
    return this.size !== 0 ? this.storage[this.size] : "error";
  }

  clear() {
    this.size = 0;
    this.storage = {};
  }
}

let stack = new Stack();
stack.push(233), stack.push([1, 2, 3]);
stack.push({ name: "Sergey" });
console.log(stack);
stack.pop();
console.log(stack);

// stack.clear();
console.log(stack.back());

// for (let i = 0; i < 200; i++) {
//   stack.push(i);
// }
// console.log(stack);
