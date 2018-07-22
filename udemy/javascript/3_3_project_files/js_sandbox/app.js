// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// const li = document.createElement('li');

// li.className = 'collection-item';
// li.id = 'new-item';
// li.setAttribute('title', 'New Item');

// li.appendChild(document.createTextNode('Hello World'));
// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';
// li.appendChild(link);

// document.querySelector('ul').appendChild(li);

// console.log(li);

// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List'));

// const oldHeading = document.getElementById('task-title');
// const cardAction = document.querySelector('.card-action');

// cardAction.replaceChild(newHeading, oldHeading);

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lis[0].remove();

// list.removeChild(lis[3]);

// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;


// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// val = link.hasAttribute('href');
// link.setAttribute('title', 'google');
// link.removeAttribute('title');
// val = link;
// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//   // console.log('clicked');

//   let val;
//   val = e;

//   val = e.target.classList;
//   val = e.type;
//   val = e.timeStamp;
//   val = e.clientY;

//   console.log(val);
// }


/* MOUSE EVENTS */
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);
// card.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }


/* KEYBOARD & INPUT EVENTS */
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);
taskInput.addEventListener('keydown', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e);
  taskInput.value += e.key;
  console.log(e.target.value);
  heading.innerText = e.target.value;
  // get input value
  // console.log(taskInput.value);

  e.preventDefault();
}
