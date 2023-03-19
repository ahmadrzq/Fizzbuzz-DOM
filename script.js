const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
  const container = document.querySelector(".container");
  const input = document.querySelector("#input").value;
  const p = document.createElement("p");

  if (input % 3 === 0 && input % 5 === 0) {
    console.log(`Input sebelum : ${input}`);
    container.append(p);
    p.innerHTML = "FizzBuzz!";
  } else if (input % 5 === 0) {
    console.log(`Input sebelum : ${input}`);
    container.append(p);
    p.innerHTML = "Buzz!";
  } else if (input % 3 === 0) {
    console.log(`Input sebelum : ${input}`);
    container.append(p);
    p.innerHTML = "Fizz!";
  } else {
    console.log(`Input sebelum : ${input}`);
    container.append(p);
    p.innerHTML = input;
  }
});

// container.append(p);
// p.innerHTML = "invalid input";
// p.style.color = "red";
