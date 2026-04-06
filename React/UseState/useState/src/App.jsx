import { useState } from 'react'

import Counter from './component/counter'
import Passwordhide from './component/Passwordhide'
import ShowContenet from './component/ShowContenet'
// import './App.css'

function App() {
  

  return (
    <>
        <Counter/> 

        <h3>password hide</h3>
        <Passwordhide/>

        <h3>show/hide content</h3>
        <ShowContenet/>
    </>
  )
}

export default App
