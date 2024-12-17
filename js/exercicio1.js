function salvarDados() {
let nome = document.getElementById("name").value;
let sobrenome = document.getElementsByClassName("surname").value;
let estudo = document.getElementById("study").value;
let nascimento = document.getElementById("birth").value

console.log("nome");
console.log("sobrenome");
console.log("estudo");
console.log("nascimento")

const anoAtual = new Date().getFullYear;
const idade = anoAtual - nascimento;

botaoSalvar.addEventListener("click", salvarDados);
}
