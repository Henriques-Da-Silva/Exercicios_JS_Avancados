const numeros = prompt('Digite os números da array (separados por vírgula): ')
const lista_numeros = numeros.split(',')
const conjunto_numeros = new Set(lista_numeros)
const numeros_unicos = []

for (let num of conjunto_numeros){if (!['', ' '].includes(num)){numeros_unicos.push(num)}}

const contagem = []

for (let n of numeros_unicos){
    let cont = 0
    let obj = {numero: 0, vezes: 0}

    for (let numero of lista_numeros){
        if (n == numero){cont++}
    }
    obj.numero = n
    obj.vezes = cont
    contagem.push(obj)
}

contagem.sort((a, b) => b.vezes - a.vezes)

console.log(contagem.slice(0, 3))