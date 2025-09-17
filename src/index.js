document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const task = e.target["new-task-description"].value; // get input value
    buildToDo(task);

    e.target.reset(); // clear input
  });
});

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;
//nothing to see here
  const taskList = document.getElementById("tasks");
  taskList.appendChild(li);
}
