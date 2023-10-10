function comprar() {
    // 1. Obter valores: tipo de ingresso, quantidade, ingressos disponíveis
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let disponiveis = document.getElementById(`qtd-${tipo}`).innerHTML;

    // 2. Verificar se há ingressos disponíveis
    if (quantidade <= disponiveis) {
        // 3. subtrair quantidade dos ingressos disponíveis do total
        disponiveis -= quantidade;
        // 4. Atualizar quantidade total de ingressos disponíveis
        document.getElementById(`qtd-${tipo}`).textContent = disponiveis;
        alert('Compra realizada com sucesso!');
    } else {
        let tipoDoIngresso = tipo == 'pista' ? 'Pista' : `Cadeira ${tipo}`;
        alert(`Quantidade indisponível para ${tipoDoIngresso}!`);
    }

    // 5. limpar quantidade
    document.getElementById('qtd').value = '';
}
