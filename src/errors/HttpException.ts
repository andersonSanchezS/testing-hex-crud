class HttpException extends Error {
    public status: number

    public message: string

    constructor(message: string, status: number) {
        super(message)

        this.status = status
        this.message = message

        // To capture the stack race (the logs)
        Error.captureStackTrace(this, this.constructor)
    }
}

export default HttpException