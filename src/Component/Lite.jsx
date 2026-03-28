import React from 'react'
import "./Lite.css"
import { useNavigate } from 'react-router-dom'

const Lite = ({value}) => {

    const navigation=useNavigate()
  return (
    <div className='green'>
        <div className='red'>
            <img src={value.images[0]} alt="" />
        </div>
        <div className='ged'>
            <div className='win'>
                <div className='wed'>
                    <h1>
                        {value.rating} star
                    </h1>
                </div>
                <div className='wed'>
                    <h1>
                        {value.category}
                    </h1>
                </div>
            </div>
            <div className='qed'>
                <div className='wed'>
                    <h1>
                        $ {value.price}
                    </h1>
                </div>
                <div className='wed'>
                    <h1>
                        {value.title}
                    </h1>
                </div>
            </div>
        </div>
        <div className='rrr'>
            <button onClick={()=>navigation("/details",{state:value})}>
                CLICK FOR INFO
            </button>
        </div>
        
    </div>
  )
}

export default Lite