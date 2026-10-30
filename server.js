

const express = require('express');

const app = express();

const PORT = 3031;


// =================================
// 1. PÁGINA INICIAL
// =================================

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Catálogo de Heróis</title>
            </head>

            <body>

                <h1>Catálogo de Heróis</h1>

                <p>
                    Bem-vindo ao catálogo de heróis
                    da Marvel e da DC!
                </p>

                <h2>Empresas</h2>

                <a href="/marvel">Marvel</a>
                <br>

                <a href="/dc">DC Comics</a>

                <hr>

                <h2>Personagens</h2>

                <ul>
                    <li>
                        <a href="/personagem/marvel/Thor">Thor</a>
                    </li>

                    <li>
                        <a href="/personagem/marvel/Spider-Man">Spider-Man</a>
                    </li>

                    <li>
                        <a href="/personagem/dc/Batman">Batman</a>
                    </li>

                    <li>
                        <a href="/personagem/dc/Superman">Superman</a>
                    </li>
                </ul>

            </body>
        </html>
    `);
});


// =================================
// 2. ROTA MARVEL
// =================================

app.get('/marvel', (req, res) => {

    res.send(`
        <html>
            <head>
                <title>Marvel</title>
            </head>

            <body>

                <h1>Marvel</h1>

                <p>
                    A Marvel é uma empresa conhecida por
                    criar histórias em quadrinhos e personagens
                    como Thor e Homem-Aranha.
                </p>

                <h2>Personagens Marvel</h2>

                <ul>
                    <li>
                        <a href="/personagem/marvel/Thor">Thor</a>
                    </li>

                    <li>
                        <a href="/personagem/marvel/Spider-Man">Spider-Man</a>
                    </li>
                </ul>

                <a href="/">Voltar para página inicial</a>

            </body>
        </html>
    `);

});


// =================================
// 3. ROTA DC
// =================================

app.get('/dc', (req, res) => {

    res.send(`
        <html>
            <head>
                <title>DC Comics</title>
            </head>

            <body>

                <h1>DC Comics</h1>

                <p>
                    A DC Comics é uma empresa conhecida por
                    criar personagens como Batman e Superman.
                </p>

                <h2>Personagens DC</h2>

                <ul>
                    <li>
                        <a href="/personagem/dc/Batman">Batman</a>
                    </li>

                    <li>
                        <a href="/personagem/dc/Superman">Superman</a>
                    </li>
                </ul>

                <a href="/">Voltar para página inicial</a>

            </body>
        </html>
    `);

});


// =================================
// 4. ROTA COM DOIS PARÂMETROS
// =================================

app.get('/personagem/:empresa/:nome', (req, res) => {

    const empresa = req.params.empresa;

    const nome = req.params.nome;

    res.send(`
        <html>
            <head>
                <title>Personagem</title>
            </head>

            <body>

                <h1>Informações do Personagem</h1>

                <p>Empresa: ${empresa}</p>

                <p>Nome do personagem: ${nome}</p>

                <a href="/">Voltar para página inicial</a>

            </body>
        </html>
    `);

});


// =================================
// 5. INICIAR O SERVIDOR
// =================================

app.listen(PORT, () => {

    console.log(`Servidor rodando em http://localhost:${PORT}`);

});
