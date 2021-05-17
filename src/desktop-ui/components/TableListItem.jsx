import React from 'react'
import { Button, Col, Row } from 'antd'
import { Link } from 'react-router-dom'

export const TableListItem = ({ id, name, onDelete }) => {
  return (
    <Row>
      <Col span={16}>
        <Link to={`/tables/${id}`}>
          <h3 className="w-50">{name}</h3>
        </Link>
      </Col>
      <Col span={8}>
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </Col>
    </Row>
  )
}
