function potencia(numero, expoente) {
  if (expoente === 0) {
    return 1;
  }
  let resultado = numero;
  for (let i = 1; i < expoente; i++) {
    resultado *= numero;
  }

  return resultado;
}

alert(potencia(5, 3));
alert(potencia(0, 0));
alert(potencia(0 ** 0) / 5 ** 3);
