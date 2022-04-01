import { produtoService } from "../service/produto-service.js"


const criaNovaLinha = ( categoria, nome, preco, id) => {
    const linhaNovoProduto = document.createElement('li')
    const conteudo = `
        <div id="containermenor" data-descricao>
            <h1 id="titulodescricao">${produto}</h1>
            <p id="precodescricao">${preco}</p>
            <p id="textodescricao"> ${descricao} </p>
        </div> `

    linhaNovoProduto.innerHTML = conteudo
    linhaNovoProduto.dataset.id = id
    
    return linhaNovoProduto
}

const localDetalha = document.querySelector('[data-descricao]')

const detalha = async () => {
    try{
        const detalhaProdutos = await produtoService.detalhaProduto()

        detalhaProdutos.id (elemento => {
            localDetalha.appendChild(criaNovaLinha(elemento.categoria, elemento.nome,elemento.preco, elemento.id ))
        })
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

detalha()




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







