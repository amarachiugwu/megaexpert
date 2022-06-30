import React from 'react'
import BannerBox from '../components/BannerBox'
import CommisionBox from '../components/CommisionBox'
import PlanBox from '../components/PlanBox'
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'

function MissionVisionScreen() {
  return (
    <>
        <BannerBox page="Mission & Vision" title="OUR COMPANY MISSION & VISION" />




        <section className="mission-vision padding-top">
            <div className="container border-bottom  pb-80">
                <div className="row gy-5 align-items-center">
                    <div className="col-lg-6 d-none d-lg-block  fadeInLeft">
                        <div className="mission-vision-thumb">
                            <img src="assets/images/mission-vision/thumb1.png" alt="mission-vision"/>
                        </div>
                    </div>
                    <div className="col-lg-6  fadeInRight">
                        <div className="mission-vision-content">
                            <div className="section-header">
                                <h2 className="title">Our Mission</h2>
                                <p>We are unlocking the potentials of the blockchain industry, Exploring the Crypto world and Empower Crypto & DeFi enthusiasts to achieve their dreams — let our passion fuel your dreams.</p>
                            </div>
                            <p>
                                We built Mega Expert with the passion to help users and our Cryptocommunity make massive profits from the volatility of the Financial market.
                            </p>
                            <ul className="info-list">
                                <li>
                                    High ROI
                                </li>
                                <li>
                                    over view on service
                                </li>
                                <li>
                                    24/7 customer support
                                </li>
                                <li>
                                    Earn through affiliate
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <section className="mission-vision pt-80 padding-bottom">
            <div className="container">
                <div className="row gy-5 align-items-center">
                    <div className="col-lg-6 fadeInLeft">
                        <div className="mission-vision-content">
                            <div className="section-header">
                                <h2 className="title">Our Vision</h2>
                                <p>We constantly Listen, Care, and Improve. We aim to revolutionize the industry by fusing the best of cryptocurrency and traditional finance.</p>
                            </div>
                            <p>
                                Our innovative, highly advanced, user-friendly platform has been designed from the ground-up using best-in-class infrastructure to provide our users with the industry’s safest, fastest, fairest and most transparent trading experience.
                            </p>

                            <p>
                                We endeavor to provide a professional, smart, intuitive and innovative online trading, investing and staking experience for retail and institutional clients around the world.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block fadeInRight">
                        <div className="mission-vision-thumb">
                            <img src="assets/images/mission-vision/thumb2.png" alt="mission-vision"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        
        <CommisionBox/>
    




        <PlanBox/>




        <div className="padding-top"></div>



        

        <ProfitCalculatorBox/>
    </>
  )
}

export default MissionVisionScreen