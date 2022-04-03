import { produtoService } from "../service/produto-service.js"


const detalhaoproduto = ( nome, preco, descricao, id) => {
    const linhaDetalhaProduto = document.createElement('li')
    const conteudo = `
    <div class="descricao" >    
        <img class="fotodescricao" data-imagem src="../assets/Imagens/imagem${id}.png">
        <ul id="containermenor" data-descricao>
            <li id="titulodescricao">${nome}</li>
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
        
        const detalhaProduto = await produtoService.detalhaProduto(id)

        detalhaProduto.id (elemento => {
            localDetalha.appendChild(detalhaoproduto( elemento.nome, elemento.preco, elemento.descricao, elemento.id ))
        })
        
    }
    catch(erro) {
        console.log(erro)
        /*window.location.href = '../telas/erro.html' */
    }
}

render()


