import React from 'react'
import '../CmsHomePage/ApAutomation.css'

function ApAutomation() {
  return (
    <div className='background-white'>
      <section class='bg-img'>
        <div class='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 '>
          <div class='mx-auto max-w-lg text-center'>
            <h2 class='font-45px text-linear lg:mb-12 md:mb-10 mb-8'>
              KredX AP Automation Capabilities
            </h2>
          </div>

          <div class='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className='block text-center'>
              <img className='m-auto' src='../images/icon-1.png' alt='icon-1' />
              <h2 class='mt-6 mb-10 text-xl font-18px card-headr-color '>
                Invoice Digitization
              </h2>

              <p class='font-14px text-black '>
                Automate all formats of invoices received across any channel
                into a centralized repository in a single format to reduce error
                & increase team efficiency
              </p>
            </div>
            <div className='block text-center'>
              <img className='m-auto' src='../images/icon-2.png' alt='icon-1' />
              <h2 class='mt-6 mb-10 text-xl font-18px card-headr-color '>
                Invoice Processing
              </h2>

              <p class=' font-14px text-black '>
                Automate invoice capturing, invoice exchange with vendors &
                approval workflows. Centralized vendor portal for tracking all
                PO’s
              </p>
            </div>
            <div className='block text-center'>
              <img className='m-auto' src='../images/icon-3.png' alt='icon-1' />
              <h2 class='mt-6 mb-2 text-xl font-18px card-headr-color '>
                Centralized access and collaboration
              </h2>

              <p class='font-14px text-black '>
                Collaboration, interaction and documentation is centered at each
                invoice level making approval workflows efficient, seamless and
                audit ready
              </p>
            </div>
            <div className='block text-center'>
              <img className='m-auto' src='../images/icon-4.png' alt='icon-1' />
              <h2 class='mt-6 mb-2 text-xl font-18px card-headr-color '>
                Advanced & Quick customizable workflows
              </h2>

              <p class=' font-14px text-black '>
                Advanced AI that adapts to AP processes unique to your
                organization within the shortest amount of time
              </p>
            </div>
            <div className='block text-center'>
              <img className='m-auto' src='../images/icon-5.png' alt='icon-1' />
              <h2 class='mt-6 mb-10 text-xl font-18px card-headr-color '>
                Invoice Matching
              </h2>

              <p class=' font-14px text-black '>
                Effortless 2 and 3 way matching with easy to understand ‘reason’
                coding for users increasing efficiency & protect against fraud
                and duplication
              </p>
            </div>
            <div className='block text-center'>
              <img className='m-auto' src='../images/icon-6.png' alt='icon-1' />
              <h2 class='mt-6 mb-10 text-xl font-18px card-headr-color '>
                Integrated Vendor Management
              </h2>

              <p class=' font-14px text-black '>
                Manage vendor onboarding, documentation and payment from one
                place
              </p>
            </div>
            <div className='block text-center'>
              <img className='m-auto' src='../images/icon-7.png' alt='icon-1' />
              <h2 class='mt-6 mb-2 text-xl font-18px card-headr-color '>
                Strengthen treasury & your supply chain
              </h2>

              <p class=' font-14px text-black '>
                Increase treasury income through early payments via dynamic
                discounting. Earn more from each spend via KredX’s AP card
                program
              </p>
            </div>
            <div className='block text-center'>
              <img className='m-auto' src='../images/icon-8.png' alt='icon-1' />
              <h2 class='mt-6 mb-10 text-xl font-18px card-headr-color '>
                Audit ready
              </h2>

              <p class=' font-14px text-black '>
                One-click access to all conversations and notes at each invoice
                level. Data available on cloud archived after 7 years for full
                audit trail wherever required.
              </p>
            </div>
          </div>

          <div class='mt-20 text-center'>
            <button className='btn-bg rounded-md'>
              <a
                href='#'
                class='inline-block rounded  lg:px-12 md:px-10 px-6 py-3 font-28px text-white transition focus:outline-none focus:ring '
              >
                Request Demo
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ApAutomation
