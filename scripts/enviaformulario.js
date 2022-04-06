const init = () => {

    const verificaNomeeMensagem = (evento) => {
        const input = evento.currentTarget;
        if ((inputNome < 5) && inputMensagem < 10) {
            submitButton.setAttribute('disabled', 'disabled');
        }
        else{
            submitButton.removeAttribute('disabled', 'disabled');
        }
        
    }

    
    const inputNome = document.querySelector('[data-nomeform]')
    const inputMensagem = document.querySelector('[data-mensagem]')
    const submitButton = document.querySelector('[data-botaoenvia]')

    inputNome.addEventListener('input', verificaNomeeMensagem);

    inputMensagem.addEventListener('input', verificaNomeeMensagem);

    if (submitButton) {
        submitButton.addEventListener('click', (evento) => {
           evento.preventDefault();
           
            fetch(`https://my-json-server.typicode.com/crismgsp/backendformulario/mensagens` , {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify ({
                    nome: inputNome.value,
                    mensagem: inputMensagem.value
                })
            }).then (( resposta) => {  
                if(resposta.ok){
                    return resposta.json();
                }               
                throw new Error('Não foi possível enviar a mensagem')
       
                })
        })    

    }

}

window.onload = init;

