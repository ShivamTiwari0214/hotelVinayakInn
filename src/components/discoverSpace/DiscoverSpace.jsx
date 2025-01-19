import React from 'react'
import delux from '../ui/image/Delux.jpg'
import premium from '../ui/image/Premium.jpg'
import standard from '../ui/image/Standard.jpg'
import singlePerson from '../ui/icons/singlePerson.svg'
import people from '../ui/icons/people.svg'
import gallary from '../ui/image/gallary.jpg'
const DiscoverSpace = () => {
  return (
    <div className='mt-10 flex justify-between flex-row flex-wrap gap-4 px-6 '>
      <div className='w-[40vw] min-h-50'>
        <div className='rounded-lg border overflow-hidden   bg-white'>
        <img src={standard} alt="Hotel Room" />
        <div>

          <div className='flex justify-evenly items-center py-2'>
            <div>
              <img src={singlePerson} alt="Person" />
            </div>
            <div>
              <h4 className='font-poppins text-sm'>Basic Room</h4>
              <h6 className='font-poppins text-xs font-light'>Single Person</h6>
            </div>
          </div>
          
        </div>
        </div>
      </div>
      
      <div className='w-[40vw] min-h-50'>
        <div className='rounded-lg border overflow-hidden   bg-white'>
        <img src={premium} className='aspect-[4/3]' alt="Hotel Room" />
        <div>

          <div className='flex justify-evenly items-center py-2'>
            <div>
              <img src={people} alt="Person" />
            </div>
            <div>
              <h4 className='font-poppins text-sm'>Basic Room</h4>
              <h6 className='font-poppins text-xs font-light'>Single Person</h6>
            </div>
          </div>
          
        </div>
        </div>
      </div>

      <div className='w-[40vw] min-h-50'>
        <div className='rounded-lg border overflow-hidden   bg-white'>
        <img src={delux} alt="Hotel Room" />
        <div>

          <div className='flex justify-evenly items-center py-2'>
            <div>
              <img src={people} alt="Person" />
            </div>
            <div>
              <h4 className='font-poppins text-sm'>Basic Room</h4>
              <h6 className='font-poppins text-xs font-light'>Single Person</h6>
            </div>
          </div>
          
        </div>
        </div>
      </div>

      <div className='w-[40vw] min-h-50'>
        <div className='rounded-lg border overflow-hidden   bg-white'>
        <img src={gallary} className='aspect-[4/3]' alt="Hotel Room" />
        <div>

          <div className='flex justify-evenly items-center py-2'>
            <div>
              <img src={singlePerson} alt="Person" />
            </div>
            <div>
              <h4 className='font-poppins text-sm'>Basic Room</h4>
              <h6 className='font-poppins text-xs font-light'>Single Person</h6>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverSpace