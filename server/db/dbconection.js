import * as typeorm from "typeorm";

export async function Conn(name) {
    try {
        return await typeorm.getConnection('default').getRepository(name)
    } catch (error) {
        if (error.name === 'ConnectionNotFoundError') {
            await typeorm.createConnection()
            return Conn(name)
        }
    }
}

