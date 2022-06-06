import 'dotenv/config'

import {con} from './repository/connection.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.use(petController);
server.use(petRepository);


server.listen(process.env.PORT,
               () => console.log(`API online na porta ${process.env.PORT}`));