import express from 'express';
const app = express();
const port = 3000;

//middle que informa como a api vai se comunicar, no caso com json
app.use(express.json());

const jogadores = [];
const atletica = [];
const faculdade = [];
const partida = [];
const stats = [];
const competicao = [];
const escalacao = [];

//listar jogadores
app.get('/jogadores', (req, res) => {
    res.status(200).json(jogadores);
});

//vizualizar jogadores
app.get('/jogador/:id', (req, res) => {
    res.status(200).json(jogadores[parseInt(req.params.id)-1]);
});

//criar jogador
app.post("/jogador",(req, res) => {
    let jogador = req.body
    jogadores.push(jogador);
    res.status(201).json(jogador);
});

//atualizar todos os jogadores 
app.put("/jogadores/:id", (req, res) =>{
    jogadores[parseInt(req.params.id)-1] = req.body;
    res.status(204).send();
});

//atualizar jogador parcial
app.patch("jogador/:id", (req, res) =>{
    //campos de atualização
    const {nome} = req.body;
    let jogador = jogadores[parseInt(req.params.id)-1] = req.body;
    jogador.nome = nome ? nome : jogador.nome;

    jogadores[parseInt(req.params.id)-1] = req.body = jogador;
    res.status(204).send();

    //isso, jogador.nome = nome ? nome : jogador.nome é 
    // = isso 
    /*
    if (nome existir)
        aluno.nome = nome;
    else 
        aluno.nome = aluno.nome
    */

});

//deletar jogador 
app.delete("/jogador/:id", req, res =>{
    const {id} = req.params;
    jogadores.splice(id-1,1);
    res.status(204).send();
});

//listar atletica
app.get('/atletica', (req, res) => {
    res.status(200).json(atletica);
});

//vizualizar atletica
app.get('/atletica/:id', (req, res) => {
    res.status(200).json(atletica[parseInt(req.params.id)-1]);
});

//criar atletica
app.post("/atletica",(req, res) => {
    let atletica = req.body
    atletica.push(atletica);
    res.status(201).json(atletica);
});


//atualizar todas as atleticas 
app.put("/atletica", (req, res) =>{
    atletica[parseInt(req.params.id)-1] = req.body;
    res.status(204).send();
});


//atualizar atletica parcial
app.patch("atletica/:id", (req, res) =>{
    //campos de atualização
    const {nome} = req.body;
    let atletica = atletica[parseInt(req.params.id)-1] = req.body;
    atletica.nome = nome ? nome : atletica.nome;

    atletica[parseInt(req.params.id)-1] = req.body = atletica;
    res.status(204).send();

    //isso, jogador.nome = nome ? nome : jogador.nome é 
    // = isso 
    /*
    if (nome existir)
        aluno.nome = nome;
    else 
        aluno.nome = aluno.nome
    */

});


//deletar atletica
app.delete("/atletica/:id", req, res =>{
    const {id} = req.params;
    atletica.splice(id-1,1);
    res.status(204).send();
});


//listar faculdade
app.get('/faculdade', (req, res) => {
    res.status(200).json(faculdade);
});

//vizualizar faculdade
app.get('/faculdade/:id', (req, res) => {
    res.status(200).json(faculdade[parseInt(req.params.id)-1]);
});

//criar faculdade
app.post("/faculdade",(req, res) => {
    let faculdade = req.body
    faculdade.push(faculdade);
    res.status(201).json(faculdade);
});


//atualizar todos as faculdades 
app.put("/faculdade", (req, res) =>{
    faculdade[parseInt(req.params.id)-1] = req.body;
    res.status(204).send();
});


//atualizar faculdade parcial
app.patch("faculdade/:id", (req, res) =>{
    //campos de atualização
    const {nome} = req.body;
    let faculdade = faculdade[parseInt(req.params.id)-1] = req.body;
    faculdade.nome = nome ? nome : faculdade.nome;

    faculdade[parseInt(req.params.id)-1] = req.body = faculdade;
    res.status(204).send();

    //isso, jogador.nome = nome ? nome : jogador.nome é 
    // = isso 
    /*
    if (nome existir)
        aluno.nome = nome;
    else 
        aluno.nome = aluno.nome
    */

});


//deletar faculdade 
app.delete("/faculdade/:id", req, res =>{
    const {id} = req.params;
    faculdade.splice(id-1,1);
    res.status(204).send();
});

//listar partida
app.get('/partida', (req, res) => {
    res.status(200).json(partida);
});

//vizualizar partida
app.get('/partida/:id', (req, res) => {
    res.status(200).json(partida[parseInt(req.params.id)-1]);
});

//criar partida
app.post("/partida",(req, res) => {
    let partida = req.body
    partida.push(partida);
    res.status(201).json(partida);
});

//atualizar todas as partidas 
app.put("/partida", (req, res) =>{
    partida[parseInt(req.params.id)-1] = req.body;
    res.status(204).send();
});


//atualizar partida parcial
app.patch("partida/:id", (req, res) =>{
    //campos de atualização
    const {nome} = req.body;
    let partida = partida[parseInt(req.params.id)-1] = req.body;
    partida.nome = nome ? nome : partida.nome;

    partida[parseInt(req.params.id)-1] = req.body = partida;
    res.status(204).send();

    //isso, jogador.nome = nome ? nome : jogador.nome é 
    // = isso 
    /*
    if (nome existir)
        aluno.nome = nome;
    else 
        aluno.nome = aluno.nome
    */

});


//deletar jogador 
app.delete("/partidade/:id", req, res =>{
    const {id} = req.params;
    partida.splice(id-1,1);
    res.status(204).send();
});

//listar stats
app.get('/stats', (req, res) => {
    res.status(200).json(stats);
});

//vizualizar stats
app.get('/stats/:id', (req, res) => {
    res.status(200).json(stats[parseInt(req.params.id)-1]);
});

//criar stats
app.post("/stats",(req, res) => {
    let stats = req.body
    stats.push(stats);
    res.status(201).json(stats);
});


//atualizar todos os stats 
app.put("/stats", (req, res) =>{
    stats[parseInt(req.params.id)-1] = req.body;
    res.status(204).send();
});


//atualizar stats parcial
app.patch("stats/:id", (req, res) =>{
    //campos de atualização
    const {nome} = req.body;
    let stats = stats[parseInt(req.params.id)-1] = req.body;
    stats.nome = nome ? nome : stats.nome;

    stats[parseInt(req.params.id)-1] = req.body = stats;
    res.status(204).send();

    //isso, jogador.nome = nome ? nome : jogador.nome é 
    // = isso 
    /*
    if (nome existir)
        aluno.nome = nome;
    else 
        aluno.nome = aluno.nome
    */

});

//deletar stats
app.delete("/stats/:id", req, res =>{
    const {id} = req.params;
    stats.splice(id-1,1);
    res.status(204).send();
});

//listar competicao
app.get('/competicao', (req, res) => {
    res.status(200).json(competicao);
});

//vizualizar competicao
app.get('/competicao/:id', (req, res) => {
    res.status(200).json(competicao[parseInt(req.params.id)-1]);
});

//criar competicao
app.post("/competicao",(req, res) => {
    let competicao = req.body
    competicao.push(competicao);
    res.status(201).json();
});

//atualizar todas as competicoes 
app.put("/competicao", (req, res) =>{
    competicao[parseInt(req.params.id)-1] = req.body;
    res.status(204).send(competicao);
});


//atualizar competicao parcial
app.patch("competicao/:id", (req, res) =>{
    //campos de atualização
    const {nome} = req.body;
    let competicao = competicao[parseInt(req.params.id)-1] = req.body;
    competicao.nome = nome ? nome : competicao.nome;

    competicao[parseInt(req.params.id)-1] = req.body = competicao;
    res.status(204).send();

    //isso, jogador.nome = nome ? nome : jogador.nome é 
    // = isso 
    /*
    if (nome existir)
        aluno.nome = nome;
    else 
        aluno.nome = aluno.nome
    */

});


//deletar competicao
app.delete("/competicao/:id", req, res =>{
    const {id} = req.params;
    competicao.splice(id-1,1);
    res.status(204).send();
});

//listar escalacao
app.get('/escalacao', (req, res) => {
    res.status(200).json(escalacao);
});

//vizualizar escalacao
app.get('/escalacao/:id', (req, res) => {
    res.status(200).json(escalacao[parseInt(req.params.id)-1]);
});

//criar escalacao
app.post("/escalacao",(req, res) => {
    let escalacao = req.body
    escalacao.push(escalacao);
    res.status(201).json(escalacao);
});

//atualizar todas as escalacoes 
app.put("/escalacao", (req, res) =>{
    escalacao[parseInt(req.params.id)-1] = req.body;
    res.status(204).send();
});


//atualizar escalacao parcial
app.patch("escalcao/:id", (req, res) =>{
    //campos de atualização
    const {nome} = req.body;
    let escalacao = escalacao[parseInt(req.params.id)-1] = req.body;
    escalacao.nome = nome ? nome : escalacao.nome;

    escalacao[parseInt(req.params.id)-1] = req.body = escalacao;
    res.status(204).send();

    //isso, jogador.nome = nome ? nome : jogador.nome é 
    // = isso 
    /*
    if (nome existir)
        aluno.nome = nome;
    else 
        aluno.nome = aluno.nome
    */

});

//deletar escalacao 
app.delete("/escalacao/:id", req, res =>{
    const {id} = req.params;
    escalacao.splice(id-1,1);
    res.status(204).send();
});

app.listenerCount(port, () => console.log("Api está sendo executada :)"));

