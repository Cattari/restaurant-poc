import { useCallback, useEffect, useState } from 'react'

const DEFAULT_DATA = []

export const useTransportDataRequest = ({
  dataRequest,
  dataReply,
  deleteRequest,
  deleteReply,
  addRequest,
  addReply,
  defaultData = DEFAULT_DATA,
}) => {
  const [data, setData] = useState(defaultData)
  const [isLoading, setIsLoading] = useState(false)
  const requestData = useCallback(() => {
    window.ipcRenderer.send(dataRequest)
    setIsLoading(true)
    window.ipcRenderer.on(dataReply, (event, data) => {
      setData(data)
      setIsLoading(false)
    })
  }, [setData, dataRequest, dataReply])

  const deleteData = useCallback((id) => {
    window.ipcRenderer.send(deleteRequest, id)
    window.ipcRenderer.on(deleteReply, () => {
      setData(data.filter((item) => item.id !== id))
    })
  }, [setData, data, deleteRequest, deleteReply])

  const addData = useCallback((newData) => {
    window.ipcRenderer.send(addRequest, newData)
    window.ipcRenderer.on(addReply, (_, replyData) => {
      setData([...data, { ...newData, id: replyData[0] }])
    })
  }, [setData, data, addRequest, addReply])

  useEffect(() => {
    requestData()
  }, [requestData])

  return [data, isLoading, requestData, deleteData, addData]
}