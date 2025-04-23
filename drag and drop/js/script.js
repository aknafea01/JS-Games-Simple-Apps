let input = document.getElementById("inp");
let btn = document.getElementById("btn");
let boxs = document.querySelectorAll(".box");
let draggedItem = null;

btn.addEventListener("click", () => {
  if (input.value != "") {
    boxs[0].innerHTML += `
        <p class="items" draggable="true">${input.value}</p>
        `;
  }
  input.value = "";
  startListen();
});
function startListen() {
  let items = document.querySelectorAll(".items");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      this.style.opacity = "0.5";
      draggedItem = item;
    });
    item.addEventListener("dragend", function () {
      this.style.opacity = "1";
      draggedItem = null;
    });
  });
  boxs.forEach((box) => {
    box.addEventListener("dragover", function (e) {
      e.preventDefault();
      this.style.background = "#E71D36";
    });
    box.addEventListener("dragleave", function () {
      this.style.background = "#fff";
    });
    box.addEventListener("drop", function () {
      this.append(draggedItem);
      this.style.background = "#fff";
    });
  });
}
