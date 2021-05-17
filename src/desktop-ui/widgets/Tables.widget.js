import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'antd';
import QRCode from 'qrcode'

import { useServerAddress } from '../hooks';
import { CopyToClipboardButton, TableListItem } from '../components';
import { MESSAGES } from '../../constants';
import { useTransportDataRequest } from '../hooks';

export const TablesWidget = () => {
  const [data, isLoading, fetchData, deleteTable, addTable] = useTransportDataRequest({
    dataRequest: MESSAGES.GET_TABLES, 
    dataReply: MESSAGES.GET_TABLES_REPLY,
    deleteRequest: MESSAGES.DELETE_TABLE,
    deleteReply: MESSAGES.DELETE_TABLE_REPLY,
    addRequest: MESSAGES.ADD_TABLE,
    addReply: MESSAGES.ADD_TABLE_REPLY,
  })
  const [newTableName, setNewTableName] = useState('')
  const onAddTable = () => {
    addTable({ name: newTableName })
    setNewTableName('')
  }

  return (
    <div>
      <h2>Add new table</h2>
      <Row>
        <Col span={12}> 
          <input 
            value={newTableName} 
            onChange={(event) => setNewTableName(event.target.value)} 
          />
        </Col>
        <Col span={12}> 
          <Button type="button" onClick={onAddTable}>Add table</Button>
        </Col>
      </Row>
      <h2>Tables</h2>
      {data.map(({ id, name }) => (
        <TableListItem key={id} id={id} name={name} onDelete={deleteTable} />
      ))}
    </div>
  )
}