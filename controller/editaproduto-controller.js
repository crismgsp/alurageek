
import { produtoService2 } from "../service/produto-service2.js"

const editaprodutos = (nome, categoria, preco, descricao, id) => {
    const editaproduto = document.createElement('input')
    const conteudo = `
        <form class ="formeditar" data-editar><a href = "../telas/editarproduto.html?id=${id}" 
            
            <input type="text" class="nomepreco"   data-nomeproduto >

            <input type="text" class="nomepreco"   data-categoria>
                            
            <input type="text" class="nomepreco"   data-preco>

            <input type="text" id="produtotexto"  data-descricao>

            <input type="submit" value="Atualizar produto" class="botaoadiciona">
            
        
             
        </form>
    `    
    editaproduto.innerHTML = conteudo
    editaproduto.dataset.id = id
    
    return editaproduto
    
}

const formulario = document.querySelector('[data-editar]')

const criarlinhas = async () => {
    const pegaURL = new URL(window.location)
    const id = pegaURL.searchParams.get('id')
    
    const inputs = await produtoService2.detalhaProduto(id)

    inputs.forEach(elemento => {
        formulario.appendChild(editaprodutos(elemento.nome, elemento.categoria, elemento.preco, elemento.descricao, elemento.id))
    })

}

criarlinhas()

const teste = async () => {
    const pegaURL = new URL(window.location)

    const id = pegaURL.searchParams.get('id')
        
    const inputNome = document.querySelector('[data-nomeproduto]')
    
    const inputCategoria = document.querySelector('[data-categoria]')

    const inputPreco = document.querySelector('[data-preco]')

    const inputDescricao = document.querySelector('[data-descricao]') 
      
    try{
        const dados = await produtoService2.detalhaProduto(id)
        inputNome.value = dados.nome 
        inputCategoria.value = dados.categoria
        inputPreco.value = dados.preco
        inputDescricao.value = dados.descricao 

    }
    catch(erro){
        console.log(erro)
        
    } 
 
    
    
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
}

teste()


