function Cloning(objeto){
    if (objeto === null || typeof obj !== 'object'){return objeto;}

    if (Array.isArray(objeto)){
        return objeto.map(x => Cloning(x));
    }

    const clone = {...objeto};

    for (let chave in clone){
        if (Object.prototype.hasOwnProperty.call(obj, chave)){clone[chave] = Cloning(clone[chave]);}
    }
    return clone;
}

const obj = { nome: "Ana", endereco: { cidade: "Luanda" } }

const copia = Cloning(obj)

copia.nome = 'Luis'
copia.endereco.cidade = 'Paris'

console.log(obj)
console.log(copia)
console.log(copia === obj)