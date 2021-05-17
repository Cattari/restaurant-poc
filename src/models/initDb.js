import fs from 'fs'
import { initRestaurantTablesData } from "./restaurantTables";

const { getDbPath } = require("../helpers/getDbPath");

export const initDb = (callback) => {
  fs.writeFile(getDbPath(), '', { flag: 'wx' }, async function (err) {
    await initRestaurantTablesData()
    callback(true)
  });
}