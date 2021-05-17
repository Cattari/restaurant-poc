const { ipcMain } = require('electron')
const { MESSAGES, SERVER_PORT } = require('../constants')
const { getLocalIpAddress } = require('../helpers/networkInterfaces')
const { addOrder, getOrders, deleteOrder } = require('../models')
const { 
  getRestaurantTables, 
  addRestaurantTable, 
  deleteRestaurantTable,
} = require('../models/restaurantTables')

ipcMain.on(MESSAGES.GET_SERVER_ADDRESS, (event, arg) => {
  console.log(MESSAGES.GET_SERVER_ADDRESS, arg) // prints "ping"
  event.reply(
    MESSAGES.GET_SERVER_ADDRESS_REPLY, 
    `http://${getLocalIpAddress()}:${SERVER_PORT}`
  )
})

ipcMain.on(MESSAGES.GET_TABLES, async (event, arg) => {
  const result = await getRestaurantTables()
  event.reply(
    MESSAGES.GET_TABLES_REPLY, 
    result
  )
})

ipcMain.on(MESSAGES.ADD_TABLE, async (event, arg) => {
  const result = await addRestaurantTable(arg)
  event.reply(
    MESSAGES.ADD_TABLE_REPLY, 
    result
  )
})

ipcMain.on(MESSAGES.DELETE_TABLE, async (event, arg) => {
  console.log({ arg })
  const result = await deleteRestaurantTable(arg)
  event.reply(
    MESSAGES.DELETE_TABLE_REPLY, 
    result
  )
})

ipcMain.on(MESSAGES.GET_ORDERS, async (event, arg) => {
  const result = await getOrders()
  event.reply(
    MESSAGES.GET_ORDERS_REPLY, 
    result
  )
})

ipcMain.on(MESSAGES.ADD_ORDER, async (event, arg) => {
  const result = await addOrder(arg)
  event.reply(
    MESSAGES.ADD_ORDER_REPLY, 
    result
  )
})

ipcMain.on(MESSAGES.DELETE_ORDER, async (event, arg) => {
  const result = await deleteOrder(arg)
  event.reply(
    MESSAGES.DELETE_ORDER_REPLY, 
    result
  )
})
