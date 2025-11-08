const lista = [ { nome: "Ana", pontos: 120 }, { nome: "Carlos", pontos: 200 }, { nome: "Beatriz", pontos: 150 }];

lista.sort((a, b) => b.pontos - a.pontos);

for (let i = 0; i < 3; i++) {
    console.log(`${i+1}º ${lista[i].nome}`);
}