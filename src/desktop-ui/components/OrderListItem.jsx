import React from 'react'
import { Button, Divider } from 'antd'

export const OrderListItem = ({ id, content, tableName, onDelete }) => {
  return (
    <>
      <div className="order-list-item">
        <p className="w-50">Order: {content}</p>
        <p className="w-50">Table: {tableName}</p>
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </div>
      <Divider />
    </>
  )
}
