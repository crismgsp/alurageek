const local = document.querySelector('[data-inseririmagem]')

const input = document.querySelector('input[type="file"]')

var data = new FormData()
data.append('file', input.files[0])
data.append('user', 'hubot')


local.addEventListener('submit', async(evento) => {
    evento.preventDefault()
    fetch(`D:\Pastas Cristina\Aestudos2022\ChalengeFrontEnd\AluraGeek\assets\Imagens\teste`, {
        method: 'POST',
        body: data
        
    }).then( resposta => {
        if(resposta.ok){
            return resposta.body
    }
    })
    
})