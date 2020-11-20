/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Retail extends Component {
    render() {
        return (
            <main>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <section>
                                <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                    RETAIL <span className="font-weight-light"></span>
                                </h2>
                                    <p className="text-justify">
                                    Retail analytics is the process of providing analytical data on inventory levels, supply
                                    chain movement, consumer demand, sales, etc. that are crucial for making marketing, and
                                    procurement decisions.
                                </p>
                                    <p className="text-justify">
                                    An easy, ready-to-use, simple retail supply chain analytic solution that provides
                                    indepth
                                    business intelligence in the form of graphical reports, KPIs, Dashboards and Predictive
                                    Models to take realtime decisions to improve productivity and performance of your
                                    organisation
                                </p>
                                <h4 className="title my-5 wow fadeIn  font-weight-bold" data-wow-delay="0.2s">
                                    Advanced Retail <span className="font-weight-light">Analytics</span>
                                </h4>
                                <div className="row text-center d-flex justify-content-center mt-4">
                                    <div className="col-lg-6 p-3 hoverable-2">
                                        <img src="img/svg/012-system-1.svg" height="60px"/>
                                        <h6 className="my-4 font-weight-bold">Customer Segmentation and Profiling
    
                                        </h6>
                                            <p className="text-justify">
                                            Identify engaged/disengaged customer segments and develop customer
                                            retention/acquisition strategy
                                        </p>
                                    </div>
                                    <div className="col-lg-6 p-3 hoverable-2">
                                        <img src="img/svg/001-market.svg" height="60px"/>
                                        <h6 className="my-4 font-weight-bold">Market Basket Analysis
    
                                        </h6>
                                            <p className="text-justify">Identify the strength of relationships among the products purchased together and
                                            plan
                                            product placements accordingly</p>
                                    </div>
                                    <div className="col-lg-6 p-3 hoverable-2">
                                        <img src="img/svg/002-demand.svg" height="60px"/>
                                        <h6 className="my-4 font-weight-bold">Demand Forecasting
    
                                        </h6>
                                            <p className="text-justify">Scrub or add to sales history to generate demand forecast aiding sales planning,
                                            inventory management and resource deployment</p>
                                    </div>
                                    <div className="col-lg-6 p-3 hoverable-2">
                                        <img src="img/svg/002-speaker.svg" height="60px"/>
                                        <h6 className="my-4 font-weight-bold">Promotion Impact
    
                                        </h6>
                                            <p className="text-justify">
                                            Identify optimum discount levels across various product categories and their
                                            combined effect on overall sales</p>
                                    </div>
                                </div>
                            </section>
    
                        </div>
                        <div className="col-md-4">
                            <div className="list-group fanylist_group">
                                <Link to={Links.InventoryManage} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Inventory Management</span></Link>
                                <Link to={Links.AdaptiveHomepage} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Adaptive homepage</span></Link>
                                <Link to={Links.ConversationalSupport} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Conversational Support</span></Link>
                                <Link to={Links.DemandForecasting} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Demand Forecasting</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
        </main>
        )
    }
}
