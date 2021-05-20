import React, { useState } from 'react'

import { NewOrderModal, OrderListItem } from '../components';
import { MESSAGES } from '../../constants';
import { useTransportDataRequest } from '../hooks';
import { Button, Divider, List } from 'antd';

export const OrdersWidget = ({ tables }) => {
  const [isNewOrderModalVisible, setNewOrderModalVisible] = useState()
  const closeModal = () => setNewOrderModalVisible(false)
  const openModal = () => setNewOrderModalVisible(true)
  const [data, , fetchOrders, deleteOrder, addOrder] = useTransportDataRequest({
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
      <Divider orientation="left">
        Orders
        {' '}
        <Button type="button" onClick={fetchOrders}>Reload orders</Button>
        {' '}
        <Button type="button" onClick={openModal}>+ Add new order</Button>
      </Divider>
      <List
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <OrderListItem key={item.id} {...item} onDelete={deleteOrder} />
          </List.Item>
        )}
      />
      <NewOrderModal
        tables={tables} 
        onSubmit={onAddOrder}
        visible={isNewOrderModalVisible}
        onClose={closeModal}
      />
    </div>
  )
}