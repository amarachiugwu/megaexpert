import React from 'react'
import BannerBox from '../components/BannerBox'
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'
import WhyUsBox from '../components/WhyUsBox'

function AboutScreen() {
  return (
    <>
        
        <BannerBox page="About" title="ABOUT OUR COMPANY" />




        <WhyUsBox/>




        <section className="investor-section padding-bottom overflow-hidden">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-header text-center">
                            <span className="subtitle">featured investors</span>
                            <h2 className="title">our top investor</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gy-5">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6  slideInUp" data--delay=".3s">
                        <div className="investor-item">
                            <div className="investor-thumb">
                                <img src="/assets/images/investor/item1.png" alt="investor"/>
                            </div>
                            <div className="investor-content">
                                <h4 className="name">Robart Thompson</h4>
                                <span className="designation">Top Investor</span>
                                <h3 className="invest-ammount">$900,000.00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6  slideInUp" data--delay=".4s">
                        <div className="investor-item">
                            <div className="investor-thumb">
                                <img src="/assets/images/investor/item2.png" alt="investor"/>
                            </div>
                            <div className="investor-content">
                                <h4 className="name">Chris Stone</h4>
                                <span className="designation">Top Investor</span>
                                <h3 className="invest-ammount">$700,000.00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6  slideInUp" data--delay=".5s">
                        <div className="investor-item">
                            <div className="investor-thumb">
                                <img src="/assets/images/investor/item3.png" alt="investor"/>
                            </div>
                            <div className="investor-content">
                                <h4 className="name">James Flower</h4>
                                <span className="designation">Top Investor</span>
                                <h3 className="invest-ammount">$300,000.00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6  slideInUp" data--delay=".6s">
                        <div className="investor-item">
                            <div className="investor-thumb">
                                <img src="/assets/images/investor/item4.png" alt="investor"/>
                            </div>
                            <div className="investor-content">
                                <h4 className="name">Mark Betson</h4>
                                <span className="designation">Top Investor</span>
                                <h3 className="invest-ammount">$90,000.00</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <section className="payment-gateway padding-bottom">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-5">
                        <div className="section-header">
                            <h2 className="title  fadeInUp" data--delay=".5s">We accept payment in crypto</h2>
                            <p className=" fadeInUp" data--delay=".6s">
                                We support the popular cryptocurrencies like Bitcoin, Ethereum, Tether, Litecoin, Dash, Binance, Solana, and many more.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7  fadeInRight">
                        <div className="payment-gateway-slider">
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon1.png" alt="gateway"/>
                                    <span className="coin-name">Bitcoin</span>
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon2.png" alt="gateway"/>
                                    <span className="coin-name">Ethereum</span>
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon3.png" alt="gateway"/>
                                    <span className="coin-name">Ripple</span>
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon4.png" alt="gateway"/>
                                    <span className="coin-name">Litecoin</span>
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon2.png" alt="gateway"/>
                                    <span className="coin-name">Ethereum</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <ProfitCalculatorBox/>
        

    </>
  )
}

export default AboutScreen