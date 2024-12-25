const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const errorMessage = document.getElementById("errorMessage");
const clearAllBtn = document.getElementById("clearAll");
const allTodosBtn = document.getElementById("allTodos");
const completedTodosBtn = document.getElementById("completedTodos");
const pendingTodosBtn = document.getElementById("pendingTodos");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos(filter = "all") {
  todoList.innerHTML = "";
  const filteredTodos = filterTodos(filter);

  filteredTodos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    if (todo.completed) todoItem.classList.add("completed");

    todoItem.innerHTML = `
      <span>${todo.text} </span>
      <div>
        <button class="edit-btn" onclick="editTodo(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete-btn" onclick="deleteTodo(${index})"><i class="fa-solid fa-trash"></i></button>
        <input type="checkbox" ${
          todo.completed ? "checked" : ""
        } onclick="toggleComplete(${index})">
      </div>
    `;
    todoList.appendChild(todoItem);
  });
}

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const todoText = todoInput.value.trim();

    if (todoText === "") {
      errorMessage.textContent = "Input is empty!";
    } else {
      errorMessage.textContent = "";

      const newTodo = {
        text: todoText,
        completed: false,
        date: new Date().toLocaleString(),
      };

      todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(todos));

      todoInput.value = "";

      document.body.style.overflow = "hidden";

      Swal.fire({
        title: "Success!",
        text: "Added successfully.",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      }).then(() => {
        document.body.style.overflow = "auto";
      });

      renderTodos();
    }
  }
});

addBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    errorMessage.textContent = "Input is empty!";
  } else {
    errorMessage.textContent = "";

    const newTodo = {
      text: todoText,
      completed: false,
      date: new Date().toLocaleString(),
    };

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

    todoInput.value = "";

    document.body.style.overflow = "hidden";

    Swal.fire({
      title: "Success!",
      text: "Added successfully.",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    }).then(() => {
      document.body.style.overflow = "auto";
    });

    renderTodos();
  }
});

todoInput.addEventListener("input", () => {
  if (errorMessage.textContent) {
    errorMessage.textContent = "";
  }
});

function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

function editTodo(index) {
  const todoToEdit = todos[index];

  Swal.fire({
    title: "Edit Todo",
    input: "text",
    inputValue: todoToEdit.text,
    showCancelButton: true,
    confirmButtonText: "Save",
    cancelButtonText: "Cancel",
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const updatedText = result.value;

      todos[index].text = updatedText;

      localStorage.setItem("todos", JSON.stringify(todos));

      renderTodos();

      Swal.fire({
        title: "Updated!",
        text: "Your todo has been updated.",
        icon: "success",
      });
    }
  });
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

clearAllBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      todos = [];

      localStorage.removeItem("todos");

      renderTodos();

      Swal.fire({
        title: "Deleted!",
        text: "All todos have been deleted.",
        icon: "success",
      });
    }
  });
});

function filterTodos(filter) {
  if (filter === "completed") {
    return todos.filter((todo) => todo.completed);
  } else if (filter === "pending") {
    return todos.filter((todo) => !todo.completed);
  } else {
    return todos;
  }
}

allTodosBtn.addEventListener("click", () => renderTodos("all"));
completedTodosBtn.addEventListener("click", () => renderTodos("completed"));
pendingTodosBtn.addEventListener("click", () => renderTodos("pending"));

renderTodos();
