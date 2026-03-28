import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Dash from './pages/Dash'
// import Meal from './pages/Meal'
import Info from './pages/Info'
import Standard from './pages/Standard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/details' element= {<Details/>}/>
        <Route path='/info' element= {<Info/>}/>
        <Route path='/dash' element= {<Dash/>}/>
        <Route path='/stance' element={<Standard/>}/>
        {/* <Route path='/meal' element={<Meal/>}/> */}
      </Routes>
    </Router>
  )
}

export default App