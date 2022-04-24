import { NextFunction, Request, Response } from 'express'
import httpException from '@errors/HttpException'


function ErrorHandler(err: httpException, req: Request, res: Response, next: NextFunction) {

    const status = err.status || 500
    const message = err.message || 'Something went wrong'

    return res.status(status).json({
        error: true,
        status,
        message
    })
}

export default ErrorHandler