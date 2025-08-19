const resultado = document.getElementById("resultado");
const botoes = document.querySelectorAll(".btn-numero-caractere");
const btnIgual = document.getElementById("somar");
const btnLimpar = document.getElementById("limpar");
const btnLimparTudo = document.getElementById("limpar-tudo");

let expressao = "";

botoes.forEach(btn => {
  btn.addEventListener("click", () => {
    const valor = btn.textContent;
    if (valor !== "=" && valor !== "⌫" && valor !== "C") {
      expressao += valor;
      resultado.textContent = expressao;
    }
  });
});

btnIgual.addEventListener("click", () => {
  try {
    const valorCalculado = eval(
      expressao.replace(/x/g, "*").replace(/%/g, "/")
    );
    resultado.textContent = valorCalculado;
    expressao = valorCalculado.toString();
  } catch {
    resultado.textContent = "Erro";
    expressao = "";
  }
});

btnLimpar.addEventListener("click", () => {
  expressao = expressao.slice(0, -1);
  resultado.textContent = expressao || "0";
});

btnLimparTudo.addEventListener("click", () => {
  expressao = "";
  resultado.textContent = "0";
});
