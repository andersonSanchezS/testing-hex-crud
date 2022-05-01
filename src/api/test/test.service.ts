import { Request, Response } from 'express'

import ProjectModel from '@dataSources/lib/sequelize/models/project'

export const testRoute = (req: Request, res: Response) => {
    res.send('ruta de prueba')
}
