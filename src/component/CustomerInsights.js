/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../app/links';

export default class CustomerInsights extends Component {
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
                                            Customer Insights <span className="font-weight-light"></span>
                                        </h2>
                                        <div className="mb-4 text-center">
                                            <img src="img/svg/ai_speech.svg" className="" height="300" />
                                        </div>

                                        <p className="text-justify">AI based solutions are playing a revolutionary role in today’s retail industry. AIML
                                        based models are helping retail industries to understand customer’s behaviour, buying
                                        habits, and large output to introduce new products in the market. It’s problem solving
                                        methods are crucial and becoming a game changer in today’s retail industry.
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
