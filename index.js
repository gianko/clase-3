const email = document.getElementById("email");
const password = document.getElementById("pass");
const form = document.getElementById("form")
const p = document.getElementById("warning")

form.addEventListener("submit", e=> {
  e.preventDefault()
  let warnings = ""
  let entrar = false
  p.innerHTML = ""
  let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

 if(!regexEmail.test(email.value)){  
  warning += 'el email no es valido ' 
  entrar = true
  }
  if(password.value.length < 8){
    warning += 'La contraseña no es valida'
    entrar = true
  }
  if(entrar){
    p.innerHTML = warning
  }
  console.log(password.value)
  console.log(email.value)
});
