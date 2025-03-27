const implementar = document.querySelector('#implementar');
const tbody = document.querySelector('tbody');
const productName = document.querySelector('#productName');
const txtDesc = document.querySelector('#txtDesc');
const intPreco = document.querySelector('#intPreco');
const svButton = document.querySelector('#svButton');

let itens = JSON.parse(localStorage.getItem('dbFunc')) ?? [];
const setItensBD = () => localStorage.setItem('dbFunc', JSON.stringify(itens));

function loadItens() {
    tbody.innerHTML = '';
    itens.forEach((item, index) => {
        insertItem(item, index);
    });
}
function insertItem(item, index) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.descricao}</td>
        <td>R$ ${item.valor}</td>
    `;
    tbody.appendChild(tr);
}
svButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita recarregar a página

    let item = {
        nome: productName.value,
        descricao: txtDesc.value,
        valor: intPreco.value
    };

    if (item.nome && item.descricao && item.valor) {
        itens.push(item);
        setItensBD();
        loadItens();
        document.querySelector('form').reset();
    } else {
        alert('Preencha todos os campos!');
    }
});

loadItens();