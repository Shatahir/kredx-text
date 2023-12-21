import React from 'react'
import '../CmsHomePage/HomePage.css'

function HomePage() {
  return (
    <>
      <section className='relative home-bg  bg-cover bg-center bg-no-repeat'>
        <div className='img pl-10 md:pl-16 pt-4 lg:pl-32'>
          <img className='logo ' src='../images/logo.png' alt='Logo' />
        </div>

        <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
          <div className='mb-20 max-w-xl text-left ltr:sm:text-left rtl:sm:text-right'>
            <h1 className='font-60px sm:text-5xl leading-loose'>
              Automate Your <br /> Finance Function
            </h1>

            <p className='mt-6 font-34px max-w-lg sm:text-xl/relaxed'>
              WITHOUT Reworking Your ERP
            </p>
            <button className='mt-8 btn-bg rounded-md'>
              <a
                href='#'
                className='block font-24px btn-pad w-full rounded  px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto'
              >
                Learn more
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
