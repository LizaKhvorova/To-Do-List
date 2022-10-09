const btn = document.querySelector('.btn'),
  newTask = document.querySelector('input'),
  taskBox = document.querySelector('#task-box'),
  actContainer = document.querySelector('.act-container'),
  doneBox = document.querySelector('#doneBox'),
  checkBtns = document.querySelectorAll('.check'),
  cancelBtns = document.querySelectorAll('.cancel');

let todos = [];
let doneTodos = [];

btn.addEventListener('click', () => {
  if (newTask.value.length === 0) {
    alert('Please, enter your task');
  } else {
    todos.push({
      value: newTask.value
    });
    const newNodes = todos.map((item, index) =>
      ` <li data-id="${index}"> <div>${item.value}</div>
      <div class="act-container">
      <button data-check-id="${index}" class="check" src="check.svg" alt="check"></button>
      <button data-cancel-id="${index}" class="cancel" src="cancel.svg" alt="cancel"></button>
      </div>
      </li>
      `).join('');
    taskBox.innerHTML = newNodes;
    newTask.value = '';
  }
});

taskBox.addEventListener('click', (event) => {
  if (event.target.dataset.checkId !== undefined) {
    const index = event.target.dataset.checkId;
    doneTodos.push(todos[index]);
    todos = todos.filter((_, i) => {
      return i !== +index;
    });

    const newNodes = todos.map((item, index) =>
      ` <li data-id="${index}"> ${item.value} 
      <div class="act-container">
      <button data-check-id="${index}" class="check" src="check.svg" alt="check"></button>
      <button data-cancel-id="${index}" class="cancel" src="cancel.svg" alt="cancel"></button>
      </div>
      </li>
      `).join('');
    taskBox.innerHTML = newNodes;

    const doneNodes = doneTodos.map((item, index) =>
      `<li data-id="${index}"> ${item.value} 
      <div class="act-container">
      <button data-cancel-id="${index}" class="cancel" src="cancel.svg" alt="cancel"></button>
      </div>
      </li>
      `).join('');
    doneBox.innerHTML = doneNodes;
  }

  if (event.target.dataset.cancelId !== undefined) {
    const index = event.target.dataset.cancelId;
    todos = todos.filter((_, i) => {
      return i !== +index;
    });

    const newNodes = todos.map((item, index) =>
      `<li data-id="${index}"> ${item.value} 
      <div class="act-container">
      <button data-check-id="${index}" class="check" src="check.svg" alt="check"></button>
      <button data-cancel-id="${index}" class="cancel" src="cancel.svg" alt="cancel"></button>
      </div>
      </li>
      `).join('');
    taskBox.innerHTML = newNodes;
  }
});

doneBox.addEventListener('click', (event) => {
  if (event.target.dataset.cancelId !== undefined) {
    const index = event.target.dataset.cancelId;
    doneTodos = doneTodos.filter((_, i) => {
      return i !== +index;
    });

    const Nodes = doneTodos.map((item, index) =>
      `<li data-id="${index}"> ${item.value} 
      <div class="act-container">
      <button data-cancel-id="${index}" class="cancel" src="cancel.svg" alt="cancel"></button>
      </div>
      </li>
      `).join('');
    doneBox.innerHTML = Nodes;
  }

});