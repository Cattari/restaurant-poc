import React from 'react'

import { NewOrderForm, OrderListItem } from '../components';
import { MESSAGES } from '../../constants';
import { useTransportDataRequest } from '../hooks';
import { Button } from 'antd';

export const OrdersWidget = () => {
  const [tables] = useTransportDataRequest({
    dataRequest: MESSAGES.GET_TABLES, 
    dataReply: MESSAGES.GET_TABLES_REPLY,
  })
  const [data, isLoading, fetchOrders, deleteOrder, addOrder] = useTransportDataRequest({
    dataRequest: MESSAGES.GET_ORDERS, 
    dataReply: MESSAGES.GET_ORDERS_REPLY,
    deleteRequest: MESSAGES.DELETE_ORDER,
    deleteReply: MESSAGES.DELETE_ORDER_REPLY,
    addRequest: MESSAGES.ADD_ORDER,
    addReply: MESSAGES.ADD_ORDER_REPLY,
  })

  const onAddOrder = async (data) => {
    await addOrder(data)
    fetchOrders()
  }

  return (
    <div>
      <h2>Add new order</h2>
      <NewOrderForm tables={tables} onSubmit={onAddOrder}/>
      <h2>Orders</h2>
      <Button type="button" onClick={fetchOrders}>Reload orders</Button>
      {data.map((data) => (
        <OrderListItem key={data.id} {...data} onDelete={deleteOrder} />
      ))}
    </div>
  )
}