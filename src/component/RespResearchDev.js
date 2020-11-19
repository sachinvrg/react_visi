import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../app/links';
export default class RespResearchDev extends Component {
    render() {
        return (
            <div>
                <main>

                    <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">

                                    <section>
                                        <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                            Responsive Research & Development <span className="font-weight-light"></span>
                                        </h2>
                                        <div className="mb-4">
                                            <img src="img/svg/Responsive Research & Development.svg" className="img-fluid w-100" />
                                        </div>
                                        <p className="text-justify">Today, AIML is effective in learning from experience, adjusting to new inputs, and
                                        performing human-like tasks. It quickly combines large database with rapid, iterative
                                        processing and detailed algorithms, which allow the program to learn automatically from
                                        patterns in the data.
                    </p>

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
                                        <Link to={Links.CustomerInsights} className="list-group-item list-group-item-action"> <i
                                            className="fas fa-check mr-2"></i> <span>Customer Insights</span></Link>
                                        <Link to={Links.CustomerEngage} className="list-group-item list-group-item-action"> <i
                                            className="fas fa-check mr-2"></i> <span>Customer Engagement</span></Link>
                                        <Link to={Links.SmartOptimization} className="list-group-item list-group-item-action"> <i
                                            className="fas fa-check mr-2"></i> <span>Smart Optimization</span></Link>
                                        <Link to={Links.RespResearchDev} className="list-group-item list-group-item-action"> <i
                                            className="fas fa-check mr-2"></i> <span>Responsive Research & Development</span></Link>
                                        <Link to={Links.DemandForecasting} className="list-group-item list-group-item-action"> <i
                                            className="fas fa-check mr-2"></i> <span>Demand Forecastingk</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        )
    }
}
