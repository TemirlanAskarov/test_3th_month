/////   TASK 1

const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
  return regExp.test(str);
};

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("1245"));

///// TASK 2
const intervalFunc = () => {
  console.log("Прошла секунда");
};

setInterval(intervalFunc, 1000);

///// TASK 3

const count = () => {
  let i = 0;
  const interval = setInterval(() => {
    console.log(i++);
    if (i > 10) {
      clearInterval(interval);
    }
  }, 100);
};

count();

//// TASK 4

const block = document.querySelector(".block");

block.onclick = () => {
  block.classList.toggle("teal");
};

//// TASK 5

const request = new XMLHttpRequest();
request.open("GET", "data.json");
request.setRequestHeader("Content-type", "application/json");
request.send();

request.onload = () => {
  console.log(request.response);
};
