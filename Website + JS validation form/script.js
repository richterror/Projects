const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const input = document.querySelector('#form');
const output = document.querySelector("#output");

let users = [];

const validateText = (id) => {
  const input = document.querySelector("#" + id);

  if (input.value === "") {
    document.getElementById("error").innerHTML = "Var vänlig fyll i hela formuläret";
    setTimeout(function(){
      document.getElementById("error").innerHTML="";
         },3000);
    return false;
  } 
  else if (input.value.length < 2) {
    document.getElementById("error").innerHTML = "För få tecken";
    setTimeout(function(){
      document.getElementById("error").innerHTML="";
         },3000);
    return false;
  } 
  else {
    document.getElementById("error").innerHTML = "";
    return true;
  }
};

const validateEmail = (id) => {
  const input = document.querySelector("#" + id);
  let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (regEx.test(input.value)) {
    document.getElementById("error").innerHTML = "";
    return true;
  } 
  else {
    document.getElementById("error").innerHTML = "Ogiltig e-post";
    setTimeout(function(){
      document.getElementById("error").innerHTML="";
         },3000);
    return false;
  }
};

const validate = () => {
  document.querySelectorAll("input").forEach((input) => {
    if (input.type === "text") {
      validateText(input.id);
      if (!validateText(input.id)) {
        return;
      }
    }
    if (input.type === "email") {
      validateEmail(input.id);
      if (!validateEmail(input.id)) {
        return;
      }
    }
  });
};

const resetForm = () => {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
    input.classList.remove("is-valid");
  });
};

function createUser(firstName, lastName, email) {
  let user = {
    id: Date.now().toString(),
    firstName,
    lastName,
    email,
  };

  users.push(user);
  console.log(users);
}

const renderUsers = () => {
  output.innerHTML = "";
  users.forEach((user) => {
    let template = `    
        <div class="list-style" id="output">
          <h3>${user.firstName} ${user.lastName}</h3>
          <small>${user.email}</small>
        </div>
      `;
    output.innerHTML += template;
  });
};

renderUsers();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();

  if (validateText("firstName") && validateText("lastName") && validateEmail("email")) {
    createUser(firstName.value, lastName.value, email.value);
    renderUsers();
    resetForm();
  }
});