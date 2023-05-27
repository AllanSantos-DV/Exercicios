function converterTemperatura() {
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var opcao = document.getElementById("opcao").value;
    var resultado;
  
    if (opcao === "celsius") {
      resultado = temperatura * 1.8 + 32;
      document.getElementById("resultado").innerHTML = temperatura + "°C = " + resultado + "°F";
    } else if (opcao === "fahrenheit") {
      resultado = (temperatura - 32) / 1.8;
      document.getElementById("resultado").innerHTML = temperatura + "°F = " + resultado + "°C";
    }
  }
  