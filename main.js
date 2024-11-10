function tocaSom(idElementoAudio) {
    const interpolado = `#som_${idElementoAudio}`;
    const som = document.querySelector(interpolado);
    if (som.localName != 'audio') {
        alert('Elemento não é um audio');
        return;
    }
    som.play();
}

const all_buttons = document.querySelectorAll('.tecla');

for (let i = 0; i <= all_buttons.length; i++) {
    const tipo = all_buttons[i].classList[1];
    all_buttons[i].onclick = function () {
        tocaSom(tipo); 
    }

    all_buttons[i].onkeydown = function (event) {
        if (event.code === 'Enter'){
            all_buttons[i].classList.add('ativa');
        }
    }

    all_buttons[i].onkeyup = function (event) {
            all_buttons[i].classList.remove('ativa');
    }
}