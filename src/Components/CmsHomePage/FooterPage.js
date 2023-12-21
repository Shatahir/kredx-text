import React from 'react'
import '../CmsHomePage/FooterPage.css'

function FooterPage() {
  return (
    <div className='flex justify-between footer-bg p-4 lg:px-20 lg:py-6'>
      <div className=''>
        <img src='../images/footer-logo.png' alt='footer-logo' />
      </div>
      <div className='flex gap-2 lg:gap-4 justify-center items-center'>
        <a href='#'>
          <img src='../images/inshta.png' alt='inshta-icon' />
        </a>
        <a href='#'>
          <img src='../images/linkedin.png' alt='linkedin-icon' />
        </a>
        <a href='#'>
          <img src='../images/facebook.png' alt='facebook-icon' />
        </a>
        <a href='#'>
          <img src='../images/twitter.png' alt='twitter-icon' />
        </a>
        <a href='#'>
          <img src='../images/youtube.png' alt='youtube-icon' />
        </a>
      </div>
    </div>
  )
}

export default FooterPage
