const cliente  = {
    nome: 'Tiago Sanches',
    idade: 24,
    cpf: '2545545888',
    telefone: ['9529791979', '1686486480'],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log('Saldo Insuficiente para realizar a compra');
        }
        else{
            this.saldo -= valor;
            console.log(`Pagamento realizado, Novo Saldo: ${this.saldo}`)
        }
    },
};

cliente.efetuaPagamento(50);