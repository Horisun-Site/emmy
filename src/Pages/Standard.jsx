import React, { useEffect } from 'react'
import "./Standard.css"
import { useCount, useData } from '../../store'

const Standard = () => {
  const {data,useAdd,useMinus}=useCount()
  const {value,FetchData}=useData()


  useEffect(()=>{
    FetchData()
  },[])

  console.log(value)

  return (
    <div className='bad'>
      <button onClick={useMinus} className='bull'>
        -
      </button>
    <h1 className='win'>{data}</h1>
    <button onClick={useAdd} className='bull'>
      +
    </button>
    </div>
  )
}

export default Standard