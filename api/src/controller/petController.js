import {consulta, cadastro} from './repository/petRepository.js'
import {Router} from 'express';

const server = Router();

server.get('/busca/:nome', async (req, resp) =>{
    try{
        const {id} = req.params;
        const resposta = await consulta(id)
        if(!resposta){
            throw new Error('Inválidos');
        }
        resp.send(resposta);
    } catch (err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('busca/nome', async (req, resp) => {
    try{
        const {nome} = req.body;
        const resposta = await cadastro(nome);
        if(!resposta){
            throw new error('Inválidos');
        }
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default serever