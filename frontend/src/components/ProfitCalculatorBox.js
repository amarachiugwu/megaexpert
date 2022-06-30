import React from 'react'

function ProfitCalculatorBox() {
  return (
    <section className="profit-calculation wow slideInUp overflow-hidden">
            <div className="container">
                <div className="profit-calculation-wrapper">
                    <h3 className="title">Calculate How Much You Profit</h3>
                    <form className="profit-form">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="form--group">
                                    <select style={{ display: 'none' }}>
                                        <option value="plan01">Select the Plan</option>
                                        <option value="plan01">Business Plan</option>
                                        <option value="plan01">Professional Plan</option>
                                        <option value="plan01">Individual Plan</option>
                                    </select>
                                    <div class="nice-select" tabindex="0"><span class="current">Select the Plan</span><ul class="list"><li data-value="plan01" class="option selected">Select the Plan</li><li data-value="plan01" class="option">Business Plan</li><li data-value="plan01" class="option">Professional Plan</li><li data-value="plan01" class="option">Individual Plan</li></ul></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="form--group">
                                    <select style={{ display: 'none' }}>
                                        <option value="plan01">Select the Currency</option>
                                        <option value="plan01">Bitcoin</option>
                                        <option value="plan01">Ethereum</option>
                                        <option value="plan01">BNB</option>
                                        <option value="plan01">Solana</option>
                                        <option value="plan01">Dash</option>
                                        <option value="plan01">Litecoin</option>
                                        <option value="plan01">Tether</option>
                                        <option value="plan01">Shib</option>
                                    </select>
                                    <div class="nice-select" tabindex="0"><span class="current">Select the Currency</span><ul class="list"><li data-value="plan01" class="option selected">Select the Currency</li><li data-value="plan01" class="option">Bitcoin</li><li data-value="plan01" class="option">Ethereum</li><li data-value="plan01" class="option">Ripple</li></ul></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form--group">
                                    <input type="text" className="form--control" placeholder="Enter the Ammount" required />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="profit-title-wrapper d-flex justify-content-between my-5 mb-3">
                        <h5 className="daily-profit text--secondary">Daily Profit - <span className="ammount">0.1200</span>BTC</h5>
                        <h5 className="daily-profit theme-four">Total Profit - <span className="ammount">24.1200</span>BTC</h5>
                    </div>
                    <div className="invest-range-area">
                        <div className="main-amount">
                            <input type="text" className="calculator-invest" id="btc-amount" readOnly />
                        </div>
                        <div className="invest-amount" data-min="01 BTC" data-max="10000 BTC">
                            <div id="btc-range" className="invest-range-slider"></div>
                        </div>
                        <button type="submit" className="custom-button px-0">Invest now</button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ProfitCalculatorBox