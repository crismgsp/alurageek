import { produtoService } from "../service/produto-service.js"


const criaNovaLinha = ( categoria, nome, preco, id) => {
    const linhaNovoProduto = document.createElement('li')
    const conteudo = `
    <ul class="categoriaproduto">
    
    <br>
    <li class="lista" ><a href ="../telas/produtos.html?id=${id}">
        <p> ${categoria}</p>
        <img class="fotoproduto" data-imagem src="../assets/Imagens/imagem${id}.png">
        <p class="produto-descricao" data-nome>${nome}</p>
        <p class="produto-preco" data-preco>R$ ${preco}</p>
        <p class="verproduto">Ver produto</p>
        </a>	
    </li>
						
	</ul>  `
    linhaNovoProduto.innerHTML = conteudo
    linhaNovoProduto.dataset.id = id
    
    return linhaNovoProduto

}

const tabela = document.querySelector('[data-categoriaproduto]')

/*aqui vai colocar a funcionalidade de deletar na pagina indexadmin posso criar uma similar a esta especifica pra admin */ 

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
