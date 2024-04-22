import { apis } from "../server.js"

apis.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' })
})