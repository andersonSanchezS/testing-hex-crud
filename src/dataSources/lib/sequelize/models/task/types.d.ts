import { Model } from 'sequelize'

export interface ITask{
    tIdAuto?:number,
    tId?:string,
    tName:string,
    tDone:boolean,
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}


// Interface Model
export interface ITaskModel extends Model<ITask>, ITask {}