import React from 'react'
import BannerBox from '../components/BannerBox'
import CommisionBox from '../components/CommisionBox';
import FeedBackBox from '../components/FeedBackBox';
import HelpBox from '../components/HelpBox';
import PaymentGatewayBox from '../components/PaymentGatewayBox';
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'

function FAQScreen() {

    
  return (
    <>
        <BannerBox page="Faq" title="FREQUENTLY ASKED QUESTIONS" image="/assets/images/faq/thumb2.png" />




        <HelpBox/>



        <div className="padding-top"></div>




        <CommisionBox/>
   


   
        <FeedBackBox/>




        <PaymentGatewayBox/>
        



        <ProfitCalculatorBox/>
    </>
  )
}

export default FAQScreen