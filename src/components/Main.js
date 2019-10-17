import React from 'react'

import Banner from './Banner'
import AboutUs from './AboutUs'
import PricingPage from './PricingPage'
import Testimony from './Testimony'
import Blog from './Blog'
import ShowRoom from './ShowRoom'

export default function Main() {
    return (
        <>     
          <Banner />
          <div className="container">
            <AboutUs />
            <PricingPage />
            <Testimony />
            <Blog />
            <ShowRoom />
          </div>
        </>
    )
}
