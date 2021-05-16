const { ipcMain } = require('electron')
const { MESSAGES, SERVER_PORT } = require('../constants')
const { getLocalIpAddress } = require('../server/helpers')

ipcMain.on(MESSAGES.GET_SERVER_ADDRESS, (event, arg) => {
  console.log(MESSAGES.GET_SERVER_ADDRESS, arg) // prints "ping"
  event.reply(
    MESSAGES.GET_SERVER_ADDRESS_REPLY, 
    `http://${getLocalIpAddress()}:${SERVER_PORT}`
  )
})
