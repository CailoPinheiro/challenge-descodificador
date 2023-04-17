const buttonCodificar = document.getElementById("codificar");
const buttonDecodificar = document.getElementById("decodificar");
const normal = document.getElementById("normal");
const codificada = document.getElementById("codificada");
let textoNormal = [];
let textoCodificado = [];
let textoDescodificado = [];
const caracIndesejados =
  "!@#$%¨&*()_+1234567890-=QWERTYUIOP{}[]|ASDFGHJKL:ZXCVBNM<>?/.,;áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜãõÃÕ1234567890";
const a = "ai";
const e = "enter";
const i = "imes";
const o = "ober";
const u = "ufat";
const ai = "a";
const enter = "e";
const imes = "i";
const ober = "o";
const ufat = "u";
// seleciona os botões e as textareas

document.addEventListener("DOMContentLoaded", function () {
  // coloque aqui o trecho de código que tenta acessar elementos HTML
  // adiciona um listener no botão codificar
  buttonCodificar.addEventListener("click", function codificar() {
    // obtém o texto da textarea normal e verifica se é válido
    const textoNormal = normal.value;
    const arrayCI = Array.from(caracIndesejados);
    if (arrayCI.some((c) => textoNormal.includes(c))) {
      alert(
        "ERRO: Certifique-se que sua mensagem não tenha letras maiúsculas, números, acentuação ou caracteres especiais."
      );
      return;
    }

    // codifica o texto e exibe na textarea codificada
    let textoCodificado = "";
    for (let cont = 0; cont < textoNormal.length; cont++) {
      if (textoNormal[cont] === "a") {
        textoCodificado += a;
      } else if (textoNormal[cont] === "e") {
        textoCodificado += e;
      } else if (textoNormal[cont] === "i") {
        textoCodificado += i;
      } else if (textoNormal[cont] === "o") {
        textoCodificado += o;
      } else if (textoNormal[cont] === "u") {
        textoCodificado += u;
      } else {
        textoCodificado += textoNormal[cont];
      }
    }
    codificada.value = textoCodificado;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // adiciona um listener no botão decodificar
  buttonDecodificar.addEventListener("click", function decodificar() {
    // obtém o texto da textarea codificada e verifica se é válido
    const textoCodificado = normal.value;
    const arrayCI = Array.from(caracIndesejados);
    if (arrayCI.some((c) => textoCodificado.includes(c))) {
      alert(
        "ERRO: Certifique-se que sua mensagem não tenha letras maiúsculas, números, acentuação ou caracteres especiais."
      );
      return;
    }

    // decodifica o texto e exibe na textarea normal
    let textoDescodificado = textoCodificado
      .replace(/ai/g, ai)
      .replace(/enter/g, enter)
      .replace(/imes/g, imes)
      .replace(/ober/g, ober)
      .replace(/ufat/g, ufat);
    codificada.value = textoDescodificado;
  });
});

// // adiciona um listener no botão limpar que limpa as textareas
// const buttonLimpar = document.getElementById("limpar");
// buttonLimpar.addEventListener("click", function limpar() {
//   normal.value = "";
//   codificada.value = "";
// });

// // adiciona um listener na textarea normal que limpa a textarea codificada
// normal.addEventListener("input", function limparCodificada() {
//   codificada.value = "";
// });

// // adiciona um listener na textarea codificada que limpa a textarea normal
// codificada.addEventListener("input", function limparNormal() {
//   normal.value = "";
// });
