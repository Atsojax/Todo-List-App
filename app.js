const taskInput = document.querySelector('input[type="text"] ');
const btnAddTask = document.querySelector(".btn-addtask");
const todoContainer = document.querySelector(".todo-list");
const btnDel = document.querySelector(".del-btn");
const modal = document.querySelector("#exampleModal");

btnAddTask.addEventListener("click", addTask);

function addTask() {
  const task = taskInput.value;
  if (task == "") {
    return alert(" Please Enter a task below 👇");
  }
  const todoItem = document.createElement("li");
  todoItem.classList.add("list-unstyled");
  todoItem.classList.add("btn-sm");
  todoItem.innerHTML = ` <span>${task}</span>
            <span>
              <buttton class="del-btn btn btn-sm text-black fw-bold"
                >Delete</buttton
              >
            </span>`;

  todoItem.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")) {
      return todoItem.remove();
    }
    todoItem.classList.toggle("task-completed");
  });

  todoContainer.appendChild(todoItem);
  taskInput.value = "";
}
