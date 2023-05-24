function exibirNumerosPares() {
    var valor = parseInt(document.getElementById("valor").value);
    var numerosPares = [];
    var soma = 0;
  
    for (var i = 1; i <= valor; i++) {
      if (i % 2 === 0) {
        numerosPares.push(i);
        soma += i;
      }
    }
  
    document.getElementById("resultado").innerHTML = "Números pares: " + numerosPares.join(", ") + "<br>Soma: " + soma;
  }
  