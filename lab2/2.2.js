class Dack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }

  push_front(data) {
    let size = ++this.size;
    let tempStorage = {};
    if (size <= 100) {
      tempStorage = { 0: data, ...this.storage };
      for (let i = 1; i < size + 1; i++) {
        this.storage[i] = tempStorage[i - 1];
      }
    } else {
      console.log("Ошибка, больше 100 элементов в дэке быть не может");
      this.size--;
    }
  }

  push_back(data) {
    let size = ++this.size;
    size <= 100
      ? (this.storage[size] = data)
      : console.log("Ошибка, больше 100 элементов в стэке быть не может");
  }

  pop_front() {
    let size = this.size,
      deletedData,
      tempStorage = {};

    if (size) {
      deletedData = this.storage[1];
      tempStorage = { ...this.storage };
      delete tempStorage[1];

      for (let i = 1; i < size; i++) {
        this.storage[i] = tempStorage[i + 1];
      }

      delete this.storage[size];
      this.size--;

      return deletedData;
    } else {
      console.log("error");
    }
  }

  pop_back() {
    let size = this.size,
      deletedData;

    if (size) {
      deletedData = this.storage[1];

      delete this.storage[1];

      this.size--;

      return deletedData;
    } else {
      console.log("error");
    }
  }

  front() {
    return this.size !== 0 ? this.storage[1] : "error";
  }

  back() {
    return this.size !== 0 ? this.storage[this.size] : "error";
  }

  clear() {
    this.size = 0;
    this.storage = {};
  }
}

let dack = new Dack();
dack.push_back(1), dack.push_back(2); //Добавить элемент в конец
dack.push_back(3);
dack.pop_front(); //удалить элемент в конце
dack.push_front("newElement"); // положить в начало
dack.push_front("удалим его"); // положить в начало
dack.pop_front(); //удалить в начале
console.log(dack);
console.log("первый элемент: ", dack.front()); //вывод первого элемента
console.log("последний элемент: ", dack.back()); //вывод последнего элемента
