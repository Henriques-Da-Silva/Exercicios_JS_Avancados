function Verificacao(){
    const nome = 'admin'
    const input = document.getElementById('username').value;
    const container = document.getElementById('container');

    if(input === nome){
       const paragrafo = document.getElementById('p');
       paragrafo.innerHTML = '<p>Nome já em uso</p>';
    } else {
       const paragrafo = document.getElementById('p');
       paragrafo.innerHTML = '<p>Nome ainda sem uso</p>';
       
    }
}

function Verificar(){
    const intervalo = setTimeout(Verificacao, 2000);
}