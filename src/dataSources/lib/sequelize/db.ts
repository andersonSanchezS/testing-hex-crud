// sequelize
import { Sequelize } from 'sequelize';
import { Sequelize as TSequelize, Dialect } from 'sequelize/types';

// Envs, Configs
import {
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_PORT,
    DB_DIALECT,
} from '@envs/index';

console.log(DB_NAME(), DB_USER(), DB_PASS());

export const sequelize: TSequelize = new Sequelize(
    DB_NAME(),
    DB_USER(),
    DB_PASS(),
    {
        host: DB_HOST(),
        dialect: DB_DIALECT(),
        port: DB_PORT(),
    },
);
