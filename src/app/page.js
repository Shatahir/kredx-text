import ApAutomation from '@/Components/CmsHomePage/ApAutomation'
import CmsAdventure from '@/Components/CmsHomePage/CmsAdventure'
import FooterPage from '@/Components/CmsHomePage/FooterPage'
import HomePage from '@/Components/CmsHomePage/HomePage'
import PayProcessText from '@/Components/CmsHomePage/PayProcessText'

import React from 'react'
function page() {
  return (
    <>
      <HomePage />
      <PayProcessText />
      <ApAutomation />
      <CmsAdventure />
      <FooterPage />
    </>
  )
}

export default page
