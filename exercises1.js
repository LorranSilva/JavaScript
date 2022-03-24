// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores

// function operacoesBasicas(num1 = 0, num2 = 0){
//     if ((Number.isInteger(num1)) && (Number.isInteger(num2))){
//         console.log(`A soma dos numeros é: ${num1 + num2}`)
//         console.log(`A subtracao dos numeros é: ${num1 - num2}`)
//         console.log(`A multiplicacao dos numeros é: ${num1 * num2}`)
//         console.log(`A divisao dos numeros é: ${num1 / num2}`)
//     }
//     else{
//         console.log("Valores invalidos.")
//     }
// }
// operacoesBasicas('10', 7)

// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

// function classificaTriangulo (lado1 = NaN, lado2 = NaN, lado3 = NaN){
//     if (((Number.isInteger(lado1)) && (Number.isInteger(lado2)) && (Number.isInteger(lado3))) &&
//     ((lado1 != 0) && (lado2 != 0) && (lado3 != 0))){
//         if((lado1 == lado2) && (lado2 == lado3)){
//             console.log("Equilatero.")
//         }
//         else if((((lado1 == lado2) && (lado1 != lado3)) || ((lado2 == lado3) && (lado1 != lado3)) ||
//         ((lado3 == lado1) && (lado2 != lado3)))){
//             console.log("Isosceles.")
//         }
//         else{
//             console.log("Escaleno.")
//         }
//     }
//     else{
//         console.log("Valores invalidos.")
//     }
// }
// classificaTriangulo(2,2,2)
// classificaTriangulo(3,2,2)
// classificaTriangulo(3,1,2)

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

// const potencia = (base = 0, expoente = 0) => Math.pow(base, expoente)
// console.log(potencia(9,3))

// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

// const divi = (dividendo = 0, divisor = 0) => console.log(`Divisao: ${dividendo/divisor}\nResto da divisao: ${dividendo%divisor}`)
// divi(11, 2)

// 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
// seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
// importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
// um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
// que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

// function corrigirFracionado(num = 0){
//     return num.toFixed(2).replace(".", ",")
// }
// console.log("R$" + corrigirFracionado(0.30000000000000004))

// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

// function jurosSimples(capitalInicial = 0, taxaJuros = 0, tempoAplicacao = 0){
//     return capitalInicial * (1 + taxaJuros * tempoAplicacao)

// }

// function jurosCompostos(capitalInicial = 0, taxaJuros = 0, tempoAplicacao = 0){
//     return capitalInicial * Math.pow((1 + taxaJuros), tempoAplicacao)
// }

// console.log(jurosSimples(500, 0.125, 4).toFixed(2))
// console.log(jurosCompostos(5000, 0.01, 6).toFixed(2))

// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

function bhaskara(a = NaN, b = NaN, c = NaN){

}

// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo)