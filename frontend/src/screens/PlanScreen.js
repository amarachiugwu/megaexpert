import React from 'react'
import AffiliateBox from '../components/AffiliateBox'
import BannerBox from '../components/BannerBox'
import CommisionBox from '../components/CommisionBox'
import PlanBox from '../components/PlanBox'

import ProfitCalculatorBox from '../components/ProfitCalculatorBox'

function PlanScreen() {


  return (
    <>
        <BannerBox page="investment plan" title="INVESTMENT PLAN" image="/assets/images/investment/thumb.png" />




        <PlanBox/>




        <section className="latest-transaction-section padding-top padding-bottom overflow-hidden">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-header text-center">
                            <span className="subtitle  fadeInUp">Check Latest Deposit & Withdrow</span>
                            <h2 className="title  fadeInUp" data--delay=".5s">best investment platform for your profit</h2>
                            {/* <p className=" fadeInUp" data--delay=".6s">
                                Praesent nibh aut vivamusad quis in tortor aenean ligula non lacinia quisque. Purus nunc tellus ac nulla praesent quis porttitor sit arcu congue auctor ut amet. 
                            </p> */}
                        </div>
                    </div>
                </div>
                <ul className="nav nav-tabs deposit-tab-menu  fadeInUp">
                    <li>
                        <a href="#deposit" data-bs-toggle="tab" className="active">Deposit</a>
                    </li>
                    <li>
                        <a href="#withdraw" data-bs-toggle="tab">withdraw</a>
                    </li>
                </ul>
                <div className="tab-content  slideInUp">
                    <div className="tab-pane show fade active" id="deposit">
                        <table className="deposit-table">
                            <thead>
                                <tr>
                                    <th>Currency</th>
                                    <th>User</th>
                                    <th>Start Date</th>
                                    <th>Rate</th>
                                    <th>Deposit</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-input="currency">
                                        <div className="currency">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/01.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">bitcoin</span>
                                                <span className="info">Invest Currency</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="user">
                                        <div className="user">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/user01.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">sunato roy</span>
                                                <span className="info">Hyip Investor</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="start date">
                                        <div className="content">
                                            <span className="title">25 Feb 2020</span>
                                            <span className="info">Start Date</span>
                                        </div>
                                    </td>
                                    <td data-input="rate">
                                        <div className="content">
                                            <span className="title">$22,545.00<span> +$75</span></span>
                                            <span className="info">Monthly Rate</span>
                                        </div>
                                    </td>
                                    <td data-input="deposit">
                                        <div className="content">
                                            <span className="title">$33,485.00</span>
                                            <span className="info">Deposit</span>
                                        </div>
                                    </td>
                                    <td data-input="status">
                                        <div className="content">
                                            <p>Waiting for Deposit Verify</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-input="currency">
                                        <div className="currency">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/06.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">Ethereum</span>
                                                <span className="info">Invest Currency</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="user">
                                        <div className="user">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/user06.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">josef marton</span>
                                                <span className="info">Hyip Investor</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="start date">
                                        <div className="content">
                                            <span className="title">25 Feb 2020</span>
                                            <span className="info">Start Date</span>
                                        </div>
                                    </td>
                                    <td data-input="rate">
                                        <div className="content">
                                            <span className="title">$22,545.00<span > +$75</span></span>
                                            <span className="info">Monthly Rate</span>
                                        </div>
                                    </td>
                                    <td data-input="deposit">
                                        <div className="content">
                                            <span className="title">$33,485.00</span>
                                            <span className="info">Deposit</span>
                                        </div>
                                    </td>
                                    <td data-input="status">
                                        <div className="content">
                                            <p>Waiting for Deposit Verify</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-input="currency">
                                        <div className="currency">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/05.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">Litecoin</span>
                                                <span className="info">Invest Currency</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="user">
                                        <div className="user">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/user05.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">martin hook</span>
                                                <span className="info">Hyip Investor</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="start date">
                                        <div className="content">
                                            <span className="title">25 Feb 2020</span>
                                            <span className="info">Start Date</span>
                                        </div>
                                    </td>
                                    <td data-input="rate">
                                        <div className="content">
                                            <span className="title">$22,545.00<span > +$75</span></span>
                                            <span className="info">Monthly Rate</span>
                                        </div>
                                    </td>
                                    <td data-input="deposit">
                                        <div className="content">
                                            <span className="title">$33,485.00</span>
                                            <span className="info">Deposit</span>
                                        </div>
                                    </td>
                                    <td data-input="status">
                                        <div className="content">
                                            <p>Waiting for Deposit Verify</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-input="currency">
                                        <div className="currency">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/04.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">Litecoin</span>
                                                <span className="info">Invest Currency</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="user">
                                        <div className="user">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/user04.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">martin hook</span>
                                                <span className="info">Hyip Investor</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="start date">
                                        <div className="content">
                                            <span className="title">25 Feb 2020</span>
                                            <span className="info">Start Date</span>
                                        </div>
                                    </td>
                                    <td data-input="rate">
                                        <div className="content">
                                            <span className="title">$22,545.00<span > +$75</span></span>
                                            <span className="info">Monthly Rate</span>
                                        </div>
                                    </td>
                                    <td data-input="deposit">
                                        <div className="content">
                                            <span className="title">$33,485.00</span>
                                            <span className="info">Deposit</span>
                                        </div>
                                    </td>
                                    <td data-input="status">
                                        <div className="content">
                                            <p>Waiting for Deposit Verify</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-input="currency">
                                        <div className="currency">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/03.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">Ethereum</span>
                                                <span className="info">Invest Currency</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="user">
                                        <div className="user">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/user03.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">martin hook</span>
                                                <span className="info">Hyip Investor</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="start date">
                                        <div className="content">
                                            <span className="title">25 Feb 2020</span>
                                            <span className="info">Start Date</span>
                                        </div>
                                    </td>
                                    <td data-input="rate">
                                        <div className="content">
                                            <span className="title">$22,545.00<span > +$75</span></span>
                                            <span className="info">Monthly Rate</span>
                                        </div>
                                    </td>
                                    <td data-input="deposit">
                                        <div className="content">
                                            <span className="title">$33,485.00</span>
                                            <span className="info">Deposit</span>
                                        </div>
                                    </td>
                                    <td data-input="status">
                                        <div className="content">
                                            <p>Waiting for Deposit Verify</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-input="currency">
                                        <div className="currency">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/02.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">ripple</span>
                                                <span className="info">Invest Currency</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="user">
                                        <div className="user">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/user02.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">martin hook</span>
                                                <span className="info">Hyip Investor</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="start date">
                                        <div className="content">
                                            <span className="title">25 Feb 2020</span>
                                            <span className="info">Start Date</span>
                                        </div>
                                    </td>
                                    <td data-input="rate">
                                        <div className="content">
                                            <span className="title">$22,545.00<span > +$75</span></span>
                                            <span className="info">Monthly Rate</span>
                                        </div>
                                    </td>
                                    <td data-input="deposit">
                                        <div className="content">
                                            <span className="title">$33,485.00</span>
                                            <span className="info">Deposit</span>
                                        </div>
                                    </td>
                                    <td data-input="status">
                                        <div className="content">
                                            <p>Waiting for Deposit Verify</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="withdraw">
                        <table className="deposit-table">
                            <thead>
                                <tr>
                                    <th>Currency</th>
                                    <th>User</th>
                                    <th>Start Date</th>
                                    <th>Rate</th>
                                    <th>Withdraw</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-input="currency">
                                        <div className="currency">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/05.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">Litecoin</span>
                                                <span className="info">Invest Currency</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="user">
                                        <div className="user">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/user05.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">martin hook</span>
                                                <span className="info">Hyip Investor</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="start date">
                                        <div className="content">
                                            <span className="title">25 Feb 2020</span>
                                            <span className="info">Start Date</span>
                                        </div>
                                    </td>
                                    <td data-input="rate">
                                        <div className="content">
                                            <span className="title">$22,545.00<span > +$75</span></span>
                                            <span className="info">Monthly Rate</span>
                                        </div>
                                    </td>
                                    <td data-input="deposit">
                                        <div className="content">
                                            <span className="title">$33,485.00</span>
                                            <span className="info">Withdraw</span>
                                        </div>
                                    </td>
                                    <td data-input="status">
                                        <div className="content">
                                            <p>Waiting for Deposit Verify</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-input="currency">
                                        <div className="currency">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/04.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">Litecoin</span>
                                                <span className="info">Invest Currency</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="user">
                                        <div className="user">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/user04.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">martin hook</span>
                                                <span className="info">Hyip Investor</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="start date">
                                        <div className="content">
                                            <span className="title">25 Feb 2020</span>
                                            <span className="info">Start Date</span>
                                        </div>
                                    </td>
                                    <td data-input="rate">
                                        <div className="content">
                                            <span className="title">$22,545.00<span > +$75</span></span>
                                            <span className="info">Monthly Rate</span>
                                        </div>
                                    </td>
                                    <td data-input="deposit">
                                        <div className="content">
                                            <span className="title">$33,485.00</span>
                                            <span className="info">Withdraw</span>
                                        </div>
                                    </td>
                                    <td data-input="status">
                                        <div className="content">
                                            <p>Waiting for Deposit Verify</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-input="currency">
                                        <div className="currency">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/03.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">Ethereum</span>
                                                <span className="info">Invest Currency</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="user">
                                        <div className="user">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/user03.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">martin hook</span>
                                                <span className="info">Hyip Investor</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="start date">
                                        <div className="content">
                                            <span className="title">25 Feb 2020</span>
                                            <span className="info">Start Date</span>
                                        </div>
                                    </td>
                                    <td data-input="rate">
                                        <div className="content">
                                            <span className="title">$22,545.00<span > +$75</span></span>
                                            <span className="info">Monthly Rate</span>
                                        </div>
                                    </td>
                                    <td data-input="deposit">
                                        <div className="content">
                                            <span className="title">$33,485.00</span>
                                            <span className="info">Withdraw</span>
                                        </div>
                                    </td>
                                    <td data-input="status">
                                        <div className="content">
                                            <p>Waiting for Deposit Verify</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-input="currency">
                                        <div className="currency">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/02.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">ripple</span>
                                                <span className="info">Invest Currency</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="user">
                                        <div className="user">
                                            <div className="thumb">
                                                <img src="assets/images/deposit/user02.png" alt="deposit"/>
                                            </div>
                                            <div className="content">
                                                <span className="title">martin hook</span>
                                                <span className="info">Hyip Investor</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-input="start date">
                                        <div className="content">
                                            <span className="title">25 Feb 2020</span>
                                            <span className="info">Start Date</span>
                                        </div>
                                    </td>
                                    <td data-input="rate">
                                        <div className="content">
                                            <span className="title">$22,545.00<span > +$75</span></span>
                                            <span className="info">Monthly Rate</span>
                                        </div>
                                    </td>
                                    <td data-input="deposit">
                                        <div className="content">
                                            <span className="title">$33,485.00</span>
                                            <span className="info">Withdraw</span>
                                        </div>
                                    </td>
                                    <td data-input="status">
                                        <div className="content">
                                            <p>Waiting for Deposit Verify</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>




        <CommisionBox/>

            
            
        
        <AffiliateBox/>




        <ProfitCalculatorBox/>
    
    </>
  )
}

export default PlanScreen