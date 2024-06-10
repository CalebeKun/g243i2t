const btnLogin = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
let usuarioSalvo = null;

(() => {
    usuarioSalvo = localStorage.getItem("usuario");
    if(usuarioSalvo){
        window.location.href = "http://127.0.0.1:5500/logado.html";
    }
})()

btnLogin.onclick = (e) => {
    e.preventDefault();
    let usuario = inputUsuario.value;
    let inputSenha = inputSenha.value;
    if (usuario) {
        if (usuario === "user") {
            if (senha === "123") {
                localStorage.setItem("usuario",usuario);
                window.location.href = "http://127.0.0.1:5500/logado.html";
            }
            
        }else {
            inputUsuario.focus();
        }
    }
}
