import React from 'react'
import { useState } from 'react'

const Passwordhide = () => {
    let [showPassword , setShwoPassword] = useState(false);

    function toggle(){
      setShwoPassword(!showPassword);
    }   

  return (
    <div>
        <input type={showPassword ? 'text':'password'} 
        placeholder = 'enter password'
        />
        <button onClick={toggle}>btn</button>
    
    </div>
  )
}

export default Passwordhide