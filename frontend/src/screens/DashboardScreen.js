import React from 'react'

function DashboardScreen() {
  return (
    <div className="content-wrapper">
      <div className="container-full">
      
        <section className="content">
            <div className="row">
                <div className="col-xl-9 col-12">
                    <div className="box">
                        <div className="box-body pb-lg-0">
                            <div className="row">
                                <div className="col-lg-3 col-12 be-1">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0 text-fade">Index</p>
                                        <p className="mb-0 text-success">6210</p>
                                    </div>
                                    <div>
                                        <h1 className="mb-0 fw-600">60,021.21 <small className="ms-10 me-5"><i className="text-success fa fa-caret-up"></i> 1.42%</small></h1>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-12">
                                    <div className="ms-lg-20 mt-20 mt-lg-0 d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className="mb-0 text-fade">Your investment</p>
                                            <h2 className="mb-0 fw-600">$8,032</h2>
                                        </div>
                                        <div>
                                            <p className="mb-0 text-fade">Current Value</p>
                                            <h2 className="mb-0 fw-600 text-success">$10,125</h2>
                                        </div>
                                        <div>
                                            <p className="mb-0 text-fade">ROI</p>
                                            <h2 className="mb-0 fw-600 text-success">+28.2%</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-30">
                                <div className="col-lg-7 col-12">
                                    <h3 className="box-title">Investment Growth</h3>
                                    <div id="investment-chart"></div>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <h3 className="box-title">Your Portfolio</h3>
                                    <div className="d-flex justify-content-start align-items-center mt-md-20 mt-0">
                                        <div id="portfolio-chart"></div>
                                        <ul className="list-unstyled" style={{ marginLeft: '-21px' }}>
                                            <li><span className="badge badge-primary badge-dot me-10"></span> Large Cap Funds</li>
                                            <li><span className="badge badge-info badge-dot me-10"></span> Diversified Funds</li>
                                            <li><span className="badge badge-success badge-dot me-10"></span> Debt Funds</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box pull-up">
                        <div className="box-body">
                            <div className="d-md-flex justify-content-between align-items-center">
                                <div>
                                    <p><span className="text-primary">Equity</span> | <span className="text-fade">Consumption</span></p>
                                    <h3 className="mb-0 fw-500">Prudential FMCG Fund - Growth</h3>
                                </div>
                                <div className="mt-10 mt-md-0">
                                    <a href="invest.html" className="waves-effect waves-light btn btn-outline btn-primary">Invest Now</a>
                                </div>
                            </div>
                            <hr/>
                            <div className="d-md-flex justify-content-between align-items-center">								
                                <div className="d-flex justify-content-start align-items-center">
                                    <div className="min-w-100">
                                        <p className="mb-0 text-fade">Fund Size</p>
                                        <h6 className="mb-0">1,189.60cr</h6>
                                    </div>
                                    <div className="mx-lg-50 mx-20 min-w-70">
                                        <p className="mb-0 text-fade">Return(P.A.)</p>
                                        <h6 className="mb-0 text-success">+3.29%</h6>
                                    </div>
                                    <div>
                                        <p className="mb-0 text-fade">Risk</p>
                                        <h6 className="mb-0">High</h6>
                                    </div>
                                </div>
                                <div className="mt-10 mt-md-0">
                                    <a href="#" className="waves-effect waves-light btn btn-primary btn-flat"><i className="fa fa-shopping-cart me-10"></i>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box pull-up">
                        <div className="box-body">
                            <div className="d-md-flex justify-content-between align-items-center">
                                <div>
                                    <p><span className="text-primary">Equity</span> | <span className="text-fade">Consumption</span></p>
                                    <h3 className="mb-0 fw-500">Index Sensex Direct Plan-Growth</h3>
                                </div>
                                <div className="mt-10 mt-md-0">
                                    <a href="invest.html" className="waves-effect waves-light btn btn-outline btn-primary">Invest Now</a>
                                </div>
                            </div>
                            <hr/>
                            <div className="d-md-flex justify-content-between align-items-center">								
                                <div className="d-flex justify-content-start align-items-center">
                                    <div className="min-w-100">
                                        <p className="mb-0 text-fade">Fund Size</p>
                                        <h6 className="mb-0">2,555.96cr</h6>
                                    </div>
                                    <div className="mx-lg-50 mx-20 min-w-70">
                                        <p className="mb-0 text-fade">Return(P.A.)</p>
                                        <h6 className="mb-0 text-success">+23.37%</h6>
                                    </div>
                                    <div>
                                        <p className="mb-0 text-fade">Risk</p>
                                        <h6 className="mb-0">High</h6>
                                    </div>
                                </div>
                                <div className="mt-10 mt-md-0">
                                    <a href="#" className="waves-effect waves-light btn btn-primary btn-flat"><i className="fa fa-shopping-cart me-10"></i>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>					
                    <div className="box pull-up">
                        <div className="box-body">
                            <div className="d-md-flex justify-content-between align-items-center">
                                <div>
                                    <p><span className="text-primary">Equity</span> | <span className="text-fade">Consumption</span></p>
                                    <h3 className="mb-0 fw-500">Index Sensex Direct</h3>
                                </div>
                                <div className="mt-10 mt-md-0">
                                    <a href="invest.html" className="waves-effect waves-light btn btn-outline btn-primary">Invest Now</a>
                                </div>
                            </div>
                            <hr/>
                            <div className="d-md-flex justify-content-between align-items-center">								
                                <div className="d-flex justify-content-start align-items-center">
                                    <div className="min-w-100">
                                        <p className="mb-0 text-fade">Fund Size</p>
                                        <h6 className="mb-0">94.29cr</h6>
                                    </div>
                                    <div className="mx-lg-50 mx-20 min-w-70">
                                        <p className="mb-0 text-fade">Return(P.A.)</p>
                                        <h6 className="mb-0 text-success">+18.70%</h6>
                                    </div>
                                    <div>
                                        <p className="mb-0 text-fade">Risk</p>
                                        <h6 className="mb-0">Very High</h6>
                                    </div>
                                </div>
                                <div className="mt-10 mt-md-0">
                                    <a href="#" className="waves-effect waves-light btn btn-primary btn-flat"><i className="fa fa-shopping-cart me-10"></i>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>				
                    <div className="box pull-up">
                        <div className="box-body">
                            <div className="d-md-flex justify-content-between align-items-center">
                                <div>
                                    <p><span className="text-primary">Debt</span> | <span className="text-fade">Consumption</span></p>
                                    <h3 className="mb-0 fw-500">Market Fund Direct-Growth</h3>
                                </div>
                                <div className="mt-10 mt-md-0">
                                    <a href="invest.html" className="waves-effect waves-light btn btn-outline btn-primary">Invest Now</a>
                                </div>
                            </div>
                            <hr/>
                            <div className="d-md-flex justify-content-between align-items-center">								
                                <div className="d-flex justify-content-start align-items-center">
                                    <div className="min-w-100">
                                        <p className="mb-0 text-fade">Fund Size</p>
                                        <h6 className="mb-0">388.10cr</h6>
                                    </div>
                                    <div className="mx-lg-50 mx-20 min-w-70">
                                        <p className="mb-0 text-fade">Return(P.A.)</p>
                                        <h6 className="mb-0 text-success">+9.41%</h6>
                                    </div>
                                    <div>
                                        <p className="mb-0 text-fade">Risk</p>
                                        <h6 className="mb-0">Low</h6>
                                    </div>
                                </div>
                                <div className="mt-10 mt-md-0">
                                    <a href="#" className="waves-effect waves-light btn btn-primary btn-flat"><i className="fa fa-shopping-cart me-10"></i>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-12">
                    <div className="mb-20">
                        <a href="invest.html" className="waves-effect waves-light btn w-p100 btn-success mb-5">Invest Now <i className="ms-15 fa fa-angle-right"></i></a>
                    </div>
                    <div className="box bg-transparent no-shadow">
                        <div className="box-header ps-0 pb-0">
                            <h3 className="box-title no-border">
                                Upcoming SIP
                            </h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-body">
                            <p className="mb-15">25 Dec 2021</p>
                            <div className="d-flex pb-15 mb-15 bb-1 bb-dashed">
                                <div className="" style={{ width: '50px', marginight: '13px' }}>
                                    <img src="../../../images/logo/logo-1.jpg" className="avatar b-1" alt="" />
                                </div>
                                <div className="text-overflow" style={{ marginLeft: '5px' }}>
                                    <a href="#">
                                        <p className="mb-0 fw-500 text-overflow">Prudential FMCG Fund - Growth</p>
                                        <p className="mb-0 fw-500">$500</p>
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex pb-15 mb-15 bb-1 bb-dashed">
                                <div className="me-10" style={{ width: '50px' }}>
                                    <img src="../../../images/logo/logo-2.jpg" className="avatar b-1" alt="" />
                                </div>
                                <div className="text-overflow" style={{ marginLeft: '5px' }}>
                                    <a href="#">
                                        <p className="mb-0 fw-500 text-overflow">Market Fund Direct-Growth</p>
                                        <p className="mb-0 fw-500">$500</p>
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex pb-15 mb-15 bb-1 bb-dashed">
                                <div className="me-10 modal-1">
                                    <img src="../../../images/logo/logo-3.jpg" className="avatar b-1" alt="" />
                                </div>
                                <div className="text-overflow overflow_box">
                                    <a href="#">
                                        <p className="mb-0 fw-500 text-overflow">ABCD Money Market Fund Direct Plan-Growth</p>
                                        <p className="mb-0 fw-500">$500</p>
                                    </a>
                                </div>
                            </div>
                            <p className="mb-15">01 Jan 2022</p>
                            <div className="d-flex pb-15 mb-15 bb-1 bb-dashed">
                                <div className="me-10 modal-1 ">
                                    <img src="../../../images/logo/logo-4.jpg" className="avatar b-1" alt="" />
                                </div>
                                <div className="text-overflow overflow_box">
                                    <a href="#">
                                        <p className="mb-0 fw-500 text-overflow">A&D Money Market Fund Direct-Growth</p>
                                        <p className="mb-0 fw-500">$500</p>
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="me-10" style={{ width: '50px' }}>
                                    <img src="../../../images/logo/logo-5.jpg" className="avatar b-1" alt="" />
                                </div>
                                <div className="text-overflow" style={{ marginLeft: '5px' }}>
                                    <a href="#">
                                        <p className="mb-0 fw-500 text-overflow">Index Sensex Direct</p>
                                        <p className="mb-0 fw-500">$500</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="box bg-transparent no-shadow">
                        <div className="box-header ps-0 pb-0">
                            <h3 className="box-title no-border">
                                Best funds to buy
                            </h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-body funds_1">
                            <div className="fund-scorll">
                                <div className="d-flex align-items-center pb-15 mb-15 bb-1 bb-dashed">
                                    <div className="me-10" style={{ width: '50px' }}>
                                        <img src="../../../images/logo/logo-1.jpg" className="avatar b-1" alt="" />
                                    </div>
                                    <div>
                                        <a href="#">
                                            <p className="mb-0 fw-500">Prudential FMCG Fund - Growth</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center pb-15 mb-15 bb-1 bb-dashed">
                                    <div className="me-10" style={{ width: '50px' }}>
                                        <img src="../../../images/logo/logo-2.jpg" className="avatar b-1" alt="" />
                                    </div>
                                    <div>
                                        <a href="#">
                                            <p className="mb-0 fw-500">Market Fund Direct-Growth</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center pb-15 mb-15 bb-1 bb-dashed">
                                    <div className="me-10 modal-1">
                                        <img src="../../../images/logo/logo-3.jpg" className="avatar b-1" alt="" />
                                    </div>
                                    <div>
                                        <a href="#">
                                            <p className="mb-0 fw-500 overflow_box_1" >ABCD Money Market Fund Direct Plan-Growth</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center pb-15 mb-15 bb-1 bb-dashed">
                                    <div className="me-10 modal-1">
                                        <img src="../../../images/logo/logo-4.jpg" className="avatar b-1" alt="" />
                                    </div>
                                    <div>
                                        <a href="#">
                                            <p className="mb-0 fw-500 overflow_box_1">A&D Money Market Fund Direct-Growth</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center pb-15 mb-15 bb-1 bb-dashed">
                                    <div className="me-10" style={{ width: '50px' }}>
                                        <img src="../../../images/logo/logo-1.jpg" className="avatar b-1" alt="" />
                                    </div>
                                    <div>
                                        <a href="#">
                                            <p className="mb-0 fw-500">Prudential FMCG Fund - Growth</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center pb-15 mb-15 bb-1 bb-dashed">
                                    <div className="me-10" style={{ width: '50px' }}>
                                        <img src="../../../images/logo/logo-2.jpg" className="avatar b-1" alt="" />
                                    </div>
                                    <div>
                                        <a href="#">
                                            <p className="mb-0 fw-500">Market Fund Direct-Growth</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="me-10" style={{ width: '50px' }}>
                                        <img src="../../../images/logo/logo-5.jpg" className="avatar b-1" alt="" />
                                    </div>
                                    <div>
                                        <a href="#">
                                            <p className="mb-0 fw-500">Index Sensex Direct</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>			
        </section>
        
      </div>
    </div>
  )
}

export default DashboardScreen