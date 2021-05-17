import React from 'react'

import { WaiterConnectorWidget, TablesWidget } from '../widgets'
import { OrdersWidget } from '../widgets/Orders.widget'

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Demo Restaurant App 0.0.1</h1>
      <WaiterConnectorWidget />
      <TablesWidget />
      <OrdersWidget />
    </div>
  )
}
