// import knex from 'knex'
import db from '../db'

const MODEL_NAME = 'orders'

export const initOrdersData = () => {
  return db.schema.createTableIfNotExists(MODEL_NAME, function (table) {
    table.increments().primary();
    table.integer('table_id')
    table.foreign('table_id').references('restaurantTables.id')
    table.string('content');

    table.timestamp('created_at').defaultTo(db.fn.now())
  })
}

export const getOrder = (id) => {
  return db(MODEL_NAME).select('*').where({ id })
}

export const addOrder = async (order) => {
  const [insertId] = await db(MODEL_NAME).insert(order)

  return await getOrder(insertId)
}

export const deleteOrder = (id) => {
  return db(MODEL_NAME).where({ id }).del()
}

export const getOrders = async (possibleFilters) => {
  const baseQuery = db(MODEL_NAME)
    .select('orders.id', 'orders.content', 'orders.table_id', 'restaurant_tables.name as tableName')
    .join('restaurant_tables', 'orders.table_id', 'restaurant_tables.id')

  if (possibleFilters) {
    return await baseQuery.where(possibleFilters)
  }
  
  return await baseQuery
}
