const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

// Função para validar o nome
function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

// Função para exibir uma mensagem de sucesso
function exibirMensagemSucesso(mensagem) {
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagem;
    containerMensagemSucesso.style.display = 'block';
}

// Função para limpar os campos do formulário
function limparCamposFormulario() {
    nomeBeneficiario.value = '';
    document.getElementById('numero-conta').value = '';
    document.getElementById('valor-deposito').value = '';
}

// Função para lidar com o envio do formulário
function handleSubmit(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta').value;
    const valorDeposito = document.getElementById('valor-deposito').value;
    const mensagemSucesso = `Montante de: <b>${valorDeposito}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario}</b>`;

    formEValido = validaNome(nomeBeneficiario.value);

    if (formEValido) {
        exibirMensagemSucesso(mensagemSucesso);
        limparCamposFormulario();
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
}

// Função para lidar com a digitação no campo do nome do beneficiário
function handleNomeBeneficiarioInput(e) {
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.style = '';
        document.querySelector('.error-message').style.display = 'none';
    }
}

// Adicionando os event listeners aos elementos do formulário
form.addEventListener('submit', handleSubmit);
nomeBeneficiario.addEventListener('keyup', handleNomeBeneficiarioInput);
