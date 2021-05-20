import React, { useState } from 'react'
import { Button, Row, Col, Modal } from 'antd'

export const NewTableModal = ({ visible, onClose, onSubmit }) => {
  const [newTableName, setNewTableName] = useState('')
  const onAddTable = () => {
    onSubmit({ name: newTableName })
    onClose()
    setNewTableName('')
  }

  return (
    <Modal
      title="Add new order" 
      visible={visible} 
      onCancel={onClose}
      footer={[
        <Button 
          type="button" 
          disabled={!newTableName} 
          onClick={onAddTable}
        >
          Add table
        </Button>,
        <Button type="button" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <Row>
        <Col span={24}> 
          <input 
            value={newTableName} 
            onChange={(event) => setNewTableName(event.target.value)} 
          />
        </Col>
      </Row>
    </Modal>
  )
}
