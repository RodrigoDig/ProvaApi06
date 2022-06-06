import { con } from './connection.js'

export async function inserirPet(pet) {
    const comando =
        
        `insert into TB_PET (nm_pet)
         values             (?)`

        
    const resposta = await con.query(comando, [pet.nome])
    return resposta[0]
}

export async function consultarPet(pet) {
    const comando = 
        `select 
            id_pet            id,
            nm_pet            nome
        from tb_pet`
    const resposta = await con.query(comando)
    return resposta [0]
}