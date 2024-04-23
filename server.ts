import express, { Router } from 'express'
import { createServer as createHttpServer } from 'http'
import asyncErrors from 'express-async-errors'
import { createServer as createViteServer } from 'vite'
import { Server } from 'socket.io'
import dotenv from 'dotenv'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

let port: number
void asyncErrors
dotenv.config()

const app = express()
const server = createHttpServer(app)
const io = new Server(server)

const apis = Router()
app.use('/api', apis)
fs.readdirSync('api').forEach(file => {
  if (path.extname(file) === '.js') {
    import(`./api/${file}`)
  }
})
app.use('/api', (req, res) => {
  res.sendStatus(404)
})

if (process.env.NODE_ENV === 'development') {
  const vite = await createViteServer({
    server: { middlewareMode: true }
  })
  app.use(vite.middlewares)
  port = 5173
} else {
  app.use(express.static('dist'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'))
  })
  port = 3000
}

console.log(chalk.cyan(`server started at http://localhost:${port}/`))
server.listen(port)

export { apis, io }