const cliente  = {
    nome: 'Tiago Sanches',
    idade: 24,
    cpf: '2545545888',
    telefone: ['9529791979', '1686486480'],
}

cliente.enderecos = [
    {
    rua: 'Laerte torres', 
    numero: 4209, 
    casa: 'Ao lado da amarela',
    apartamento: true
}
]

for(let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${chave} do meu cliente é ${cliente[chave]}`)
    }
}
