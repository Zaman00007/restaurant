import React from 'react'
import {data} from '../restApi.json'
import Tilt from 'react-parallax-tilt';
const Qualities = () => {
  return (
    <>
        <section className='qualities' id='qualities'>
          
          <div className="container">
          
            {
              data[0].ourQualities.map(element=>{
                return(
                  
                  <div className='card' key={element.id}>
                    <Tilt>
                      <img src={element.image} alt={element.title} />
                      <p className='title'>{element.title}</p>
                      <p className='description'>{element.description}</p>
                      </Tilt>
                  </div>
                  
                )
              })
            }
            
          </div>
          
        </section>
    </>
  )
}

export default Qualities
