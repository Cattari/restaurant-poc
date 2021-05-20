import React from 'react'
import { Button, Card, Col, Row } from 'antd'
import { Link } from 'react-router-dom'

export const TableListItem = ({ id, name, onDelete }) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Row>
        <Col span={16}>
          <Link to={`/tables/${id}`}>
            <h3>{name}</h3>
          </Link>
        </Col>
        <Col span={8}>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Col>
      </Row>
    </div>
  )
}
