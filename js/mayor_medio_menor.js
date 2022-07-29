function result() {
  var num1 = parseFloat(document.resultados.num1.value);
  var num2 = parseFloat(document.resultados.num2.value);
  var num3 = parseFloat(document.resultados.num3.value);


  if (num1 < num2 & num2 < num3) {
    document.resultados.mayor.value = num3;
    document.resultados.intermedio.value = num2;
    document.resultados.menor.value = num1;
  }

  else if (num1 > num2 & num2 > num3) {
    document.resultados.mayor.value = num1;
    document.resultados.intermedio.value = num2;
    document.resultados.menor.value = num3;
  }

  else if (num2 < num1 & num1 < num3) {
    document.resultados.mayor.value = num3;
    document.resultados.intermedio.value = num1;
    document.resultados.menor.value = num2;
  }

  else if (num2 > num1 & num1 > num3) {
    document.resultados.mayor.value = num2;
    document.resultados.intermedio.value = num1;
    document.resultados.menor.value = num3;
  }
  else if (num3 > num2 & num2 > num1) {
    document.resultados.mayor.value = num3;
    document.resultados.intermedio.value = num2;
    document.resultados.menor.value = num1;
  }
}