import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Topnavbar from './Pages/Topnavbar'
import Student from './Pages/Student'
import Home from './Pages/Home'
import Display from './Pages/Display'
import { useState } from 'react';

function App() {
  
  const [studId, setStudId] = useState()

  return (
    <div>
      <Topnavbar></Topnavbar>
      <Home></Home>
      <Student studId={studId}></Student>
      <Display setStudId={setStudId}></Display>
     
    </div>
  )
}


export default App
