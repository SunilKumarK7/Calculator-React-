import React from 'react'
import Counter from './Counter'
import Addition from './Addition'
import Subtraction from './Subtraction'
import Temp from './Temp'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Bmi from './Bmi'
import Calorie from './Calorie'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
          <Routes>
            <Route path='addition' element={<Addition></Addition>}></Route>
            <Route path='subtraction' element={<Subtraction></Subtraction>}></Route>
            <Route path='temperature' element={<Temp></Temp>}></Route>
            <Route path='counter' element={<Counter></Counter>}></Route>
            <Route path='bmi' element={<Bmi></Bmi>}></Route>
            <Route path='calorie' element={<Calorie></Calorie>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
