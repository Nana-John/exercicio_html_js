const formulario = document.getElementById('meuFormulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA) {
        mensagem.textContent = 'Formulário válido! B é maior que A.';
        mensagem.classList.remove('error-message');
        mensagem.classList.add('success');
        campoA.classList.remove('error');
        campoB.classList.remove('error');
    } else {
        mensagem.textContent = 'Formulário inválido! B deve ser maior que A.';
        mensagem.classList.remove('success');
        mensagem.classList.add('error-message');
        campoA.classList.add('error');
        campoB.classList.add('error');
    }
});