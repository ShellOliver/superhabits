import * as typeorm from "typeorm";
let ormconfig = require('../ormconfig')

export async function Conn(name) {
    try {
        return await typeorm.getConnection('default').getRepository(name)
    } catch (error) {
        if (error.name === 'ConnectionNotFoundError') {
            ormconfig.entities = ['./db/EntitySchema/*.schema.js']
            await typeorm.createConnection(ormconfig)
            return Conn(name)
        }
    }
}

