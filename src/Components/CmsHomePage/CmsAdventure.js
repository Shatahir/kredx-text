import React from 'react'
import '../CmsHomePage/CmsAdventure.css'

function CmsAdventure() {
  return (
    <div className='w-full bg-white p-8'>
      <div>
        <h1 className='font-50px text-linear text-center lg:my-12 md:my-10 my-6'>
          The KredX CMS Advantage
        </h1>
      </div>
      <div className='w-11/12 m-auto grid justify-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <div className='w-full'>
          <details
            className='cms-bg-linear letf-radius group [&_summary::-webkit-details-marker]:hidden'
            open
          >
            <summary className='w-11/12 flex cms-bg-linear padding-po cursor-pointer items-center justify-between gap-1.5 rounded-lg text-white font-22px'>
              <h2 className='font-medium'>
                Increase bottom line by reducing costs and increasing efficiency
              </h2>

              <img src='../images/arrow.png' alt='' />
            </summary>

            <p className='mt-4 px-4 leading-relaxed text-white'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className='w-11/12 my-10 bg-white box-shado rounded-md group [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-6 '>
              <h2 className='font-medium font-22px text-cor'>
                A tool for CFOs to analyze the cash flow and simulate what-if
                scenarios
              </h2>
              <img src='../images/gray-arrow.png' alt='' />
            </summary>

            <p className='mt-4 px-4 leading-relaxed text-gray-700'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
          <details className='w-11/12 bg-white box-shado rounded-md group [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-6 '>
              <h2 className='font-medium font-22px text-cor'>
                Use integrated financing to fulfill cash flow gaps just in time 
              </h2>
              <img src='../images/gray-arrow.png' alt='' />
            </summary>

            <p className='mt-4 px-4 leading-relaxed text-gray-700'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
        <div className='w-full bg-colr radius-all mt-6 md:mt-0 lg:mt-0 '>
          <div className='w-11/12 ml-auto'>
            <details
              className='group p-4 pt-10 [&_summary::-webkit-details-marker]:hidden'
              open
            >
              <summary className='flex cursor-pointer items-start justify-between gap-1.5 w-11/12'>
                <img src='../images/round-arrow.png' alt='' />
                <span className='relative h-5 w-5 shrink-0'></span>
                <h2 className='text-white font-18px'>
                  Automations to increase the efficiency in both AP and AR
                  sides.
                </h2>
              </summary>

              <p className='mt-4 leading-relaxed text-white'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
            <details
              className='group p-4 [&_summary::-webkit-details-marker]:hidden'
              open
            >
              <summary className='flex cursor-pointer items-start justify-between gap-1.5'>
                <img src='../images/round-arrow.png' alt='' />
                <span className='relative h-5 w-5 shrink-0'></span>
                <h2 className='text-white font-18px'>
                  Automations to increase the efficiency in both AP and AR
                  sides.
                </h2>
              </summary>

              <p className='mt-4 leading-relaxed text-white'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
            <details
              className='group p-4 [&_summary::-webkit-details-marker]:hidden'
              open
            >
              <summary className='flex cursor-pointer items-start justify-between gap-1.5'>
                <img src='../images/round-arrow.png' alt='' />
                <span className='relative h-5 w-5 shrink-0'></span>
                <h2 className='text-white font-18px'>
                  Automations to increase the efficiency in both AP and AR
                  sides.
                </h2>
              </summary>

              <p className='mt-4 leading-relaxed text-white'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
            <details
              className='group p-4 [&_summary::-webkit-details-marker]:hidden'
              open
            >
              <summary className='flex cursor-pointer items-start justify-between gap-1.5'>
                <img src='../images/round-arrow.png' alt='' />
                <span className='relative h-5 w-5 shrink-0'></span>
                <h2 className='text-white font-18px'>
                  Automations to increase the efficiency in both AP and AR
                  sides.
                </h2>
              </summary>

              <p className='mt-4 leading-relaxed text-white'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CmsAdventure
