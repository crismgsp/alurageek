
import { produtoService } from "../service/produto-service.js"

(async () => {
    const pegaURL = new URL(window.location)

    const id = pegaURL.searchParams.get('id')
    
    const inputNome = document.querySelector('[data-nomeproduto]')
    
    const inputCategoria = document.querySelector('[data-categoria]')

    const inputPreco = document.querySelector('[data-preco]')

    const inputDescricao = document.querySelector('[data-descricao]')    


    try{
        const dados = await produtoService.detalhaProduto(id)
        inputNome.value = dados.nome
        inputCategoria.value = dados.categoria
        inputPreco.value = dados.preco
        inputDescricao.value = dados.descricao 
        

    }
    catch(erro){
        console.log(erro)
        
    }
 
    const formulario = document.querySelector('[data-editar]')
    
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        try{
            await produtoService.atualizaProduto(id, inputNome.value, inputCategoria.value, inputPreco.value, inputDescricao.value)
            alert('Edição concluída')
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
   
    })
})()
