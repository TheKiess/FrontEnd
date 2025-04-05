const linguagemInfo = {
    "C++": "Uma linguagem no qual estou estudando ultimamente para melhoria do meu conhecimento, fora que usarei futuramente na faculdade então já estou me acostumando com a sintaxe e seus comandos e bibliotecas.",
    "Python": "Gostei de usar Python na faculdade, pois é uma linguagem com sintaxe fácil de usar, porém desejo seguir parra outras áreas.",
    "PostgreSQL": "Na faculdade eu aprendi sobre implementações e como funciona o banco de dados e o SQL: PostGres, acabei gostando muito de utilizar e manusear.",
    "JavaScript": "Meu pequeno início dessa tragetória foi na UPF, aprendi o básico e aos poucos estou estudando para melhorar o meu conhecimento sobre essa linguagem, cada dia estou aprendendo algo novo!"
};

const botoes = document.querySelectorAll('.textCabecalho');
const linguagemBody = document.querySelector('.linguagemBody');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        botoes.forEach(b => b.classList.remove('ativo'));

        botao.classList.add('ativo');
        const linguagemSelecionada = botao.dataset.linguagem;
        linguagemBody.textContent = linguagemInfo[linguagemSelecionada];
    });
});