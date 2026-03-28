import React, { useEffect, useState } from 'react'
import '../App.css'
import Meal from '../Component/Meal'
import { Link } from 'react-router-dom'

const Dash = () => {

  const [search,setSearch] = useState("")
  const [data,setData] = useState([])
  const Fetch = async()=>{
    const rep = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?f=${search==""?"a":search}`)
    const rep2 = await rep.json()
    setData(rep2.meals)
    console.log(rep2.meals)
  }


  useEffect(()=>{
    Fetch()
  },[search])

  return (
    <div>
      <div className='search'>
        <input className='search-input' onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search e.g a/A...' />
        <Link to={"/"}>
            HOME
          </Link>
      </div>
      <div className='lorry'>
        {
          data.map((item, index )=>{
            return(
              <Meal key={index} value={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Dash