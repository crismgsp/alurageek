
const formulario = document.querySelector('[data-login]')

const email = evento.target.querySelector('[data-email]')

const senha = evento.target.querySelector('[data-senha]')

function validaEmail (email) {
    var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email); 
}    


function validasenha (senha) {
    if senha === "1234" {
        return true
    }
}


formulario.addEventListener('submit'), async(evento) =>
    evento.preventDefault()

    try {
        if validasenha && validaEmail === true 

        await 
            window.location.href = '../telas/adicionarproduto'
    }
    catch(erro) {
        console.log(erro)

    }