// Função para buscar os dados do CEP na API ViaCEP
function buscarCep() {
    const cep = document.getElementById('fcep').value.replace(/\D/g, ''); 

    if (cep.length === 8) { 
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('fcidade').value = data.localidade;
                document.getElementById('festado').value = data.uf;
                document.getElementById('frua').value = data.logradouro; 
            } else {
                alert('CEP não encontrado.');
            }
        })
        .catch(error => {
            alert('Erro ao buscar CEP.');
            console.error(error);
        });
    } else {
        alert('CEP inválido. Por favor, digite um CEP com 8 dígitos.');
    }
}