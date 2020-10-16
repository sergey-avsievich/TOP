class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }

  push(data) {
    let size = ++this.size;
    size <= 100 ? (this.storage[size] = data) : this.size--;
    console.log("Ошибка, больше 100 элементов в стэке быть не может");
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
// stack.push(233), stack.push([1, 2, 3]); //добавить в стек
// stack.push({ name: "Sergey" });
// stack.pop(); //удалить из стека
// console.log(stack); //вывод
// console.log("Последний элемент стека: ", stack.back()); // Вывод последнего элемента стека

for (let i = 0; i < 101; i++) {
  stack.push(i);
}
console.log(stack);
