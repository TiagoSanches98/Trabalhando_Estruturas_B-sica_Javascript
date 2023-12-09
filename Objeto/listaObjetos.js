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

cliente.enderecos.push({
    rua: 'Nelson Neto',
    numero: 20,
    casa: "Rua da caixa d'água",
    apartamento: false
})

const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApartamentos)