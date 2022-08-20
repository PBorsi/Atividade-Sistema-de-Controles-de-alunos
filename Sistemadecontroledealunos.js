//se o número for par, escreva 'par' e o número correspondente.
//se o número for ímpar, escreva 'ímpar' e o número correspondente.
//se o número for zero, escreva 'zero' e o número correspondente.




let listaAlunos = ["nome0","nome1","nome2","nome3","nome4","nome5"]

console.log("Lista de Alunos")

console.log("/////////////////////////////////////")

for (let index = 0; index < listaAlunos.length; index++) {
    //const element = array[index];
    console.log(index)
    if (index == 0) {
        console.log("aluno numero zero:" + listaAlunos[index])
        } else if (index % 2 !=0) {
        console.log ("aluno com numero impar:" + listaAlunos[index])
    } else {console.log("aluno com numero par:" + listaAlunos[index])}
    
}

console.log("/////////////////////////////////////")