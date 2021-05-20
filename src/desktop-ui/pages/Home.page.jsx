import React from 'react'
import { MESSAGES } from '../../constants'
import { useTransportDataRequest } from '../hooks'

import { WaiterConnectorWidget, TablesWidget } from '../widgets'
import { OrdersWidget } from '../widgets/Orders.widget'

export const HomePage = () => {
  const [data, isLoading, fetchData, deleteTable, addTable] = useTransportDataRequest({
    dataRequest: MESSAGES.GET_TABLES, 
    dataReply: MESSAGES.GET_TABLES_REPLY,
    deleteRequest: MESSAGES.DELETE_TABLE,
    deleteReply: MESSAGES.DELETE_TABLE_REPLY,
    addRequest: MESSAGES.ADD_TABLE,
    addReply: MESSAGES.ADD_TABLE_REPLY,
  })

  return (
    <div>
      <h1>Welcome to the Demo Restaurant App 0.0.1</h1>
      <WaiterConnectorWidget />
      <TablesWidget 
        data={data} 
        deleteTable={deleteTable} 
        addTable={addTable}  
      />
      <OrdersWidget tables={data} />
    </div>
  )
}
