
import React from 'react'
import { useState } from 'react'

const ShowContenet = () => {
    function Accordion({title,content}){
        const [isOpen, setIsOpen]= useState(false);
    }
    

    
  return (
    <div>
        <button onClick={()=>setIsOpen(!isOpen)}>
            {title} {!isOpen ?'Uparrow':'downArrow'}
        </button>

        {isOpen && (
            <p>{content}</p>
        )}

        
    </div>
  )
}

export default ShowContenet;