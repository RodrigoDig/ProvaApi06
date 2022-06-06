import {Router} from 'express'
import { consultarPet, inserirPet } from '../repository/petRepository.js';



const server = Router();


server.post('/pet', async (req,resp) => {

    try{
        const pet = req.body;
        const chamarFuncao = await inserirPet(pet);
        resp.send(pet)

    } catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

server.get('/consulta', async(req, resp) => {
    try{

        const funcao = await consultarPet();
        resp.send(funcao)

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})



export default server;