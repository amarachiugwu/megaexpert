import React from 'react'
import $ from 'jquery'
import { Link } from "react-router-dom";

function AffiliateBox() {

    function toTop() {

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    }

  return (
    
        
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
                            <Link to="/affiliate" className="cmn--btn" onClick={toTop}>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="shape">
            <img src="assets/images/affiliate/bg-map.png" alt="affiliate"/>
        </div>
    </section>
  )
}

export default AffiliateBox