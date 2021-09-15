const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');

let todos = []; 

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res =>res.json())
  .then(data => {
    todos = data; 
    console.log(todos);
    listTodos();
  })
}
fetchTodos();

const listTodos = () => {
  output.innerHTML = '';
  todos.forEach(todo => {
    newTodo(todo);
  })
}

const newTodo = (todo) => {
  let card = document.createElement('div');
  card.setAttribute("id", todo.id);
  card.classList.add('card-wrapper');

  let innerCard = document.createElement('div');
  innerCard.classList.add('card');

  let title = document.createElement('h3');
  title.innerText = todo.title;

  let button = document.createElement ('button');
  button.classList.add('card-button'); 
  button.innerText = 'X'; 
  button.addEventListener('click', () => {
      let thisCard = todos.findIndex((todo) => todo.id == card.id)
      todos.splice(thisCard, 1)
      listTodos(); 
  })

  innerCard.appendChild(title);
  innerCard.appendChild(button);
  card.appendChild(innerCard);
  output.appendChild(card); 

}
const createTodo = (title) => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
    method: 'POST', 
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      title, 
      completed: false
    })
  })
  .then(res => res.json())
  .then(data => {

    let newTodo = {
      ...data,
      id: Date.now().toString()
    }
    console.log(newTodo);
    todos.unshift(newTodo);
    listTodos();
  })
}

form.addEventListener('submit', e => {
  e.preventDefault(); 

  if (input.value == '') {
    document.getElementById("error").innerHTML = "Please fill in a task"; 
    setTimeout(function(){
      document.getElementById("error").innerHTML="";
         },3000);
    return false; 
  }
  else {
    document.getElementById("error").innerHTML = "";  
  }

  createTodo(input.value)
  input.value = '';  
})