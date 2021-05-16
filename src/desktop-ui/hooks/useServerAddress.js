import { useEffect, useState } from 'react'
import { MESSAGES } from '../../constants'

/**
 * If requested once - there is no need to re-request it
 */
let cachedServerAddress = ''

export const useServerAddress = () => {
  const [address, setAddress] = useState(cachedServerAddress)
  useEffect(() => {
    window.ipcRenderer.send(MESSAGES.GET_SERVER_ADDRESS)
    window.ipcRenderer.on(MESSAGES.GET_SERVER_ADDRESS_REPLY, (event, data) => {
      if (!cachedServerAddress) setAddress(data)
      cachedServerAddress = data
    })
  }, [address])

  return address
}