const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
  const container = document.querySelector(".container");
  const input = document.querySelector("#input").value;
  const p = document.createElement("p");

  if (!isNaN(input) && input != 0) {
    if (input % 3 === 0 && input % 5 === 0) {
      console.log(input);
      container.append(p);
      p.innerHTML = "FizzBuzz!";
      remove();
    } else if (input % 5 === 0) {
      console.log(input);
      container.append(p);
      p.innerHTML = "Buzz!";
      remove();
    } else if (input % 3 === 0) {
      console.log(input);
      container.append(p);
      p.innerHTML = "Fizz!";
      remove();
    } else {
      console.log(input);
      container.append(p);
      p.innerHTML = input;
      remove();
    }
  } else {
    container.append(p);
    p.innerHTML = "invalid input";
    p.style.color = "red";
    remove();
  }
});

function remove() {
  const input = document.querySelector("#input");
  input.value = "";
}
