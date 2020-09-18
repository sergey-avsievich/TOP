// class Check{

// }
let str = "password";

function check() {
  let pass = prompt("Введите пароль:");

  pass === str
    ? console.log("Пароль введен правильно")
    : console.log("Неверно.");
}

check();
