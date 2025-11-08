function Progress(progress){
    const barra = document.getElementById('progress');
    
    barra.style.width = progress + '%';
}

const container = document.getElementById('container');
const texto_conluido = document.createElement('p');
texto_conluido.innerText = 'Carregamento concluído!';
let num = 0;

const intervalo = setInterval(() => {num+=5, Progress(num);
if (num === 100){clearInterval(intervalo), container.appendChild(texto_conluido)};
}   , 500);