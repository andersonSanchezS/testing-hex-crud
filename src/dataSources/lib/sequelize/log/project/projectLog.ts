
// Sequelize types
import Sequelize from 'sequelize'

// Project logs interface
import { TProjectLogInstance } from './types'

// Db connection
import sequelize from '@lib/db'
const db = sequelize()

const ProjectLog = db.define<TProjectLogInstance>('projectLog', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pId: Sequelize.STRING(50),
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