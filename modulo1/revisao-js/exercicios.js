// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// //EXERCÍCIO 01 
// function retornaTamanhoArray(array) {
// let tamanhoDaLista = array.length  
// return tamanhoDaLista 
// }
//  retornaTamanhoArray[3, 2, 1, 4, 7]
 

// // EXERCÍCIO 02
// function retornaArrayInvertido(array) {
//   let arrayInvertido = array.reverse()
//   return arrayInvertido
// }
// retornaArrayInvertido[0,8,23,16,10,15,41,12,13] 
// ///////// TEM DESAFIO///////////

// // EXERCÍCIO 03
// function retornaArrayOrdenado(array) {
//   let arrayOrdenado = array.sort(function(a,b) {
//         return a -b
//     })
//     return arrayOrdenado
//       }
// retornaArrayOrdenado[36,12,56,7,3]]
// /////////// TEM DESAFIO///////////

// //EXERCÍCIO 04
// function retornaNumerosPares(array) {
//   let arrayPares = array.filter((validaPar) => {
//      return validaPar %2 === 0
//   })
//   return arrayPares
// }
//     retornaNumerosPares[1,2,3,4,5,6,7,8]

//EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = array.filter((validaPar) => {
    return (validaPar %2 === 0)
     })
    
      let arrayParesAoQuadrado = arrayPares.map((numeros) => {
            return (Math.pow(numeros,2))
      })
      return arrayParesAoQuadrado
    }
     retornaNumerosParesElevadosADois[1,2,3,4,5,6]    


// EXERCÍCIO 06
// function retornaMaiorNumero(array) {
//     let maiorNumero = -Infinity
//     for( let i=0; i < array.length ; i++ ) {
//         if (array[i] > maiorNumero) {
//             maiorNumero = array[i]
//         }
        
//     }
//     return maiorNumero
// }
// retornaMaiorNumero[1,2,3,4,5,6,7]

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let atributo1
  let atributo2
  let atributo3
   if (num1 < num2) {
            atributo1 = num2
            atributo2 = (num2 % num1 === 0)
            atributo3 = (num2 - num1)
   } else {
            atributo1 = num1
            atributo2 = (num1 % num2 === 0)
            atributo3 = (num1 - num2)
            }
    let objeto = {
        maiorNumero: atributo1,
        maiorDivisivelPorMenor: atributo2,
        diferenca: atributo3
    }
return objeto
}
retornaObjetoEntreDoisNumeros[15,30]

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}