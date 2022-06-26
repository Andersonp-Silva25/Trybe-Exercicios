const verify = (numero, numeroGerado) => numero === numeroGerado;

const sorteio = (numero, callback) => {
  let numeroGerado = Math.floor((Math.random() * 5) + 1);
  return callback(numero, numeroGerado) ? 'Parabéns você ganhou' : "Tente novamente";
}

console.log(sorteio(5, verify));