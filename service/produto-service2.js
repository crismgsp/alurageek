const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o produto') 
    })
}

const atualizaProduto = (id, nome, categoria, preco, descricao) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application.json'
        },
        body: JSON.stringify ({
            id: id,
            nome: nome,
            categoria: categoria,
            preco: preco,
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