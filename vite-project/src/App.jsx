import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Productview from './Pages/Productview'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<Productview/>}/>
    </Routes>

    
    
    </BrowserRouter>
   
      
 
  )
}

export default App
