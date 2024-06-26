alert("Bem vindo ao Jogo Número Secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

     if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
           
         } else {
        alert(`O Número Secreto é maior que ${chute}`);
    }
    tentativas++
 }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você descobriu o Número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

//if (tentativas > 1) {
//alert(`Você descobriu o Número Secreto ${numeroSecreto} com ${tentativas} tentativas!`);
//} else { 
  //  alert(`Você descobriu o Número Secreto ${numeroSecreto} com ${tentativas} tentativa!`);   
//}


