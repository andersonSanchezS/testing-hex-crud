import { Model } from 'sequelize'

// Types imports
import { ITask } from '@sqlModels/task/types'


interface ITaskLog extends ITask {
    id: string
    aLog: number
    userId: string
}

export type TTaskLogInstance = Model<ITaskLog>
