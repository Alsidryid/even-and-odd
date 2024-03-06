const input = document.querySelector(".inpt");
const answer = document.querySelector(".answer");

input.addEventListener("input", onChange);

function onChange() {
  const ourCountry = input.value.trim();
  calculate(ourCountry);
}

function calculate(numbers) {
  const numberArr = numbers.toString().split("");
  const newArr = numberArr.map((num) => {
    return Number(num);
  });

  const para = newArr.filter((value) => value % 2 === 0).length;
  const nepara = newArr.filter((value) => value % 2 !== 0).length;
  console.log(para, nepara);

  const variable = () => {
    return `<p class="type"> even: ${para}</p> <p class="type"> odd: ${nepara} </p>`;
  };
  console.log(variable());
  answer.innerHTML = variable();
}
