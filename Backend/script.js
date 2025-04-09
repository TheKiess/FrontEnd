const links = document.querySelectorAll('#cabecalho li a');
const currentPath = window.location.pathname.toLowerCase();

links.forEach(link => {
    const href = link.getAttribute('href').toLowerCase();
    if (currentPath.includes(href)) {
        link.parentElement.classList.add('ativo');
    }
});

const linguagemInfo = {
    "C++": "Uma linguagem no qual estou estudando ultimamente para melhoria do meu conhecimento, fora que usarei futuramente na faculdade então já estou me acostumando com a sintaxe e seus comandos e bibliotecas.",
    "Python": "Gostei de usar Python na faculdade, pois é uma linguagem com sintaxe fácil de usar, porém desejo seguir para outras áreas.",
    "PostgreSQL": "Na faculdade eu aprendi sobre implementações e como funciona o banco de dados e o SQL: PostGres, acabei gostando muito de utilizar e manusear.",
    "JavaScript": "Meu pequeno início dessa trajetória foi na UPF, aprendi o básico e aos poucos estou estudando para melhorar o meu conhecimento sobre essa linguagem, cada dia estou aprendendo algo novo!"
};

const linguagemImagens = {
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
};

const botoes = document.querySelectorAll('.textCabecalho');
const linguagemBody = document.querySelector('.linguagemBody');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        botoes.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
        const linguagemSelecionada = botao.dataset.linguagem;
        setTimeout(() => {
            linguagemBody.textContent = linguagemInfo[linguagemSelecionada];
            linguagemBody.style.backgroundImage = `url(${linguagemImagens[linguagemSelecionada]})`;
            linguagemBody.style.backgroundSize = "210px";
            linguagemBody.style.backgroundRepeat = "no-repeat";
            linguagemBody.style.backgroundPosition = "center";
            linguagemBody.style.paddingTop = "120px";
            linguagemBody.style.opacity = "1";
        }, 250);
    });
});
