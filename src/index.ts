import express from 'express'
import loaders from './loaders'
import { Server } from 'socket.io'

async function startServer() {
  const app = express()

  const PORT = process.env.PORT || 4000

  let server = app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`)
  })
  const io = new Server(server, {
    cors: {
      origin: '*',
    },
    transports: ['websocket', 'polling'],
  })
  await loaders(app, io)
}

startServer()
