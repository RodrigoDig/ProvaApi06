import { con } from "./connection"

export function consulta(nome){
    const comando = 
        `id_pet     int,
        INSERT INTO   ?`

    const [linhas] = await con.query(comando, [`%$(nome)$%`]);
    return linhas [0]
}

export function cadastro(id){
    const comando = 
        `id_pet          int,
        nm_pet           ?,
        dt_pet           ?,
        ds_pet           ? `
    const [resposta] = await con.query(comando, [pet.nome, pet.data, pet.descricao]);
    pet.id = resposta.insertId;
    return pet.id;
}