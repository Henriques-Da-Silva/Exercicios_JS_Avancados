const body = document.body;
const botao = document.getElementById('botao');

function ModoAtual(modo) {
    if (modo === 'Escuro') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        botao.innerText = 'Claro';

    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        botao.innerText = 'Escuro';
    }
}

if (!localStorage.getItem('modo')) {
    localStorage.setItem('modo', 'Claro');
}

ModoAtual(localStorage.getItem('modo'));

function Mudar() {
    let modoAtual = localStorage.getItem('modo');

    if (modoAtual === 'Claro') {
        modoAtual = 'Escuro';
    }  else {   
        modoAtual = 'Claro';
    }
    
    localStorage.setItem('modo', modoAtual);

    ModoAtual(modoAtual);
}
