import React from 'react'
import delux from '../ui/image/Delux.jpg'
import premium from '../ui/image/Premium.jpg'
import standard from '../ui/image/Standard.jpg'
import singlePerson from '../ui/icons/singlePerson.svg'
import people from '../ui/icons/people.svg'
const DiscoverSpace = () => {
  return (
    <div className='mt-10 flex justify-between flex-row flex-wrap gap-4 px-6'>
      <div>
        <div className='rounded-lg border overflow-hidden min-h-50 max-w-[150px] bg-white'>
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
      
      <div>
        <div className='rounded-lg border overflow-hidden max-h-40 max-w-[150px] min-w-[9.2rem] bg-white'>
        <img src={premium} alt="Hotel Room" className='h-28 w-full' />
        <div>

          <div className='flex justify-evenly items-center py-2'>
            <div>
              <img src={people} alt="Person" />
            </div>
            <div>
              <h4 className='font-poppins text-sm m-0 p-0'>Standard Room</h4>
              <h6 className='font-poppins text-xs font-light m-0 p-0'>2 People</h6>
            </div>
          </div>
          
        </div>
        </div>
      </div>

      <div>
        <div className='rounded-lg border overflow-hidden min-h-50 max-w-[150px] bg-white'>
        <img src={delux} alt="Hotel Room" />
        <div>

          <div className='flex justify-evenly items-center py-2'>
            <div>
              <img src={people} alt="Person" />
            </div>
            <div>
              <h4 className='font-poppins text-sm'>Premium Room</h4>
              <h6 className='font-poppins text-xs font-light'>3 People</h6>
            </div>
          </div>
          
        </div>
        </div>
      </div>

      <div>
        <div className='rounded-lg border overflow-hidden min-h-50 max-w-[150px] bg-white'>
        <img src={standard} alt="Hotel Room" />
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
    </div>
  )
}

export default DiscoverSpace