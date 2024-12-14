const user = {
    nome:"anderson dantas",
    idade: 27
}

localStorage.setItem("usuario",JSON.stringify(user))

const item= localStorage.getItem("usuario")
console.log(item)
const tarnsform_json =JSON.parse(item)
console.log(tarnsform_json);


const admin = {
    nome:"José",
    idade:30,
    admin:true
}

localStorage.setItem("administrador", JSON.stringify(admin))
const administrador = localStorage.getItem("administrador")
console.log(administrador)

const transforma_json = JSON.parse(administrador)
console.log(transforma_json)
