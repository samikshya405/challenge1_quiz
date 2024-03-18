import React from 'react'
import LandingPage from './component/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Question from './component/Question'
import Success from './component/Success'

const App = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/question/:id' element={<Question/>}/>
      <Route path='/success/:id1/:id2' element={<Success/>}/>
    </Routes>
    </>
  )
}

export default App