    function calcularGasto() {
      var quilometragem = parseFloat(document.getElementById("quilometragem").value);
      var autonomia = parseFloat(document.getElementById("autonomia").value);
      var valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value);
      var consumo = quilometragem / autonomia;
      var gasto = consumo * valorCombustivel;

      document.getElementById("resultado").innerHTML = "Gasto de Combustível: R$" + gasto.toFixed(2);
    }
  