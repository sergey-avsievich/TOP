let data = [],
  queue = [],
  position = [],
  time = [],
  priority = [];

function readFile(object) {
  let file = object.files[0];
  let reader = new FileReader();
  reader.onload = function () {
    document.getElementById("out").innerHTML = reader.result;

    //разбиваем массив, получаем должность, время и приоритет в отдельный массив
    data = reader.result.split("\n").join(", ").split(", ");

    for (let i = 0; i < data.length; i += 3) {
      position.push(data[i]);
    }
    for (let i = 1; i < data.length; i += 3) {
      time.push(+data[i]);
    }
    for (let i = 2; i < data.length; i += 3) {
      priority.push(+data[i]);
    }
    for (let i = 0; i < position.length; i++) {
      queue[i] = {
        position: position[i],
        time: time[i],
        priority: priority[i],
      };
    }
    sortting();
  };
  reader.readAsText(file);
}

function sortting() {
  //   let temp;
  //   for (let i = 0; i < queue.length; i++) {
  //     for (let j = 0; j < queue.length - 1; j++) {
  //       if (queue[j].time > queue[j + 1].time) {
  //         temp = queue[j];
  //         queue[j] = queue[j + 1];
  //         queue[j + 1] = temp;
  //       }
  //     }
  //   }
  //   console.log(queue);
  queue.sort((a, b) => a.time - b.time); //сортирует по времени
  // если время одинаковое сортирует по приоритету должности
  queue.sort((a, b) => (a.time === b.time ? a.priority - b.priority : queue));
  console.log(queue);
}
