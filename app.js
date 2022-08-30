const container = window.document.querySelector(".main-container");

let data = [
  {
    name: "Matero",
    age: 30,
  },
  {
    name: "Sarah",
    age: 32,
  },
  {
    name: "John",
    age: 20,
  },
  {
    name: "Tim",
    age: 27,
  },
  {
    name: "Sam",
    age: 22,
  },
  {
    name: "Joey",
    age: 34,
  },
];

data.forEach(function (item, index) {
  const div = window.document.createElement("div");
  div.innerHTML = `<p> ${item.name} is ${item.age} years old.</p>`;
  container.appendChild(div);
  div.classList.add("grid-columns");
});
