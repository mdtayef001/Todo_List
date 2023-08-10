const todoList = [];

randerTodoList();

function randerTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;

    const { name, dueDate } = todoObject;

    const html = `<div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1); 
    randerTodoList();
    " class="delete-button">Delete</button>`;

    todoListHTML += html;
  }

  // console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dueDateInputElement = document.querySelector(".js-due-date-input");

  const name = inputElement.value;
  const dueDate = dueDateInputElement.value;

  // console.log(name);
  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });

  // console.log(todoList);

  inputElement.value = "";

  randerTodoList();
}
