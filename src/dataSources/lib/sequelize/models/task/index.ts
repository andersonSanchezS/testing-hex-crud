// Id Generator
import { nanoid } from 'nanoid'

// Sequelize and database connection
import sequelize from '@lib/db'
const db = sequelize()

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { ITaskModel } from './types'

// Task log model
import TaskLog from '@log/task/taskLog'


const TaskModel = db.define<ITaskModel>('task', {
    tIdAuto: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true
    },

    tId: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },

    tName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },

    tDone: {
        type: Sequelize.BOOLEAN,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        defaultValue: false
    }

}, {
    timestamps: true,
    paranoid: true,
    hooks: {
        beforeCreate: (attributes: any, options: any) => {
            const id = !!attributes.tId
            options.rqType = options.updateOnDuplicate ? id ? 'BULKUPDATE' : 'BULKCREATE' : 'CREATE'
            attributes.tId = attributes.tId || nanoid(32)
            return options
        },
        afterUpdate: (attributes: any, options: any) => {
            TaskLog.create({
                ...attributes?.dataValues,
                aLog: 2,
                userId: options.context?.uId,
                createdAt: undefined,
                updatedAt: undefined,
                deletedAt: undefined
            })
                .catch(() => undefined)

            // Return registered attributes
            return attributes
        },
        afterCreate: (attributes: any, options: any) => {
            TaskLog.create({
                ...attributes?.dataValues,
                aLog: options.rqType === 'BULKUPDATE' ? 2 : 1,
                userId: options.context?.uId,
                createdAt: undefined,
                updatedAt: undefined,
                deletedAt: undefined
            })
                .catch(() => undefined)

            // Return registered attributes
            return attributes


        }
    }
})


export default TaskModel