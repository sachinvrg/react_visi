/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class AdaptiveHomepage extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">

                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Adaptive Homepage <span className="font-weight-light"></span>
                                    </h2>
                                    <div className="mt-4 text-center">
                                        <img src="img/svg/retail_adaptive_hompage.svg" height="400" />

                                    </div>
                                    <p className="mt-4 text-justify">AI technology has the inbuilt ability to learn and adapt as they continue to
                                compile information, predict, and make decisions. As <b
                                            className="font-weight-bold">VisionAize’s</b> AI technology learns through real-time
                                data, they can refine their decision-making capabilities to improve the outcome. Your
                                retail business, including mobile and digital portals, must recognize your customers,
                                their demands, and your activities. </p>

                                    <p className="text-justify">This is a part of customizing the online retail experience. Your system has to do a
                                    detailed study of the customer's current context, previous purchases, and shopping
                                    behavior. Based on this analysis, you can show customized recommendations that will
                                    attract customers and ensure that they make a purchase. AI systems help to evolve a
                                    customer's online business experience continually. It creates hyper-relevant displays
                                for every interaction caused by the customer. </p>

                                    <p className="text-justify">AI studies massive databases and DMP created from third-party data collected through
                                    cookies and the customers' historical behavior. The customers' recommendations are
                                    generated from algorithms based on this third-party data together and the first-party
                                data, which involves the direct purchase history on the site.</p>

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
