import React, { useState } from 'react'
import { Button, Divider, List } from 'antd';

import { NewTableModal, TableListItem } from '../components';

export const TablesWidget = ({ data, deleteTable, addTable }) => {
  const [isNewTableModalVisible, setNewTableModalVisible] = useState()
  const closeModal = () => setNewTableModalVisible(false)
  const openModal = () => setNewTableModalVisible(true)

  return (
    <div>
      <Divider orientation="left">
        Tables
        {' '}
        <Button type="button" onClick={openModal}>+ Add new table</Button>
      </Divider>
      <List
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <TableListItem key={item.id} id={item.id} name={item.name} onDelete={deleteTable} />
          </List.Item>
        )}
      />
      <NewTableModal
        visible={isNewTableModalVisible}
        onClose={closeModal}
        onSubmit={addTable} 
      />
    </div>
  )
}