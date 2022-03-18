// Desenvolver a lógica em termos de das funções já exestentem sem recerrer aos operadores aritméticos. Com exceção de "add"

// função "add" que recebe dois parâmetros e retorna a soma deles.
function add(p1, p2) {
  let sum = p1 + p2;
  return sum
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado')


// função "multiply" que recebe dois parâmetros e retorna a multiplicação deles em função de "add"
function multiply(p1, p2) {
  let mult = 0;
  for (let counter = 1; counter <= p2; counter++) {
    mult = add(p1, mult)
  }
  return mult
}
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado')


// função "power" que recebe dois parâmetros e retorna a exponenciação de p1 por p2 em função de "multiply"
function power(p1, p2) {
  let pow = 1;
  for (let counter = 1; counter <= p2; counter++) {
    pow = multiply(p1, pow)
  }
  return pow
}
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado')


// função "factorial" recebe um parâmetro e retorna o fatorial em função de "multiply"
function factorial(p1) {
  let fac = 1;
  for (let counter = p1; counter >= 1; counter--) {
    fac = multiply(counter, fac)
  }
  return fac
}
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado')


function fibonacci(ficonacciSequence) {
  let fibonacciNum,
    fibonacciNumA = 0,
    fibonacciNumB = 1,
    counter = 3;

  while (counter <= ficonacciSequence) {
    fibonacciNum = fibonacciNumA + fibonacciNumB;
    fibonacciNumA = fibonacciNumB;
    fibonacciNumB = fibonacciNum;
    counter++;
  }
  return fibonacciNum
}
console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado')