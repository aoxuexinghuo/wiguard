import { apis } from "../main.js"

apis.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' })
})