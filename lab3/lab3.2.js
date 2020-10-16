/*
 Отличее от первого задание лишь не используем кортежи
*/

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

  //ищем индекс коллизий
  #findMatchingIndex(list, key){
    for(let i = 0; i < list.length; i++){
      if(list[i][0] === key) return i;     
    }
  }

  setElement(key, value){
    //разрешаем коллизию через списки
      const index = this.#hash(key);
      if(!this.store[index]){
        this.store[index] = [
         [key, value]
        ];
      }
      else{
        const list = this.store[index];
        const matchingIndex = this.#findMatchingIndex(list, key);
      
        if(matchingIndex){
          list[matchingIndex] = [key, value];
          return;
        }

        list.push([key, value]);
      }
        
    }
    getElement(key){
      const index = this.#hash(key);
      if(this.store[index]){
        const list = this.store[index];
        const matchingIndex = this.#findMatchingIndex(list, key);
        if(matchingIndex !== null)  return list[matchingIndex][1];
      }
    }
    // вспомогательная функция, посмотреть список
    printHashTable(){ 
      return this.store;
    }
  }

  let ht = new HashTable();
  ht.setElement('boroda', 'boroda');
  ht.setElement('winderton', 'winderton');
  ht.setElement('soer', 'soer');
  console.log(ht.printHashTable());