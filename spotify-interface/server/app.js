import express from 'express'
import conectaNaDb from './db.js';
import cors from 'cors'
import artista from './models/Artista.js';

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (erro) => {
    console.error('Erro ao conectar no MongoDB', erro)
})

conexao.once('open', () => {
    console.log('Conectado ao MongoDB')
})

app.get('/artistas', async (req,res) =>{
    const listaArtistas = await artista.find({})
    res.status(200).json(listaArtistas)
})

app.get('/artistas/:id', async (req, res) => {
    const artistas = await artista.findById(req.params.id);
    res.status(200).json(artistas);
})

app.listen(3000, () =>{
    console.log('Servidor conectado')
})

