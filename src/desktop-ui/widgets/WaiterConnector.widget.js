import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import QRCode from 'qrcode'

import { useServerAddress } from '../hooks';
import { CopyToClipboardButton } from '../components';

const QR_CODE_CANVAS_ID = 'waiter-qr-code-connect-canvas'

export const WaiterConnectorWidget = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const serverAddress = useServerAddress()
  const showModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      QRCode.toCanvas(
        document.getElementById(QR_CODE_CANVAS_ID), 
        serverAddress, 
        {
          width: 300,
          height: 300,
          margin: 0,
        },
        function (error) {
          if (error) console.error(error)
        }
      )
    }, 100)
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="button" onClick={showModal}>Connect waiter app</Button>
      <Modal 
        title="Connect waiter app" 
        visible={isModalVisible} 
        onCancel={handleCancel}
        footer={[
          <Button type="button" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <p>Use QR code: </p>
        <canvas id={QR_CODE_CANVAS_ID} />
        <p>or paste this URL into your browser: {serverAddress}</p>
        <CopyToClipboardButton data={serverAddress}/>
      </Modal>
    </>
  )
}