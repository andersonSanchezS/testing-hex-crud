// Sequelize
import { Sequelize } from 'sequelize'
import { Sequelize as TSequelize } from 'sequelize/types'
let dbInstance: TSequelize | null = null
// Envs, Configs
import {
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_PORT,
    DB_DIALECT
} from '@envs/index'


export default function sequelize(): Sequelize {
    if (!dbInstance) {
        dbInstance = new Sequelize(DB_NAME(), DB_USER(), DB_PASS(), {
            host: DB_HOST(),
            dialect: DB_DIALECT(),
            port: DB_PORT()
        })
    }
    return dbInstance
}