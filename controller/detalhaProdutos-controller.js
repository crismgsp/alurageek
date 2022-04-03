import { produtoService } from "../service/produto-service.js"


const detalhaoproduto = ( nome, preco, categoria, id) => {
    const linhaDetalhaProduto = document.createElement('li')
    const conteudo = `
    <div class="descricao" data-descricao>    
        <img class="fotodescricao" data-imagem src="../assets/Imagens/imagem${id}.png">
        <ul id="containermenor" >
            <li id="titulodescricao">${produto}</li>
            <li id="precodescricao">${preco}</li>
            <li id="textodescricao"> ${descricao} </li>
        </ul> 
    </div>    
        `

    linhaDetalhaProduto.innerHTML = conteudo
    linhaDetalhaProduto.dataset.id = id
    
    return linhaDetalhaProduto
}

const localDetalha = document.querySelector('[data-descricao]')

const render = async () => {
        
    try{
        const detalhaProdutos = await produtoService.detalhaProduto(id)

        detalhaProdutos.foreach(elemento => {
            localDetalha.appendChild(detalhaoproduto( elemento.nome,elemento.preco, elemento.descricao, elemento.id ))
        })
        
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

render()






/* daqui pra baixo depois vou tentar inserir a funcionalidade de produtos similares...pra esta acho que vou usar este forEach e vou ter 
que dar um jeito de fazer uma verificacao antes do for pra que os elementos sejam da mesma categoria que o produto detalhado

const tabela = document.querySelector('[data-categoriaproduto]')



const render = async () => {
    try{
        const listaProdutos = await produtoService.listaProdutos()

        listaProdutos.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.categoria, elemento.nome,elemento.preco, elemento.id ))
        })
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

render()







