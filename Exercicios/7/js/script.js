var valores = [];

function adicionarValor() {
  var valor = parseInt(document.getElementById("valor").value);
  valores.push(valor);
  document.getElementById("valor").value = '';
}

function mostrarValores() {
  var listaValores = "";
  for (var i = 0; i < valores.length; i++) {
    listaValores += "<li>" + valores[i] + "</li>";
  }
  document.getElementById("valores").innerHTML = listaValores;
}

function mostrarMaiorValor() {
  if (valores.length > 0) {
    var maiorValor = Math.max(...valores);
    document.getElementById("resultado").innerHTML = "Maior Valor: " + maiorValor;
  }
}

function mostrarMenorValor() {
  if (valores.length > 0) {
    var menorValor = Math.min(...valores);
    document.getElementById("resultado").innerHTML = "Menor Valor: " + menorValor;
  }
}
