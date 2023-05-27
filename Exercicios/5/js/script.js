    function calcularCusto() {
      var comprimento = parseFloat(document.getElementById("comprimento").value);
      var largura = parseFloat(document.getElementById("largura").value);
      var valormetro = parseFloat(document.getElementById("valormetro").value);
      var area = comprimento * largura;
      var custo = area * valormetro;

      document.getElementById("resultado").innerHTML = "Custo para Assentar Piso: R$" + custo.toFixed(2);
    }
  