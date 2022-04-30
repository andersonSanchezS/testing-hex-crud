import { Model } from 'sequelize'

export interface IProject{
    pIdAuto:number,
    pId:string,
    pName:string,
    pPriority:number,
    pDescription:string,
    pState:number,
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}


// Interface Model
export interface IProjectModel extends Model<IProject>, IProject {}