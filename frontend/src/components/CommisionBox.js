import React from 'react'
import $ from 'jquery'
import { Link } from "react-router-dom";

function CommisionBox() {

    function toTop() {

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    }

  return (
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
                    <Link to="/affiliate" className="cmn--btn" onClick={toTop}>View Details</Link>
                    <div className="shape1">
                        <img src="assets/images/commission/shape1.png" alt="commission"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CommisionBox