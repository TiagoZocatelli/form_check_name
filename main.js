const form = document.getElementById('form-deposito');
const nomeBeneficiario= document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta').value;
    const valorDeposito = document.getElementById('valor-deposito').value;
    const mensagemSucesso = `Montante de: <b>${valorDeposito}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario}</b>`;

    formEValido = validaNome(nomeBeneficiario.value);

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        
        nomeBeneficiario.value = '';
        document.getElementById('numero-conta').value = '';
        document.getElementById('valor-deposito').value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});


nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.style = '';
        document.querySelector('.error-message').style.display = 'none';
    }
});
