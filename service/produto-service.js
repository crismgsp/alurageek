const listaProdutos = () => {
    return fetch(`https://my-json-server.typicode.com/crismgsp/backendalurageek/produtos`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os produtos')
    })
}

const adicionaProduto = ( nome, categoria, preco, descricao, id) => {
    return fetch(`http://localhost:3000/produtos` , {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify ({
            nome: nome,
            categoria: categoria,
            preco: preco,
            descricao: descricao
            
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
    return fetch(`https://my-json-server.typicode.com/crismgsp/backendalurageek/produtos/${id}` , {
        method: 'DELETE'    
    })
    .then(resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possível remover o produto')
        }
    })
} 

const detalhaProduto = (id) => {
    return fetch(`https://my-json-server.typicode.com/crismgsp/backendalurageek/produtos/?id=${id}`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o produto') 
    })
}

const atualizaProduto = (id, nome, preco, categoria, descricao) => {
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

export const produtoService = {
    listaProdutos,
    adicionaProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto
}

