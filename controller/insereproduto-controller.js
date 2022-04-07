import { produtoService } from "../service/produto-service.js";

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async(evento) => {
    evento.preventDefault()
    try {
        const nome = evento.target.querySelector('[data-nomeproduto]').value
        const categoria = evento.target.querySelector('[data-categoria]').value
        const preco = evento.target.querySelector('[data-preco]').value
        const descricao = evento.target.querySelector('[data-descricao]').value

        await produtoService.adicionaProduto(nome, categoria, preco, descricao)
            alert('Cadastro dos dados feito')

    }
    catch(erro) {
        console.log(erro)
    }
       

})

  


