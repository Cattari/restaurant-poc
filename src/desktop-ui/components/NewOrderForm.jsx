import React, { useState } from 'react'
import { Button, Select, Row, Col } from 'antd'

export const NewOrderForm = ({ tables, onSubmit }) => {
  const [newOrderContent, setNewOrderContent] = useState('')
  const [selectedTableId, setSelectedTableId] = useState(null)
  const isSubmitDisabled = !newOrderContent || !selectedTableId
  const onAddOrder = () => {
    if (isSubmitDisabled) return
    onSubmit({ content: newOrderContent, table_id: selectedTableId })
    setNewOrderContent('')
  }

  return (
    <>
      <Row>
        <Col span={24}> 
          <textarea 
            value={newOrderContent} 
            onChange={(event) => setNewOrderContent(event.target.value)} 
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Select a table"
            optionFilterProp="children"
            onChange={setSelectedTableId}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {tables.map(({ name, id }) => (
              <Select.Option value={id}>{name}</Select.Option>
            ))}
          </Select>
        </Col>
        <Col span={12}>
          <Button 
            type="button" 
            disabled={isSubmitDisabled} 
            onClick={onAddOrder}
          >
            Add order
          </Button>
        </Col>
      </Row>
    </>
  )
}
