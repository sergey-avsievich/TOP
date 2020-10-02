let player1 = [0, 4, 8, 7, 6];
let player2 = [9, 1, 2, 3, 5];

// let player1 = [9, 1, 8, 3, 5];
// let player2 = [0, 4, 2, 7, 6];

//проверка хода
function game() {
  if (player1[0] === 0 && player2[0] === 9) {
    player1.push(player2.shift());
    player1.push(player1.shift());
  } else if (player1[0] === 9 && player2[0] === 0) { 
    player2.push(player1.shift());
    player2.push(player2.shift());
  } else if (player1[0] > player2[0]) {
    player1.push(player2.shift()); // забрали верхнюю карту 2 игрока, положи в конец своей колоды
    player1.push(player1.shift()); //положили свою карту в конец своей колоды
  } else if (player1[0] < player2[0]) {
    player2.push(player1.shift()); // забрали верхнюю карту 1 игрока, положи в конец своей колоды
    player2.push(player2.shift()); //положили свою карту в конец своей колоды
  }
}

//процесс игры
for (let i = 0; i <= 10 ** 6; i++) {
  if (player1.length === 0 || player2.length === 0) {
    console.log("break working");
    break;
  } else if (i === 10 ** 6) {
    console.log("to long...");
  } else {
    game();
  }
}

//определяем победителя
if (player2.length === 0) {
  console.log("player1 wined!");
} else {
  console.log("player2 wined!");
}

console.log("player1", player1);
console.log("player2", player2);
