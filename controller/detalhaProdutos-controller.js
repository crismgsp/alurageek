import { produtoService } from "../service/produto-service.js"


const detalhaoproduto = ( nome, preco, descricao, id) => {
    const linhaDetalhaProduto = document.createElement('li')
    const conteudo = `
    <div class="descricao" data-descricaototal>
        <img class="fotodescricao" data-imagem src="../assets/Imagens/imagem${id}.png">
        <div id="dadosdescricao" data-descricao>
            
            <p id="titulodescricao">${nome}</p>
            <p id="precodescricao">R$ ${preco}</p>
            <p id="textodescricao"> ${descricao} </p>
        </div> 
    </div>
    
    `
    linhaDetalhaProduto.innerHTML = conteudo
    linhaDetalhaProduto.dataset.id = id
    
    return linhaDetalhaProduto
}

const localDetalha = document.querySelector('[data-descricaototal]')


const detalha = async () => {

    

    let pegaURL = new URL(window.location);

    let id = pegaURL.searchParams.get('id');

        
    
    try{
     
        const detalhaProdutos =  await produtoService.detalhaProduto(id)

        detalhaProdutos.forEach (elemento => {
            localDetalha.appendChild(detalhaoproduto( elemento.nome, elemento.preco, elemento.descricao, elemento.id ))
        })
        
    }
    catch(erro) {
        console.log(erro)
        /*window.location.href = '../telas/erro.html' */
    }
}

detalha()


const achaSimilares = ( nome, preco, id) => {

    

    const linhaachasimilar = document.createElement('li')
    const conteudosimilar = `    

    <ul class="similar" data-similares ><a href = "../telas/produtos.html?id=${id}">
        <img class="fotoproduto" src="../assets/Imagens/imagem${id}.png">
        <li class="produto-descricao">${nome}</li>
        <li class="produto-preco">R$ ${preco}</li>
        
        </a>    
    </ul>
    `
    linhaachasimilar.innerHTML = conteudosimilar
    linhaachasimilar.dataset.id = id
    
    return linhaachasimilar
}

const produtossimilares = document.querySelector('[data-similares]')

const similar = async () => {

        
    try{
        
        let pegaURL = new URL(window.location);

        let id = pegaURL.searchParams.get('id');

        const similares = await produtoService.listaProdutos()

        
        similares.forEach(elemento => {
            produtossimilares.appendChild(achaSimilares( elemento.nome, elemento.preco, elemento.id ))
        })
            
        }
        catch(erro) {
            console.log(erro)
            /*window.location.href = '../telas/erro.html' */
        }

}

        

similar()
