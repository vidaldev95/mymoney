import React from 'react'
import Mouth from './Mouth'
import AddMouth from './AddMouth'

const Home = () => {
    return(
      <div className='container'>
        <AddMouth />      
        <Mouth />
      </div>
    )
  }

export default Home