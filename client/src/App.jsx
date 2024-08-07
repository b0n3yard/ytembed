
import './App.css'
import Header from './components/Header'

import {Routes, Route} from 'react-router-dom'
import Vid from './pages/vid'
import Landing from './pages/Landing'

function App() {
  

  return (
    <>
    {/* <Header/> */}
    
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/vid' element={<Vid/>}/>
    </Routes>
      
    </>
  )
}

export default App
