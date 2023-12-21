import React from 'react'
import '../CmsHomePage/PayProcessText.css'

function PayProcessText() {
  return (
    <>
      <div className='lg:flex md:flex flex-none justify-center bg-white padding'>
        <div>
          <img
            className='mb-6 img-width md:mb-0 lg:mb-0 m-auto'
            src='../images/right-arrow.png'
            alt='left-image'
          />
        </div>
        <div>
          <p className='text-color font-26px text-center lg:mx-8 md:mx-4 mx-0'>
            Only KredX’s AP Solution lets you automate and streamline your
            entire PO-to-Pay process without messing up your existing processes.
            That’s because we support all native functionality for 40+ ERPs
          </p>
        </div>
        <div>
          <img
            className='mt-6 img-width md:mt-0 lg:mt-0 m-auto'
            src='../images/left-arrow.png'
            alt='right-image'
          />
        </div>
      </div>
    </>
  )
}

export default PayProcessText
