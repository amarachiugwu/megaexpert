import React from 'react'
import { Link } from "react-router-dom";

function PlanBox() {
  return (
    <>
        <section className="plan-section padding-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <span className="subtitle wow fadeInUp">choose your plan</span>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">best investment platform for your profit</h2>
                            </div>
                        </div>
                    </div>
                    <div className="plan-wrapper row g-4">
                        <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".1s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">Bronze 25%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $1000.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : $10,000.00
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">03 <sub>WEEKS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <Link to="/gold" className="cmn--btn-2">Invest now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".2s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">Silver 50%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $10,000.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : $50,000.00
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">04 <sub>WEEKS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <Link to="/silver" className="cmn--btn-2">Invest now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".3s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">Gold 100%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $50,000.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : Unlimited
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">06 <sub>WEEKS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <Link to="/gold" className="cmn--btn-2">Invest now</Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".4s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">1200%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $30.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : $1500.00
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">15 <sub>DAYS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <a href="login.html" className="cmn--btn-2">Invest now</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="button text-center wow slideIn pb-4">
                        <a href="investment-plan-01.html" className="cmn--btn">Discover More</a>
                    </div> */}
                </div>
            </section>
    </>
  )
}

export default PlanBox