document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();
  if (todoText === '') {
    alert('Please enter a task!');
    return;
  }

  const todoList = document.getElementById('todo-list');

  const listItem = document.createElement('li');
  listItem.className = 'todo-item';
  listItem.innerHTML = `
    <span>${todoText}</span>
    <button onclick="removeTodo(this)">Delete</button>
  `;

  todoList.appendChild(listItem);
  todoInput.value = '';
}

function removeTodo(button) {
  const listItem = button.parentElement;
  listItem.remove();
}
