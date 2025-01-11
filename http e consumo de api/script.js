let button = document.getElementById("button");

button.addEventListener("click", function(){
    new Promise((resolvido)=>{
    console.log("deu certo")
    resolvido("deu certo")})
    .then((dados)=>{
        alert(dados, "deu certo!")
    })
})
