import { produtoService } from "../service/produto-service.js"


const criaNovaLinha = ( categoria, nome, preco, id) => {
    const linhaNovoProduto = document.createElement('li')
    const conteudo = `
    <ul class="categoriaproduto">
    
    <br>
    <li class="lista" data-lista ><a href ="../telas/produtos.html?id=${id}">
        <p> ${categoria}</p>
        <img class="fotoproduto" data-imagem src="../assets/Imagens/imagem${id}.png">
        <p class="produto-descricao" data-nome>${nome}</p>
        <p class="produto-preco" data-preco>${preco}</p>
        <p class="verproduto">Ver produto</p>
        
        </a>
        <button class="excluir" type="button" data-excluir >Excluir</button>	
        <button class="editar" type="button" data-editar >Editar</button>
    </li>

						
	</ul>  `
    linhaNovoProduto.innerHTML = conteudo
    linhaNovoProduto.dataset.id = id
    
    return linhaNovoProduto

}

const tabela = document.querySelector('[data-categoriaproduto]')

tabela.addEventListener('click', async (evento)=> {
    let BotaoDeletar = evento.target.className === 'excluir'
    if(BotaoDeletar){
        try{
            const linhaProduto = evento.target.closest('[data-id]')
            let id = linhaProduto.dataset.id
            await produtoService.removeProduto(id)
            linhaProduto.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
            
                 
    }
}) 



tabela.addEventListener('click', (evento)=> {
    const linhaProduto = evento.target.closest('[data-id]')
    let id = linhaProduto.dataset.id
    let BotaoEditar = evento.target.className === 'editar'
    if(BotaoEditar){
        window.location.href = `../telas/editarproduto.html?id=${id}`;
    }
})


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


const parteexcluir = document.querySelector('[categoriaproduto]')


