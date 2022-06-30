import React from 'react'
import BannerBox from '../components/BannerBox'
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'

function AffiliateScreen() {
  return (
    <>
        <BannerBox page="Affiliates Program" title="AFFILIATES PROGRAM" image="/assets/images/affiliate/banner.png" />

            
            

        <section className="affiliate-section padding-top padding-bottom overflow-hidden">
            <div className="container">
                <div className="row gy-5 align-items-center">
                    <div className="col-lg-5 d-lg-block d-none wow fadeInLeft">
                        <div className="affiliate-thumb">
                            <img src="assets/images/affiliate/thumb.png" alt="affiliate"/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="affiliate-content">
                            <div className="section-header">
                                <span className="subtitle  fadeInUp">Affiliate program</span>
                                <h2 className="title  fadeInUp" data--delay=".5s">Make Money By Affiliate With Out Invest</h2>
                            </div>
                            <div className="affilate-tab-menu row g-4">
                                <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 tab-item  fadeInUp" data--delay=".3s" >
                                    <div className="affiliate-tab-item">
                                        <div className="item-inner">
                                            <h3 className="percentage">05%</h3>
                                            <span className="serial">1st</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 tab-item  fadeInUp" data--delay=".4s" >
                                    <div className="affiliate-tab-item">
                                        <div className="item-inner">
                                            <h3 className="percentage">07%</h3>
                                            <span className="serial">2nd</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 tab-item  fadeInUp" data--delay=".5s" >
                                    <div className="affiliate-tab-item">
                                        <div className="item-inner">
                                            <h3 className="percentage">12%</h3>
                                            <span className="serial">3rd</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="affiliate-item-content">
                                <h4 className="title">The affiliate program is our special feature for loyal Investors.Invite users and earn up to 12% of the fee on their exchange transactions!.</h4>
                                <p>The simple way to grow your money like the world’s most sophisticated investors. Our team of industry leading technology developers, financial and consumer technology experts with significant experience use the best strategy in providing our best mechanisms. Invest and invite you pals to start earning today.</p>
                                {/* <Link to="/affiliate" className="cmn--btn">View Details</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src="assets/images/affiliate/bg-map.png" alt="affiliate"/>
            </div>
        </section>




        <section className="commission-section bg_img padding-top" style={{ background: "url(assets/images/affiliate/bg.jpg) no-repeat center" }}>
            <div className="container">
                <div className="commission-wrapper">
                    <div className="commission-thumb d-none d-lg-block">
                        <img src="assets/images/commission/thumb.png" alt="commission"/>
                    </div>
                    <div className="commission-content">
                        <h2 className="title">30% <br/>
                            <span>Affiliate Commission</span>
                        </h2>
                        <p>
                            Join our affiliate program and stand a chance of earning 30% of the amount your referral invested, sounds good? get as much referals as you can.
                        </p>
                        {/* <a href="/affiliate" className="cmn--btn" onClick={toTop}>View Details</a> */}
                        <div className="shape1">
                            <img src="assets/images/commission/shape1.png" alt="commission"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>





        
        <section className="choose-us-three padding-top padding-bottom overflow-hidden">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-xl-6 col-lg-7">
                        <div className="choose-us-right-content pl-0 pr-40">
                            <div className="section-header">
                                <span className="subtitle  ">WHY CHOOSE US</span>
                                <h2 className="title  " data--delay=".5s">Why You Should Affiliate</h2>
                                <p className=" " data--delay=".6s">
                                    Our Affiliate program gives you alot of oppurtunities to earn even while not investing you can earn
                                </p>
                            </div>
                            <div className="choose-item-wrapper-three">
                                <div className="choose-item-three  ">
                                    <div className="choose-item-thumb-three">
                                        <i className="las la-globe"></i>
                                    </div>
                                    <div className="choose-item-content-three">
                                        <h4 className="title">Earn When you refer</h4>
                                        <p>You can earn when you refer people to our platform, your referal point increases as the number of people you refer increase, so do your affiliate earnings increase too. </p>
                                    </div>
                                </div>
                                <div className="choose-item-three  ">
                                    <div className="choose-item-thumb-three">
                                        <i className="las la-hand-holding-usd"></i>
                                    </div>
                                    <div className="choose-item-content-three">
                                        <h4 className="title">30% Commision</h4>
                                        <p>Earn 30% of the amount invested by the person you refered. </p>
                                    </div>
                                </div>
                                <div className="choose-item-three  ">
                                    <div className="choose-item-thumb-three">
                                        <i className="las la-history"></i>
                                    </div>
                                    <div className="choose-item-content-three">
                                        <h4 className="title">Instant payout</h4>
                                        <p>Withdraw as your earn. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 d-none d-lg-block pl-40">
                        <div className="choose-us-thumb ltr">
                            <img src="assets/images/choose-us/thumb.png" alt="choose-us"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <div className="affiliate-section padding-bottom mb-40">
            <div className="container">
                <div className="row justify-content-center mb-3">
                    <div className="col-lg-7">
                        <div className="section-header text-center">
                            <span className="subtitle  ">how to do it?</span>
                            <h2 className="title mx-650">try easy 3 stap to Affiliate</h2>
                            {/* <p>
                                Pipsum dolor sit amet consectetur adipisicing elit. Aliquam modi explicabo nam ex unde et dolorum non dolor! Dolorum nobis
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="affiliate-item-three">
                            <div className="thumb">
                                <img src="assets/images/affiliate/item1.png" alt="affiliate"/>
                            </div>
                            <div className="content">
                                <h4 className="title">Quick registration
                                </h4>
                                {/* <p>Tempor commodo purus sed ullamco ligula maecenas, imperdiet rutrum interdum cinia eget nec, vel ligula lectus per uthac donec. Tortor iddonec vestibulum </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="affiliate-item-three">
                            <div className="thumb">
                                <img src="assets/images/affiliate/item2.png" alt="affiliate"/>
                            </div>
                            <div className="content">
                                <h4 className="title">Refer People
                                </h4>
                                {/* <p>Tempor commodo purus sed ullamco ligula maecenas, imperdiet rutrum interdum cinia eget nec, vel ligula lectus per uthac donec. Tortor iddonec vestibulum </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="affiliate-item-three">
                            <div className="thumb">
                                <img src="assets/images/affiliate/item3.png" alt="affiliate"/>
                            </div>
                            <div className="content">
                                <h4 className="title">Get Your Profit
                                </h4>
                                {/* <p>Tempor commodo purus sed ullamco ligula maecenas, imperdiet rutrum interdum cinia eget nec, vel ligula lectus per uthac donec. Tortor iddonec vestibulum </p> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="video-area">
                    <div className="video-inner">
                        <img src="assets/images/video/thumb.png" alt="video"/>
                        <div className="thumb-content">
                            <a href="https://www.youtube.com/watch?v=WOb4cj7izpE" className="video-button-two video"><img src="assets/images/video/play.png" alt=""/></a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>





        <ProfitCalculatorBox/>
    </>
  )
}

export default AffiliateScreen