import { Button } from 'antd';
import React from 'react'
import { useParams, useHistory } from "react-router-dom";

export const TablePage = () => {
  const { id } = useParams();
  const { goBack } = useHistory()

  return (
    <div>
      <Button type="button" onClick={goBack}>Go back</Button>
      <h1>Table {id}</h1>
    </div>
  )
}
