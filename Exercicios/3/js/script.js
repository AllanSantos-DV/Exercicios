function calcularValorTotal() {
  var valor1 = parseFloat(document.getElementById("valor1").value);
  var quantidade1 = parseInt(document.getElementById("quantidade1").value);
  var valor2 = parseFloat(document.getElementById("valor2").value);
  var quantidade2 = parseInt(document.getElementById("quantidade2").value);
  var valor3 = parseFloat(document.getElementById("valor3").value);
  var quantidade3 = parseInt(document.getElementById("quantidade3").value);

  var valorTotal = (valor1 * quantidade1) + (valor2 * quantidade2) + (valor3 * quantidade3);

  document.getElementById("resultado").innerHTML = "Valor do Produto 1: R$" + (valor1 * quantidade1).toFixed(2) + "<br>" +
                                                    "Valor do Produto 2: R$" + (valor2 * quantidade2).toFixed(2) + "<br>" +
                                                    "Valor do Produto 3: R$" + (valor3 * quantidade3).toFixed(2) + "<br>" +
                                                    "Valor Total da Venda: R$" + valorTotal.toFixed(2);
}
