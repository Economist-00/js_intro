'use strict';



const todoList = [];
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');

addButton.addEventListener('click', () => {
  const data = todoInput.value;
  todoList.push(data);
  console.log(todoList);
  todoInput.value = '';
});



const storage = localStorage;

let todoList2 = JSON.parse(storage.getItem('todoList')) || [];

const todoInput2 = document.querySelector('.todo-input-2');
const dueDate = document.querySelector('.todo-input-date');
const addButton2 = document.querySelector('.add-button-2');
const grid = document.querySelector('.item-grid');

// render one todo
const addItem = (data, index) => {
  const row = document.createElement('div');
  row.classList.add('todo-row');

  const taskP = document.createElement('p');
  taskP.textContent = data.task;

  const dueP = document.createElement('p');
  dueP.textContent = data.due;

  const delBtn = document.createElement('button');
  delBtn.classList.add('delete-button');
  delBtn.textContent = 'Delete';

  delBtn.addEventListener('click', () => {
    // remove from array
    todoList2.splice(index, 1);
    // update storage
    storage.setItem('todoList', JSON.stringify(todoList2));
    // remove DOM
    row.remove();
  });

  row.append(taskP, dueP, delBtn);
  grid.appendChild(row);
};

// render saved todos on load
todoList2.forEach((item, index) => {
  addItem(item, index);
});

// add new todo
addButton2.addEventListener('click', () => {
  const task = todoInput2.value.trim();
  const due = dueDate.value;

  if (!task || !due) return;

  const data = { task, due };
  todoList2.push(data);
  storage.setItem('todoList', JSON.stringify(todoList2));

  // clear and re-render to keep indexes correct
  grid.innerHTML = '';
  todoList2.forEach((item, index) => addItem(item, index));

  todoInput2.value = '';
  dueDate.value = '';
});
