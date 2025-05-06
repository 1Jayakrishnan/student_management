import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Topnavbar from './Pages/Topnavbar'
import Home from './Pages/Home';
import Addteacher from './Pages/Addteacher';

function App() {
  return (
    <div>
      <Topnavbar></Topnavbar>
      <Home></Home>
      <Addteacher></Addteacher>
    </div>
  )
}

export default App
