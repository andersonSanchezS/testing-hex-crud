import { Model } from 'sequelize'

// Types imports
import { IProject } from '@sqlModels/project/types'


interface IProjectLog extends IProject {
    id: string
    aLog: number
    userId: string
}

export type TProjectLogInstance = Model<IProjectLog>

