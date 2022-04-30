import Sequelize from 'sequelize'

import { TProjectLogInstance } from './types'

import { sequelize } from '@lib/db'

const ProjectLog = sequelize.define<TProjectLogInstance>('projectLog', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pId: Sequelize.INTEGER,
    pIdAuto: Sequelize.INTEGER,
    pName: Sequelize.STRING(50),
    pPriority: Sequelize.INTEGER,
    pDescription: Sequelize.STRING(50),
    pState: Sequelize.INTEGER,
    aLog: Sequelize.INTEGER,
    userId: Sequelize.STRING(50)
}, {
    timestamps: true,
    paranoid: true
})


export default ProjectLog