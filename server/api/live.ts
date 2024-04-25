import { apis, io } from "../main.js"


io.on('connection', socket => {
  console.log('connection incoming')

  socket.on('csi', (data) => {
    // socket.broadcast.emit('csi', data)
    io.emit('csi', data)
  })
})
