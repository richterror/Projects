const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('e-mail')
const city = document.getElementById('city')
let formInfo = []; //(id:567830049282, firstname: 'Rachel' osv)
const errorElement = document.getElementById('error')
var row = 1;

const addForm = (e) => {
    
let messages = []
if (!firstname.value || !lastname.value || !email.value || !city.value) {
    messages.push('*Var vänlig fyll i alla fält') 
}
if ((firstname.value.length > 0 && firstname.value.length <= 3) || lastname.value.length > 0 && lastname.value.length <= 3|| email.value.length > 0 && email.value.length <= 5|| city.value.length > 0 && city.value.length <= 2) {
    messages.push('*För få tecken') 
}
if (email.value.includes('å') || email.value.includes('Å') || email.value.includes('ä') || email.value.includes('Ä') || email.value.includes('ö') || email.value.includes('Ö')) {
    messages.push("*Din e-mailadress får inte innehålla 'å, ä eller ö'")
}
if (messages.length > 0) { 
    e.preventDefault(); 
    errorElement.innerText = messages.join(', ')
    document.getElementById("theForm").reset();
}


let formData = {
    id: Date.now(),
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("e-mail").value,
    city: document.getElementById("city").value
}
formInfo.push(formData);
console.warn('added', {formInfo});
console.log("Form has been submitted!");
console.log(localStorage)
localStorage.setItem('vinklubbenMedlemmar', JSON.stringify(formInfo));

/* 
var table = document.getElementById('table'); 
var newRow = table.insertRow(row); 

var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);

cell1.innerHTML = firstname.value;
cell2.innerHTML = email.value; 
cell3.innerHTML= city.value; 

row++; 

document.getElementById("theForm").reset();
*/
} 



document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('submit').addEventListener('click', addForm);
    });

    /*

    {
        id: '1', 
        title: 'First task',
        completed: false
      },
      {
        id: '2', 
        title: 'Second task',
        completed: false
      },
      {
        id: '3', 
        title: 'Third task',
        completed: false
      },
      {
        id: '4', 
        title: 'Fourth task',
        completed: false
      }
    ]
    
    const form = document.querySelector('#todoForm');
    const input = document.querySelector('#todoInput');
    const output = document.querySelector('#todos');
    
    const listTodos = () => {
      output.innerHTML = '';
    
      todos.forEach(todo => {
        output.innerHTML += `
        <div id="${todo.id}" class="card">
          <h3>${todo.title}</h3>
          <button class="btn btn-danger" id="info-button">X</button>
        </div>
        `
      })
    }
    
    listTodos();
    
    
    form.addEventListener('submit', e => {
      e.preventDefault();
  
    
      if(input.value.trim() !== '') {
      input.classList.remove('is-invalid');
    
        let todo = {
          id: Date.now().toString(), 
          title: input.value,
          completed: false
        }
      
        todos.push(todo);
      
        listTodos();
      
        input.value = ''
      } else {
      input.classList.add('is-invalid');
      }
    })
    
    input.addEventListener('keyup', () => {
      if(input.value.trim() !== '') {
        input.classList.remove('is-invalid');
      } else {
        input.classList.add('is-invalid');
      }
    })
    
    
    output.addEventListener('click', e => {
      
      if(e.target.classList.contains('btn')) {
        todos = todos.filter(todo => todo.id !== e.target.parentNode.id)
        listTodos();
      }
    
    })
    */