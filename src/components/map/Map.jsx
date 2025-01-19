import React from 'react'
import EmbededMap from './EmbededMap'

const Map = () => {
  return (
    <div className='max-w-full overflow-hidden px-6'>
      <h3 className='font-poppins text-center p-4 font-semibold'>Navigate your way</h3>
    <EmbededMap />
    </div>
  )
}

export default Map