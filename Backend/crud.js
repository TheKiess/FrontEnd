const imgCard = document.querySelector('#imgCard');
const svButton = document.querySelector('#svButton');
const tbody = document.querySelector('tbody');
const productName = document.querySelector('#productName');
const txtDesc = document.querySelector('#txtDesc');
const intPreco = document.querySelector('#intPreco');

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
        <td><img class='crudImg' src="${item.imagem}" width="180" height="180"/></td>
        <td>${item.nome}</td>
        <td>${item.descricao}</td>
        <td>R$ ${item.valor}</td>
        <td><button class='editButton' data-index="${index}"><img src="/Images/Caneta.jpg" width="35"/></button></td>
        <td><button class='delButton' data-index="${index}"><img src="/Images/Lixeira.jpg" width="35"/></button></td>
    `;
    tbody.appendChild(tr);
}


// Captura e armazena a imagem em Base64 (file temporária)
let imageBase64 = '';

imgCard.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageBase64 = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

svButton.addEventListener('click', (e) => {
    e.preventDefault();

    let item = {
        imagem: imageBase64,
        nome: productName.value,
        descricao: txtDesc.value,
        valor: intPreco.value
    };

    if (item.imagem && item.nome && item.descricao && item.valor) {
        itens.push(item);
        setItensBD();
        loadItens();
        document.querySelector('form').reset();
        imageBase64 = '';
    } else {
        alert('Preencha todos os campos!');
    }
});
loadItens();

tbody.addEventListener('click', (e) => {
    const target = e.target.closest('button');
    if (!target) return;

    const index = parseInt(target.getAttribute('data-index'), 10);

    if (target.classList.contains('delButton')) {
        itens.splice(index, 1);
        setItensBD();
        loadItens();
    } else if (target.classList.contains('editButton')) {
        console.log("Abrindo modal para edição do item:", index);
        openEditModal(index);
    }
});

function openEditModal(index) {
    const item = itens[index];

    const menuEdit = document.querySelector('#menu-edit');
    const editProductName = document.querySelector('#editproductName');
    const editDesc = document.querySelector('#edittxtDesc');
    const editPreco = document.querySelector('#editintPreco');
    const editImgCard = document.querySelector('#editimgCard');
    const saveEditButton = document.querySelector('#menu-edit button');

    editProductName.value = item.nome;
    editDesc.value = item.descricao;
    editPreco.value = item.valor;
    menuEdit.classList.add('show');

    let newImageBase64 = item.imagem;
    editImgCard.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                newImageBase64 = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    saveEditButton.replaceWith(saveEditButton.cloneNode(true));
    const newSaveEditButton = document.querySelector('#menu-edit button');

    newSaveEditButton.addEventListener('click', () => {
        itens[index] = {
            imagem: newImageBase64,
            nome: editProductName.value,
            descricao: editDesc.value,
            valor: editPreco.value
        };
        setItensBD();
        loadItens();
        menuEdit.classList.remove('show');
    });
}