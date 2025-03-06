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
      btn.parentElement.parentElement.querySelectorAll(".task-title").innerText;

    const activeHistory = document.getElementById("active-history");
    const p = document.createElement("p");
    p.innerText = `You Have Completed The Task: ${taskTitle}`;
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

const currentDate = new Date();
const dateDisplay = document.getElementById("date-display");
dateDisplay.innerText = currentDate;
