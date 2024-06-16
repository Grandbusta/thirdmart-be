import { Router } from 'express'
import userRouter from './routes/user'
import { Server } from 'socket.io'

export default function routes(io: Server) {
  const app = Router()
  io.on('connection', (socket) => {
    console.log(`${socket.id} connected`)
  })


  userRouter(app)

  return app
}
