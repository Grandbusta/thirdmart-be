import createError from 'http-errors'
import express, { Request, Response, NextFunction, Application } from 'express'
import logger from 'morgan'
import { headers } from '../api/middlewares/headers'
import routes from '../api'
import { Server } from 'socket.io'

const expressLoader = async (app: Application, io: Server) => {
  app.use(headers)
  app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.get('/favicon.ico', (req: Request, res: Response) =>
    res.status(204).end()
  )
  app.use('/', routes(io))

  // catch 404 and forward to error handler
  app.use(function (req: Request, res: Response, next: NextFunction) {
    next(createError(404))
  })

  // error handler
  app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.send({ message: 'error', error: err.status })
  })
  console.log('express initialized')
  return app
}

export default expressLoader
