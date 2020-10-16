class HashTable{
  constructor(size = 13){
    this.store = [];
    this.size = size;
  }

  #hash(string){
    let index = 0;
    for(let i = 0; i < string.length; i++){
      index += string.charCodeAt(i) * (i + 1);
    }
    return index % this.size;
  }

  setElement(key, value){
    //разрешаем коллизию линейным прбированием
      let index = this.#hash(key);
        if(!this.store[index]){
            this.store[index] = [
              key, value
            ];
        }else{
          //ищем свободный индекс
          while(this.store[index]){
            if(!this.store[index + 1]){
              this.store[index + 1] = [
                key, value
              ];
              break;
            }
            index++;
          }
        }
      }

    getElement(key){
      let val;
      //проходим по списку ищем по ключу элемент
      this.store.forEach((item) => {
        if(item[0] === key){
          val = item[1];
        }
      })
      return val;
    }
    // вспомогательная функция, посмотреть список
    printHashTable(){ 
      console.log(this.store);
    }
  }
  let ht = new HashTable();
  ht.setElement('abc', 'abc');
  ht.setElement('abcd', 'abcd');
  ht.setElement('bac', 'bac');
  ht.setElement('bca', 'bca');
  console.log(ht.getElement('abcd'))
  ht.printHashTable();