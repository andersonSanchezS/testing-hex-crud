
/* eslint-disable @typescript-eslint/no-explicit-any */

// Id Generator
import { nanoid } from 'nanoid'

import { sequelize } from '@lib/db'
import Sequelize from 'sequelize'

import { IProjectModel } from './types'


import ProjectLog from '@log/project/projectLogs'

const ProjectModel = () => sequelize.define<IProjectModel>('projects', {
    pIdAuto: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true
    },

    pId: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },

    pName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },

    pPriority: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },

    pDescription: {
        type: Sequelize.STRING(255),
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },

    pState: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }

}, {
    timestamps: true,
    paranoid: true,
    hooks: {
        beforeCreate: (attributes: any, options: any) => {
            const id = !!attributes.aId
            options.rqType = options.updateOnDuplicate ? id ? 'BULKUPDATE' : 'BULKCREATE' : 'CREATE'
            attributes.aId = attributes.aId || nanoid(32)

            return options
        },
        afterUpdate: (attributes: any, options: any) => {
            ProjectLog.create({
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
            ProjectLog.create({
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


export default ProjectModel