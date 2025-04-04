// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const pContent = document.createElement("p");
pContent.classList.add("p-content");
pContent.style.color = "red";
pContent.textContent = "Hey I’m red!";
container.appendChild(pContent);

const h3Content = document.createElement("h3");
h3Content.classList.add("h3-content");
h3Content.style.color = "blue";
h3Content.textContent = "I’m a blue h3!";
container.appendChild(h3Content);

const secondContainer = document.querySelector("#second-container");
const outerDiv = document.createElement("div");
outerDiv.classList.add("outer-div");
outerDiv.style.border = "black";
outerDiv.style.backgroundColor = "pink";
const h1Content = document.createElement("h1");
h1Content.textContent = "I'm in a div";
const paraContent = document.createElement("p");
paraContent.textContent = "ME TOO!";
outerDiv.appendChild(h1Content);
outerDiv.appendChild(paraContent);
secondContainer.appendChild(outerDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");
const newBtn = document.querySelector("#btn-new");
newBtn.addEventListener("click", () => {
  alert("Hello World!!");
});
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
function alertFunctionNew() {
  alert("Yay, we did it!");
}
const babyBtn = document.querySelector("#baby-btn");
babyBtn.onclick = alertFunction;
const babyBtnNew = document.querySelector("#baby-btn-new");
// babyBtnNew.addEventListener("click", alertFunctionNew);
babyBtnNew.style.background = "pink";
babyBtnNew.addEventListener("click", (e) => {
  e.target.style.background = "blue";
  console.log(babyBtnNew);
});
// console.log(babyBtnNew);
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
console.log("Buttons node list>>", buttons);
// we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//   // and for each one we add a 'click' listener
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });
const btnBlur = document.querySelector("#blur-btn");
btnBlur.addEventListener("focus", (e) => {
  console.log(e);
});
