// script.js

// Exemplos de artigos sobre cultura e política africana
const artigosCultura = [
    {
            titulo: 'A Música Africana: Ritmos e Diversidade',
                    conteudo: 'A música africana é uma das mais ricas e diversificadas do mundo, com ritmos que variam de região para região, refletindo a história e as tradições dos povos africanos.',
                            imagem: 'https://www.example.com/imagens/musica-africana.jpg'
                                },
                                    {
                                            titulo: 'A Arte Africana e Sua História',
                                                    conteudo: 'A arte africana é uma expressão cultural rica e diversa, que reflete as crenças espirituais, a relação com a natureza e as tradições do continente.',
                                                            imagem: 'https://www.example.com/imagens/arte-africana.jpg'
                                                                }
                                                                ];

                                                                const artigosPolitica = [
                                                                    {
                                                                            titulo: 'O Papel da União Africana na Política Contemporânea',
                                                                                    conteudo: 'A União Africana (UA) é uma organização continental que visa promover a integração política e econômica dos países africanos, além de manter a paz e segurança no continente.',
                                                                                            imagem: 'https://www.example.com/imagens/union-africana.jpg'
                                                                                                },
                                                                                                    {
                                                                                                            titulo: 'Desafios Políticos e Econômicos da África',
                                                                                                                    conteudo: 'A África enfrenta diversos desafios políticos e econômicos, como a pobreza, a corrupção e os conflitos internos, mas também apresenta oportunidades de crescimento e desenvolvimento.',
                                                                                                                            imagem: 'https://www.example.com/imagens/desafios-politicos.jpg'
                                                                                                                                }
                                                                                                                                ];

                                                                                                                                // Função para renderizar artigos
                                                                                                                                function renderArtigos() {
                                                                                                                                    // Renderizar artigos de cultura
                                                                                                                                        const culturaContainer = document.getElementById('artigos-cultura');
                                                                                                                                            artigosCultura.forEach(artigo => {
                                                                                                                                                    const artigoElement = document.createElement('div');
                                                                                                                                                            artigoElement.classList.add('artigo');
                                                                                                                                                                    artigoElement.innerHTML = `
                                                                                                                                                                                <h3>${artigo.titulo}</h3>
                                                                                                                                                                                            <img src="${artigo.imagem}" alt="${artigo.titulo}" />
                                                                                                                                                                                                        <p>${artigo.conteudo}</p>
                                                                                                                                                                                                                `;
                                                                                                                                                                                                                        culturaContainer.appendChild(artigoElement);
                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                // Renderizar artigos de política
                                                                                                                                                                                                                                    const politicaContainer = document.getElementById('artigos-politica');
                                                                                                                                                                                                                                        artigosPolitica.forEach(artigo => {
                                                                                                                                                                                                                                                const artigoElement = document.createElement('div');
                                                                                                                                                                                                                                                        artigoElement.classList.add('artigo');
                                                                                                                                                                                                                                                                artigoElement.innerHTML = `
                                                                                                                                                                                                                                                                            <h3>${artigo.titulo}</h3>
                                                                                                                                                                                                                                                                                        <img src="${artigo.imagem}" alt="${artigo.titulo}" />
                                                                                                                                                                                                                                                                                                    <p>${artigo.conteudo}</p>
                                                                                                                                                                                                                                                                                                            `;
                                                                                                                                                                                                                                                                                                                    politicaContainer.appendChild(artigoElement);
                                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                        // Chama a função para renderizar os artigos
                                                                                                                                                                                                                                                                                                                        renderArtigos();
                                                                                                                                                                                                                                                                                                                        