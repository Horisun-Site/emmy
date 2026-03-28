import React from 'react'
import './Meal.css'
import { useNavigate } from 'react-router-dom'

const Meal = ({value}) => {

  const navigation=useNavigate()
  return (
    <div className='ssss'>
      <img src= {value.strMealThumb} alt="" />

      <h1>{value.strMeal}</h1>
      <h2>{value.strCategory}</h2>
      <h3>{value.strArea}</h3>

      <button onClick={()=>navigation("/info",{state:value})}>
        click me
      </button>
    </div>
  )
}

export default Meal