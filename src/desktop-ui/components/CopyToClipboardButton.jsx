import React, { useRef, useState } from 'react'
import copyTOClipboard from 'clipboard-copy'
import { Button } from 'antd'

const initialText = 'Copy to clipboard'

export const CopyToClipboardButton = ({ data }) => {
  const [copyText, setCopyText] = useState(initialText)
  const isCopyingRef = useRef(false)
  const onCopyURLToClipboard = () => {
    if (isCopyingRef.current) return
    isCopyingRef.current = true

    copyTOClipboard(data)
    setCopyText('Copied!')
    setTimeout(() => {
      setCopyText(initialText)
      isCopyingRef.current = false
    }, 400)
  }

  return (
    <Button 
      type="button" 
      onClick={onCopyURLToClipboard}
    >
      {copyText}
    </Button>
  )
}