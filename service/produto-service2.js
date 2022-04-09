const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o produto') 
    })
}

const atualizaProduto = (nome, preco, categoria, descricao, id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application.json'
        },
        body: JSON.stringify ({
            nome: nome,
            preco: preco,
            categoria: categoria,
            descricao: descricao
        })
    })
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar o produto')
    })
}

export const produtoService2 = {
    detalhaProduto,
    atualizaProduto
}