const chk = document.getElementById('chk');
const mudando = document.getElementById('mudar');
chk.addEventListener("change", () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    mudando.textContent = 'WHITE MODE';
  } else {
    mudando.textContent = 'DARK MODE';
  }
});
document.addEventListener("DOMContentLoaded", function () {
    const quadradoLinks = document.querySelectorAll('.lista_seletiva a');
    const conteudoDiv = document.getElementById('carregar_conteudo');

    quadradoLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const tipo = this.getAttribute('lista_seletiva_link');
            console.log("Tipo selecionado:", tipo);

            if (tipo === "cpm") {
                conteudoDiv.innerHTML = `
                    <article id="carregar_conteudo">
                            <article class="artigo" id="diferente">
                                <ul>
                                    <li> <h3 class="artigo_titulo">Cidadão Pró-mundo</h3></li>
                                    <li><strong>Atuação:</strong> Nacional</li>
                                    <li><strong>Site:</strong> <a href="https://cidadaopromundo.org/transparencia/" class="lista_site">Cidadão Pró-mundo</a></li>
                                    <li><h4 class="faz"><strong>O que faz:</strong></h4>
                                        <p>Oferece ensino de inglês para comunidades carentes do Brasil. 
                                        O objetivo é democratizar o ensino da língua estrangeira e, desse modo, 
                                        criar oportunidades de inserção e integração social no Brasil.</p>
                                    </li>
                                </ul>
                            </article>
                        </article>
                `;
            } else if (tipo === "cipo") {
                conteudoDiv.innerHTML = `
                    <article class="artigo" id="diferente">
                        <ul>
                            <li><h3 class="artigo_titulo">Cipó</h3></li>
                            <li><b>Atuação:</b> Salvador, Bahia</li>
                            <li><b>Site:</b> <a href="https://cipo.org.br/" class="lista_site">Cipó</a></li>
                            <li><h4 class="faz"><strong>O que faz:</strong></h4>
                            <p>Transformar a vida de crianças carentes por meio de uma educação baseada na comunicação. 
                            Aplica uma metodologia que envolve os sentidos, como a visão, audição e a fala.</p></li>
                        </ul>
                    </article>
                `;
            } else if (tipo === "elementos") {
                conteudoDiv.innerHTML = `
                    <article class="artigo" id="diferente">
                        <ul>
                            <li><h3 class="artigo_titulo">Instituto 5 Elementos</h3></li>
                            <li><b>Atuação:</b> Nacional</li>
                            <li><b>Site:</b> <a href="https://5elementos.org.br/" class="lista_site">Instituto 5 Elementos</a></li>
                            <li><h4 class="faz"><strong>O que faz:</strong></h4>
                                <p>Oferece cursos e oficinas na área de Educação para a Sustentabilidade para professores,
                                lideranças comunitárias, funcionários de empresas e interessados em geral, visando sensibilizá-los à causa.
                                Também desenvolve ações para promover educação sobre a sustentabilidade por meio de brincadeiras,
                                vivências, exibição de materiais audiovisuais, entre outras técnicas.</p></li>
                        </ul>
                    </article>`;
            } else if (tipo === "uere") {
                conteudoDiv.innerHTML = `
                    <article class="artigo" id="diferente">
                        <ul>
                           <li><h3 class="artigo_titulo">Projeto Uerê</h3></li>
                            <li><b>Atuação:</b> Rio de Janeiro</li>
                            <li><b>Site:</b> <a href="https://www.projetouere.org.br/" class="lista_site">Projeto Uerê</a></li>
                            <li><h4 class="faz"><strong>O que faz:</strong></h4>
                            <p>Oferece educação e instrução para jovens em situação de risco social.
                            A iniciativa desenvolveu uma metodologia para educar crianças traumatizadas pela violência.</p></li>
                        </ul>
                    </article>`;
            } else if (tipo === "vagalume") {
               conteudoDiv.innerHTML = `
                    <article class="artigo" id="diferente">
                        <ul>
                            <li><h3 class="artigo_titulo">Vagalume</h3></li>
                            <li><b>Atuação:</b> Amazônia</li>
                            <li><b>Site:</b> <a href="https://www.vagalume.org.br/" class="lista_site">Vagalume</a></li>
                            <li><h4 class="faz"><strong>O que faz:</strong></h4>
                            <p> Promove o empoderamento das crianças de comunidades rurais da Amazônia por meio da leitura
                            e da gestão de bibliotecas comunitárias como espaço para compartilhar saberes. Participa da criação de gestões comunitárias
                            e incentiva a produção de livros artesanais, para fortalecer a cultura da comunidade. Organiza intercâmbios culturais,
                            gerando diálogos entre jovens das comunidades da Amazônia e escolas e organizações sociais do Sudeste brasileiro para uma troca de experiência</p></li>
                        </ul>
                    </article>`
            }
        });
    });
});