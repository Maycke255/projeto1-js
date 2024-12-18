function salvarDados() {
    // Obtém os valores dos campos do formulário
    let nome = document.getElementById("name1").value;
    let sobrenome = document.getElementsByClassName("input")[1].value;
    let estudo = document.getElementById("study").value;
    let nascimento = parseInt(document.getElementById("birth").value);

    // Calcula o ano atual e a idade
    const anoAtual = new Date().getFullYear(); // Corrigido com os parênteses
    const idade = anoAtual - nascimento;

    // Exibe os dados salvos no alerta
    alert(
        "Seus dados foram salvos!" + "\n" +
        "Nome: " + nome + " " + sobrenome + "\n" +
        "Campo de estudo: " + estudo + "\n" +
        "Idade: " + idade + "\n" // Exibe a idade calculada
    );
}

// Associa o evento de clique ao botão
const botaoSalvar = document.getElementById("botaoSalvar");
botaoSalvar.addEventListener("click", salvarDados);

