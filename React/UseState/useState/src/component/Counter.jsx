
import { useState } from 'react';

 const Counter = () => {
    let [counter,setCounter] = useState(2);
    const addValue = ()=>{
    counter  = counter+1;
    setCounter(counter);
    

  }

  const removeValue = ()=>{
    counter = counter-1;
    setCounter(counter);
  }

  return (
    <div>
        <h1>conuter project</h1>
          <h3>conuter value:{counter}</h3>

          <button onClick={addValue}>addValue</button>
          <br />
          <br />

          <button onClick={removeValue}>remove Value</button>
    </div>
  )
}

export default Counter

