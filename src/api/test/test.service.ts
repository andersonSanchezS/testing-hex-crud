import { Request, Response } from 'express'

export const testRoute = (req: Request, res: Response) => {
    res.send('ruta de prueba')
}