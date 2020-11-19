/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class CustomizedInvestments extends Component {
    render() {
        return (
            <main>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <section>
                                <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                    Customized Investments <span className="font-weight-light"></span>
                                </h2>
                                <div className="mt-4 text-center">
                                    <img src="img/svg/customize_investment.svg" height="300" className="img-fluid"/>
                                </div>
                                {/* <!-- <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                                    <img className="img-fluid" src="img/Images/investment.jpg" alt="Sample image">
                                    <Link>
                                        <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                    </Link>
                                </div> --> */}
                                    <p className="mt-4 text-justify">
                                    In Investment Banking, AI can become an aid in three prime regions. The first is for
                                    Trade Processing. There are ML platforms that can identify and tap the potential of
                                    systematic investment strategies. Further, it can also execute trades on a global level.
                                    AI can keep track of the trader activities. Using this, they can accurately match and
                                    provide brokers, stock exchanges, and alternative trading systems. They can help
                                    optimize the routing of trades using the firm's trading desk and internal and external
                                    dealer algorithms. </p>
    
                                    <p className="text-justify">Second, AI can use predictions and analysis to automate trade processing and service.
                                    Investment bankers can receive active real-time insights into the risks and benefits of
                                    a particular trade. Third, AI automates the market data collection procedure. It can
                                    provide consultations, DevOps, and software development. In short, a specific
                                    institution can get information on market trends without any human interventions or
                                    error. Your customers will love the AI-based automation that optimizes tasks, including
                                    trade processing. Providing a one to one customized insight for every customer is well
                                    beyond human capacity. </p>
    
                                    <p className="text-justify">AI can study, sort, and tag the previous and current data sets to provide tailored
                                    reports. In investment banking, there are high stakes, and AI can be deployed to the
                                    securities division to handle equity trading desks and fixed income clearing functions.
                                    The system is already in use over a broad range. It can completely transform the
                                    competitive dynamics.
    
                                </p>
    
                            </section>
    
                        </div>
                        <div className="col-md-4">
                            <div className="list-group fanylist_group">
                                <Link to={Links.ImprovedCustomerRetention} className="list-group-item list-group-item-action">
                                    <i className="fas fa-check mr-2"></i> <span>Improved customer retention</span></Link>
                                <Link to={Links.Chatbots} className="list-group-item list-group-item-action">
                                    <i className="fas fa-check mr-2"></i> <span>Chatbots</span></Link>
                                <Link to={Links.CustomizedInvestments} className="list-group-item list-group-item-action">
                                    <i className="fas fa-check mr-2"></i> <span>Customized Investments</span></Link>
                                <Link to={Links.LifeTimeValuePrediction} className="list-group-item list-group-item-action">
                                    <i className="fas fa-check mr-2"></i> <span>Life Time Value Prediction</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        )
    }
}
