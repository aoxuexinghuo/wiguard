import express, { Router } from 'express'
import asyncErrors from 'express-async-errors'
import { createServer } from 'vite'
import dotenv from 'dotenv'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

void asyncErrors
dotenv.config()
const app = express()
let port: number

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
  const vite = await createServer({
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
app.listen(port)

export { apis }