function calcularPesoIdeal() {
  var altura = parseFloat(document.getElementById("altura").value) / 100;
  var sexo = document.getElementById("sexo").value;
  var pesoIdeal;

  if (sexo === "masculino") {
    pesoIdeal = (72.7 * altura) - 58;
  } else if (sexo === "feminino") {
    pesoIdeal = (62.1 * altura) - 44.7;
  }

  document.getElementById("resultado").innerHTML = "Peso Ideal: " + pesoIdeal.toFixed(2) + " kg";
}