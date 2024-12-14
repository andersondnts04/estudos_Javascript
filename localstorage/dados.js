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