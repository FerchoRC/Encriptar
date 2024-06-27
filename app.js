const original = document.querySelector('.rectangulo').innerHTML;

function codificar(){
    let texto = document.querySelector('#frase').value
    if(/^[a-z\s]*$/.test(texto)){
    const cod = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    let result = texto.replace(/[aeiou]/g, function(vocal){
        return cod[vocal];
    });
    codificacion(result);
    }
    else{
        alert('solo se permiten letras minusculas sin acentos');
        reset();
    }
}

function decodificar(){
    let texto = document.querySelector('#frase').value
    if(/^[a-z\s]*$/.test(texto)){
    const cod = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    let result = texto.replace(/ai|enter|imes|ober|ufat/g, function(deco){
        return cod[deco];
    });
    codificacion(result);
    }
    else{
        alert('solo se permiten letras minusculas sin acentos');
        reset();
    }
}

function codificacion(cod){
    if (cod != ''){
        let nuevo = document.createElement('div');
        nuevo.textContent = cod;
        nuevo.style.fontFamily = 'Inter';
        nuevo.style.fontSize = '24px';
        nuevo.style.padding = '20px';
        nuevo.style.color = '#495057'
        nuevo.style.boxSizing = 'border-box';
        nuevo.style.width = '100%';
        nuevo.style.height = '100%';
        nuevo.style.overflowWrap = 'break-word';

        let newBtn = document.createElement('button');
        newBtn.textContent = 'Copiar';
        newBtn.style.width = '336px'
        newBtn.style.borderRadius = '24px';
        newBtn.style.borderColor = '#0A3871';
        newBtn.style.height = '67px';
        newBtn.style.color = '#0A3871';
        newBtn.style.backgroundColor = 'white';
        newBtn.style.marginBottom = '30px';
        newBtn.style.borderStyle = 'solid';
        newBtn.style.borderWidth = '1px';
        newBtn.style.borderRadius = '24px';
        newBtn.style.borderColor = 'rgb(10, 56, 113)';
        newBtn.style.cursor = 'pointer';

        newBtn.onclick = function() {
            copiarTexto(nuevo);
        };

        let targeta = document.querySelector('.rectangulo');
        targeta.style.overflow = 'hidden';
        targeta.style.position = 'relative';
        targeta.innerHTML = '';

        targeta.appendChild(nuevo);
        targeta.appendChild(newBtn);
        
        
    } else {
        reset();
    }
}

function reset(){
    document.querySelector('.rectangulo').innerHTML = original;
}

async function copiarTexto(nuevo){
    try {
        await navigator.clipboard.writeText(nuevo.textContent);
    } catch (error) {
        console.log(error)
    }
}