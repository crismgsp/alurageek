import { produtoService2 } from "../service/produto-service2.js"



(async () => {

    const pegaURL = new URL(window.location)

    const id = pegaURL.searchParams.get('id')
   
    const inputNome = document.querySelector('[data-nomeproduto]')
    
    const inputCategoria = document.querySelector('[data-categoria]')

    const inputPreco = document.querySelector('[data-preco]')

    const inputDescricao = document.querySelector('[data-descricao]') 

    const inputID = document.querySelector('[data-id]') 
    
      
    try{
        const dados = await produtoService2.detalhaProduto(id)
        inputNome.value = dados.nome
        inputCategoria = dados.categoria
        inputPreco = dados.preco 
        inputDescricao = dados.descricao
        inputID = dados.id


    }    
       
    catch(erro){
        console.log(erro)
        
    } 
 
    
    const formulario = document.querySelector('[data-editar]')
    
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        try{
            await produtoService2.atualizaProduto(id, inputNome.value, inputCategoria.value, inputPreco.value, inputDescricao.value)
            alert('Edição concluída')
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
   
    })
})()




