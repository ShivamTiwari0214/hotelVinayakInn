import React from 'react'
import EmbededMap from './EmbededMap'

const Map = () => {
  return (
    <div className='max-w-full overflow-hidden md:mt-28 px-10 min-h-96 py-5'>
      <h3 className='font-poppins text-center p-4 text-[5vw] font-semibold md:text-[45px]'>Navigate Your Way</h3>
    <EmbededMap />
    </div>
  )
}

export default Map