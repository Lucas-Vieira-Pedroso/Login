//Código base feito pelo icaro
let cadastro = false;

document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;
    document.getElementById("titulo").innerText = cadastro ? "Cadastro" : "Login";
    document.querySelector("button").innerText = cadastro ? "Cadastrar" : "Entrar";
    document.getElementById("toggle").innerText = cadastro
        ? "Já tem conta? Faça Login!"
        : "Não tem conta? Cadastre-se!";
    document.getElementById("mensagem").innerHTML = "";
}

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<div><p> Email Inválido!</p></div>";
        return;
    }
    
    if (senha.length < 4) {
        mensagem.innerHTML = "<div><p> Senha muito curta!</p></div>";
        return;
    }

    if (cadastro) {
        localStorage.setItem(email, senha);
        mensagem.innerHTML = "<div><p> Cadastrado com sucesso!</p></div>";
    } else {
        let salva = localStorage.getItem(email);
        if (salva === senha) {
            mensagem.innerHTML = "<div><p>Login com sucesso!</p></div>";
        } else {
            mensagem.innerHTML = "<div><p>Dados Incorretos!</p></div>";
        }
    }
    document.getElementById("form-login").reset();
}