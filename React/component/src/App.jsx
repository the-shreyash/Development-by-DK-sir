import { useState } from 'react'
import Card from './component/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <div className='parent'>
      <Card name = {'yash'}/>
      <Card setCount = {setCount}/>
    </div>
    
    </>
  )
}

export default App
