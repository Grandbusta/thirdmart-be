import express from 'express'
import loaders from './loaders'
import { Server } from 'socket.io'
import { testDbConnection } from './db'

async function startServer() {
    const app = express()
  const PORT = process.env.PORT || 4000

  let server = app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`)
    await testDbConnection()
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
