const url = 'http://localhost:3000/banco'
fetch(url)
 .then((req) => req.json())
 .then((data) => mostraBanco(data));

function mostraBanco(banco){
 const htmlBanco = banco.map(
 (banco) =>`
        <div class="card mb-3" style="width: 22rem;">
                <img class="card-img-top" src=${banco.img} alt="Card image cap">
                <div class="card-header">
                    <h5 class="card-title mb-1">${banco.nome}</h5>
                    <p class="text-muted mb-0">${banco.descricao}</p>
                </div>
                <div class="card-body">
                <h5 class="card-text text-success mb-3">R$ ${banco.valor}</h5>
                <a href="#" class="btn btn-outline-dark">comprar</a>
                </div>
            </div>`
    );
 document.getElementById('app').innerHTML = htmlBanco;
}