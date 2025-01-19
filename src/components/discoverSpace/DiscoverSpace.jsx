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
              <h4 className='font-poppins text-sm'>Basic</h4>
              <h6 className='font-poppins text-xs font-light'>Single Person</h6>
            </div>
          </div>
          
        </div>
        </div>
      </div>
      
      <div className='w-[40vw] min-h-50 '>
        <div className='rounded-lg border overflow-hidden   bg-white'>
        <img src={premium} className='max-h-[30vw] w-full aspect-[4/3]' alt="Hotel Room" />
        <div>

          <div className='flex justify-evenly items-center py-2'>
            <div>
              <img src={people} alt="Person" />
            </div>
            <div>
              <h4 className='font-poppins text-sm'>Standard</h4>
              <h6 className='font-poppins text-xs font-light'>2 People</h6>
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
              <h4 className='font-poppins text-sm'>Premium</h4>
              <h6 className='font-poppins text-xs font-light'>3 People</h6>
            </div>
          </div>
          
        </div>
        </div>
      </div>

      <div className='w-[40vw] min-h-50'>
        <div className='rounded-lg border overflow-hidden   bg-white'>
        <img src={gallary} className='max-h-[30vw] w-full aspect-[4/3]' alt="Hotel Room" />
        <div>

          <div className='flex justify-evenly items-center py-2'>
            <div>
              <img src={people} alt="Person" />
            </div>
            <div>
              <h4 className='font-poppins text-sm'>Gallery</h4>
              <h6 className='font-poppins text-xs font-light'>Spacious Gallery</h6>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverSpace