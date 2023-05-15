
const url = 'http://localhost:3000/produtos'
// buscando os dados
fetch(url)
.then(response => response.json()) // le o arquivo db.json
.then(json => { // utiliza o response
const div = document.getElementById("conteudo");
div.innerText = JSON.stringify(json)
})

fetch(url)
.then((req) => req.json()) 
.then ((data) => mostraProdutos(data))

function mostraProdutos(produtos){
    const htmlProdutos = produtos.map(
        (produtos) =>`
        <img src="${produtos.imagem}" alt="" witdh=100px height=100px>
        <h2>${produtos.descricao}</h2>
        <h4>valor: ${produtos.valor}</h4>
        `
    );
    document.getElementById('app').innerHTML = htmlProdutos
}
