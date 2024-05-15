import React from 'react'
import HomeNavbar from './HomeNavbar'
import HomeSection1 from './HomeSection1'
import HomeSection2 from './HomeSection2'
import HomeSection3 from './HomeSection3'
import HomeReview from './HomeReview'
import HomeFooter from './HomeFooter'
import HomeTab from './HomeTab'
import HomeTabMobile from './HomeTabMobile'
import { useEffect } from 'react'

function Home() {
  const tabsList = [
    {
      label: 'HOT CLASSICS',
      content: '../Data/Images/hot-classic.jpg',
    },
    {
      label: 'ALL-TIME CHILLERS',
      content: '../Data/Images/All-times-clillers.jpg',
    },
    {
      label: 'CAFE SPECIALS',
      content: '../Data/Images/All-times-clillers2.jpg',
    },
    {
      label: 'HOT CLASSICS',
      content: '../Data/Images/hot-classic.jpg',
    },

    // Add more tabs as needed
  ];
  const tabsListMobile = [
    {
      label: 'HOT CLASSICS',
      content: '../Data/Images/hot-mobile-1.jpg',
      content1: '../Data/Images/hot-mobile-2.jpg',
    },
    {
      label: 'ALL-TIME CHILLERS',
      content: '../Data/Images/1-all-mobile-1.jpg',
      content1: '../Data/Images/1-all-mobile-2.jpg',
    },
    {
      label: 'CAFE SPECIALS',
      content: '../Data/Images/2-all-mobile-1.jpg',
      content1: '../Data/Images/2-all-mobile-2.jpg',
    },
    {
      label: 'HOT CLASSICS',
      content: '../Data/Images/hot-mobile-1.jpg',
      content1: '../Data/Images/hot-mobile-2.jpg',
    },

    // Add more tabs as needed
  ];
  useEffect(() => {
    if (sessionStorage.getItem("islogin")) {
      let a = JSON.parse(sessionStorage.getItem('islogin'))
      if (a.loginornot == "true") {
        // do nothing
      }
      else {
        let a = {
          loginornot: "false",
          value: ''
        }
        sessionStorage.setItem("islogin", JSON.stringify(a))
      }
    }

  }, [])

  return (
    <>
      <HomeNavbar />
      <HomeSection1 />
      <HomeSection2 />
      <div className="container-fluid text-center">
        <h1 className='discover'>Menu</h1>
      </div>
      <div className="container-fluid">
        <div className="row" id='menu'>
          <div className="col-12 d-none d-lg-block">
            <HomeTab tabsList={tabsList} />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-lg-none" >
            <HomeTabMobile tabsListMobile={tabsListMobile} />
          </div>
        </div>
      </div>
      <HomeSection3 />
      <HomeReview />
      <HomeFooter />
    </>
  )
}

export default Home