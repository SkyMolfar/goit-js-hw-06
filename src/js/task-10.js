function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector("#boxes");


function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;
  
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background-color: ${getRandomHexColor()};
      margin: 5px;
    `;
    
    fragment.appendChild(box);
    size += 10;
  }
  
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);
