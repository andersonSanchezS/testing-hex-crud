
// Sequelize types
import Sequelize from 'sequelize'

// Project logs interface
import { TTaskLogInstance } from './types'

// Db connection
import sequelize from '@lib/db'
const db = sequelize()

const TaskLog = db.define<TTaskLogInstance>('taskLog', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tId: Sequelize.STRING(50),
    tIdAuto: Sequelize.INTEGER,
    tName: Sequelize.STRING(50),
    tDone: Sequelize.BOOLEAN,
    aLog: Sequelize.INTEGER,
    userId: Sequelize.STRING(50)
}, {
    timestamps: true,
    paranoid: true
})


export default TaskLog