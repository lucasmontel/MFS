function logar(){
    let user = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    if(user === "admin" && senha === "admin"){
        
        location.href = "home.html";
}else{alert('Erro!');}
}

