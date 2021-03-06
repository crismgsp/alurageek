const init = () => {
    
    const validaEmail = (evento) => {
        const input = evento.currentTarget;
        const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        const emailTest = regex.test(input.value);
        
        if(!emailTest) {
            submitButton.setAttribute('disabled', 'disabled');
        }
        else {
            submitButton.removeAttribute('disabled');
        }
    }

    const validaSenha = (evento) => {
        const input = evento.currentTarget;
        if(input.value.lenght < 8) {
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
