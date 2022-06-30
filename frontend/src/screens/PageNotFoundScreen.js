import React from 'react'
import $ from 'jquery'
import BannerBox from '../components/BannerBox'
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'
import { Link } from "react-router-dom";

function PageNotFoundScreen() {

        
    function toTop() {

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    }

  return (
    <>
        <BannerBox page="Error Page" title="SORRY! PAGE NOT FOUND" image="assets/images/404/thumb.png" />




        <section className="error-page padding-top padding-bottom">
            <div className="container">
                <div className="error-thumb">
                    <img src="assets/images/404/404.png" alt="404" />
                </div>
                <div className="error-content">
                    <h2 className="title">Sorry, Page Not Found</h2>
                    
                    <div className="form--group">
                         <div className="button text-center wow slideIn pb-4">
                            <Link className="cmn--btn" to="/" onClick={toTop}>Go back Home</Link> 
                        </div>
                        {/* <input type="email" className="form--control" placeholder="Search for Page" />
                        <button className="custom-button" type="button">Search</button> */}
                    </div>
                </div>
            </div>
        </section>




        <ProfitCalculatorBox/>
    </>
  )
}

export default PageNotFoundScreen