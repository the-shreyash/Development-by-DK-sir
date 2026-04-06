import React from 'react'

const Card = (props) => {

    console.log(props);
    
  return (
    <div className='card'>
        <div className='top' >
            <img src="" alt="..." />
            <button >Save</button>  
        </div>

        <div className='center'>
            <h3>{ props.name }</h3>
            <h2>Web developer</h2>
            <div className='tag'>
                <h4>location</h4>
                <h4>india</h4>
            </div>

        </div>

        <div className="bottom">
            <div>
                <h3>salary</h3>
                <p>noida</p>

            </div>
            <div>
                <button>Contact</button>

            </div>
        </div>
    </div>

  )
}

export default Card 