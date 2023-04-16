let textArea = document.getElementById("normal");
let buttonCodificar = document.getElementById("codificar");
let textoNormal;
let textoCodificado = [];
const caracIndesejados =
  "!@#$%¨&*()_+1234567890-=QWERTYUIOP{}[]|ASDFGHJKL:ZXCVBNM<>?/.,;áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜãõÃÕ1234567890";
const a = "ai";
const e = "enter";
const i = "imes";
const o = "ober";
const u = "ufat";

buttonCodificar.addEventListener(
  "click",

  function codificar() {
    textoNormal = normal.value;
    textoCodificado = Array(textoNormal.length).fill("");
    arrayTN = Array.from(textoNormal);
    arrayCI = Array.from(caracIndesejados);

    for (let cont = 0; cont < textoNormal.length; cont++) {
      if (arrayCI.includes(textoNormal[cont])) {
        alert(
          "ERRO: Certifique-se que sua mensagem não tenha letras maiúsculas, números, acentuação ou caracteres especiais."
        );
        return;
      } else {
        for (let cont = 0; cont < textoNormal.length; cont++) {
          if (textoNormal[cont] === "a") {
            textoCodificado[cont] = a;
          } else if (textoNormal[cont] === "e") {
            textoCodificado[cont] = e;
          } else if (textoNormal[cont] === "i") {
            textoCodificado[cont] = i;
          } else if (textoNormal[cont] === "o") {
            textoCodificado[cont] = o;
          } else if (textoNormal[cont] === "u") {
            textoCodificado[cont] = u;
          } else {
            textoCodificado[cont] = textoNormal[cont];
          }
        }
      }
    }
    const codificado = textoCodificado.join("");
    alert(codificado);
  }
);
