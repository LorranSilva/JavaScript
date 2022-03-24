// 1) Crie uma função que retorna a string "Olá, " concatenada com um argumento text
// (a ser passado para a função) e com ponto de exclamação "!" no final.

// const cumprimentar = (text) => console.log("Olá, "+ text +"!")
// function cumprimentar (text){
//    return console.log("Olá, "+ text +"!")
// }
// cumprimentar("Leonardo")
// cumprimentar("Maria")
// console.log("\n")

// 2) Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

// const converterIdadeEmAnosParaDias = (idade) => idade * 365
// console.log(converterIdadeEmAnosParaDias(25))
// console.log(converterIdadeEmAnosParaDias(70))
// console.log("\n")

// 3) Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
// X", em que X é o quanto o funcionário ganhou no mês.

// const calcularSalario = (hora, pagamento_hora) => hora * pagamento_hora
// console.log(calcularSalario(150, 40.5))
// console.log("\n")

// 4) Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

// const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
// function nomeDoMes(numero_mes){
//     if ((numero_mes >= 1) && (numero_mes <= 12)) console.log(meses[numero_mes - 1])
//     else console.log("Numero invalido")
// }
// nomeDoMes(1)
// nomeDoMes(4)
// nomeDoMes(13)
// console.log("\n")

// 5) Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

// function maiorOuIgual(num1 = null, num2 = null){
//     if (num1 > num2) return "O primeiro é maior"
//     else if (num1 == num2){
//         if (num1 === num2) return "Valor e tipos iguais"
//         else return "valor igual tipos diferentes"
//     }
// }
// console.log(maiorOuIgual(0, 0))
// console.log(maiorOuIgual(0, "0"))
// console.log(maiorOuIgual(5, 1))
// console.log("\n")

// 6) Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
// de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".

// function inverso(par){
//     if (par === true) return false
//     else if (Number.isInteger(par)){
//         if (par >= 0) return -par
//         else return par * (-1)
//     }
//     else return "booleano ou número esperados, mas o parâmetro é do tipo " + typeof(par)
// }
// console.log(inverso(true))
// console.log(inverso("6"))
// console.log(inverso(-2000))
// console.log(inverso("programação"))
// console.log(inverso(12.34))
// console.log(inverso({}))
// console.log("\n")