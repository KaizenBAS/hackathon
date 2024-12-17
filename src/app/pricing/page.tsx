import Trial from '../components/pricing-components/trial'
import Plan from '../components/pricing-components/plan'
import Price from '../components/pricing-components/price'
import Faq from '../components/pricing-components/faq'
import Footer from '../components/footer'
import Header from '../components/about-components/aboutHeader'
import React from 'react'

const PricePage = () => {
  return (
    <div className='bg-[#FAFAFA]'>
        <Header />
        <Price />
        <Plan />
        <Faq />
        <Trial />
        <Footer />
    </div>
  )
}

export default PricePage