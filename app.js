let input = document.querySelector("#entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");

input.addEventListener("keyup", () => {
  if (input.value.trim() != "") {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

addBtn.addEventListener("click", () => {
  if (input.value.trim() != "") {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = ` <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>

            <i class="fa-solid fa-xmark"></i>

        </div>`;
    tasks.appendChild(newItem);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
});

tasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-xmark")) {
    event.target.parentElement.parentElement.remove();
  }
});

tasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-pen-to-square")) {
    event.target.parentElement.parentElement.classList.toggle("completed");
  }
});

// Sort

const sortSvg = document.querySelector(".sort");

sortSvg.addEventListener("click", function () {
  let empty = [];
  let items = document.querySelectorAll(".item");

  items.forEach((el) => {
    empty.push(el.textContent);
  });

  empty.sort();
  for (let i = 0; i < empty.length; i++) {
    let z = document.querySelectorAll(".item")[i];
    z.innerHTML = ` <p>${empty[i]}</p>
  <div class="item-btn"> 
      <i class="fa-solid fa-pen-to-square"></i>

      <i class="fa-solid fa-xmark"></i>

  </div> `;
    tasks.append();
  }
});
