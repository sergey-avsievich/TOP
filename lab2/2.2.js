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
dack.push_back(1), dack.push_back(2);
dack.push_back(3);
// console.log(dack);

// dack.clear();
// console.log(dack.push_front());

// for (let i = 1; i <= 101; i++) {
//   dack.push_front(i);
// }
dack.pop_front();
console.log(dack);
dack.push_front("newElement");
console.log(dack);
dack.pop_front();
console.log(dack);
