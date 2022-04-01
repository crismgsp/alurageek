const listaProdutos = () => {
    return fetch(`http://localhost:3000/produtos`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os produtos')
    })
}

const adicionaProduto = ( nome, preco, categoria, id) => {
    return fetch(`http://localhost:3000/produtos` , {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify ({
            nome: nome,
            preco: preco,
            categoria: categoria_id
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível adicionar o produto')
    })
}

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}` , {
        method: 'DELETE'    
    })
    .then(resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possível remover o produto')
        }
    })
} 

const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o produto') 
    })
}

const atualizaProduto = (id, imagem, nome, preco) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application.json'
        },
        body: JSON.stringfy ({
            nome: nome,
            preco: preco,
            categoria: categoria_id
        })
    })
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar o produto')
    })
}

export const produtoService = {
    listaProdutos,
    adicionaProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto
}
