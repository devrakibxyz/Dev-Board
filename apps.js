const allBtn = document.querySelectorAll(".card-btn");
let btnAlert = 0;

for (const btn of allBtn) {
  btn.addEventListener("click", function () {
    alert("Board Updated Successfully");
    btn.setAttribute("disabled", true);

    btnAlert++;
    if (btnAlert === allBtn.length) {
      alert("Congrates!!! You have Completed all the current task");
    }

    let menuCount = document.getElementById("menu-count");
    let convertMenuCount = parseInt(menuCount.innerText);
    if (convertMenuCount >= 23) {
      convertMenuCount++;
      menuCount.innerText = convertMenuCount;
    }

    let taskCount = document.getElementById("task-count");
    let convertTaskCount = parseInt(taskCount.innerText);
    if (convertTaskCount > 0) {
      convertTaskCount--;
      taskCount.innerText = convertTaskCount;
    }

    const taskTitle =
      btn.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling
        .innerText;
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleTimeString();

    const activeHistory = document.getElementById("active-history");
    const p = document.createElement("p");
    p.innerText = `You Have Completed The Task:  ${taskTitle} ${formattedDate}`;
    activeHistory.appendChild(p);
  });
}

const clearHistory = document.getElementById("clear-history");
clearHistory.addEventListener("click", function () {
  const activeHistory = document.getElementById("active-history");
  activeHistory.innerText = "";
});

const discover = document.getElementById("discover");
discover.addEventListener("click", function () {
  window.location.href = "blog.html";
});

const headerBtn = document.getElementById("header-btn");
headerBtn.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();
const dateDisplay = document.getElementById("date-display");
dateDisplay.innerText = formattedDate;
