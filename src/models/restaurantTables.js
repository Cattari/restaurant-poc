import db from '../db'

const MODEL_NAME = 'restaurant_tables'

export const initRestaurantTablesData = () => {
  return db.schema.createTableIfNotExists(MODEL_NAME, function (table) {
    table.increments().primary();
    table.string('name');
  })
}

export const addRestaurantTable = (table) => {
  return db(MODEL_NAME).insert(table)
}

export const deleteRestaurantTable = (id) => {
  return db(MODEL_NAME).where({ id }).del()
}

export const getRestaurantTables = async () => {
  const result = await db.select('*').from(MODEL_NAME)
  return result
}

export const getRestaurantTable = async (id) => {
  const result = await db(MODEL_NAME)
    .join('orders', 'order.table_id', `${MODEL_NAME}.id`)
    .select('*')
  return result
}
