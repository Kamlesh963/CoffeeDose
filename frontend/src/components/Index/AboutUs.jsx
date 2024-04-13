import React from 'react'
import HomeNavbar from './HomeNavbar'
import HomeFooter from './HomeFooter'
import AboutDetail from './AboutDetail'
import AboutGallery from './AboutGallery'
import HomeReview from './HomeReview'
import AboutCounter from './AboutCounter'

function AboutUs() {
  return (
    <>
        <HomeNavbar/>
        <AboutDetail/>
        <AboutGallery/>
        <HomeReview/>
        <AboutCounter/>
        <HomeFooter/>
    </>
  )
}

export default AboutUs