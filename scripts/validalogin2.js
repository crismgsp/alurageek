const init = () => {
    
    const validaEmail = (evento) => {
        const input = evento.currentTarget;
        const emailvalido = 'crismgsp@gmail.com';
        
        if(input.value != emailvalido) {
            submitButton.setAttribute('disabled', 'disabled');
        }
        else {
            submitButton.removeAttribute('disabled');
        }
    }

    const validaSenha = (evento) => {
        const input = evento.currentTarget;
        const senhavalida = '12345678'
        
        if(input.value != senhavalida) {
            submitButton.setAttribute('disabled', 'disabled');
        }
        else {
            submitButton.removeAttribute('disabled', 'disabled');
        }
    }
    
    const inputEmail = document.querySelector('[data-email]')
    const inputSenha = document.querySelector('[data-senha]')
    const submitButton = document.querySelector('[data-entrar]')

    inputEmail.addEventListener('input', validaEmail);

    inputSenha.addEventListener('input', validaSenha);

    if (submitButton) {
        submitButton.addEventListener('click', (evento) => {
           evento.preventDefault();
                   
           window.location.href = 'adicionarproduto.html'
   
        })

    }
    

}    

window.onload = init;
