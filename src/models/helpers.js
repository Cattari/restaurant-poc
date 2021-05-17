const path = require('path')
const db = require('../db')
const location = path.join(__dirname, '')

const createModelTableIfNotExists = (modelName) => {
  return new Promise((resolve, reject) => {
    if (!db.valid(modelName)) {
      return db.createTable(modelName, location, (succ, msg) => {
        succ ? resolve(succ) : reject(succ)
      })
    }
  
    resolve(true)
  })
  
}

module.exports = {
  createModelTableIfNotExists
}
