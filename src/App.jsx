import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import Dash from "./pages/Dash.jsx";
import Info from "./pages/Info.jsx";
import Standard from "./pages/Standard.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/details' element= {<Details/>}/>
        <Route path='/info' element= {<Info/>}/>
        <Route path='/dash' element= {<Dash/>}/>
        <Route path='/stance' element={<Standard/>}/>
      </Routes>
    </Router>
  )
}

export default App